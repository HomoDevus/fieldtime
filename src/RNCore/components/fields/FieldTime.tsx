import { FontAwesome } from '@expo/vector-icons'
import { useRef, useState } from 'react'
import { Pressable, TextInput, View } from 'react-native'

import tw from '../../libs/tailwind'
import { shiftHour, timePattern } from '../../sugar/date'

interface ITimeField {
    class?: string // tailwind classes
    value: string | null // Если не задано отображаем --:--
    onChange?: (time: string) => void // событие должно вызываться при снятии фокуса с компонента.
    useButtons?: boolean // если true - отображаем кнопки "<" слева и справа ">" + или - 1 час соответственно
}

export function FieldTime(props: ITimeField) {
    const [value, setValue] = useState(
        props?.value && timePattern.test(props.value) ? props.value : '',
    )
    const textInputRef = useRef<TextInput | null>(null)

    const coloredText = { color: tw`${props.class || ''}`.color as string }

    function handleChange(text: string) {
        let formattedText = text.replace(/[^0-9]/g, '')

        if (text.length === 2 && value.length > text.length) {
            formattedText = formattedText.slice(0, 1)
        } else if (text.length >= 2) {
            formattedText = `${formattedText.slice(0, 2)}:${formattedText.slice(
                2,
            )}`
        }

        if (formattedText.length === 0 || timePattern.test(formattedText)) {
            setValue(formattedText)
        }
    }

    function focusOnInput() {
        if (textInputRef?.current && !textInputRef.current.isFocused()) {
            textInputRef.current.focus()
        }
    }

    function handleBlur(text: string) {
        return (
            props?.onChange &&
            text?.length === 5 &&
            timePattern.test(text) &&
            props.onChange(text)
        )
    }

    function handleAddHour() {
        focusOnInput()
        setValue(prev => shiftHour(prev, 1))
    }

    function handleSubtractHour() {
        focusOnInput()
        setValue(prev => shiftHour(prev, -1))
    }

    return (
        <View style={tw`flex flex-row gap-3 items-center ${props.class || ''}`}>
            {props.useButtons && (
                <Pressable onPress={handleSubtractHour} hitSlop={10}>
                    <FontAwesome name='minus' style={coloredText} />
                </Pressable>
            )}
            <TextInput
                ref={textInputRef}
                placeholder='--:--'
                placeholderTextColor={coloredText.color}
                inputMode='numeric'
                maxLength={5}
                value={value}
                onChangeText={handleChange}
                onBlur={(e: any) => {
                    // Проверяем что новый элемент фокуса находится за пределами View
                    if (
                        !e?.relatedTarget ||
                        e?.relatedTarget?.parentNode !== e?.target?.parentNode
                    ) {
                        handleBlur(e.nativeEvent.text)
                    }
                }}
                onEndEditing={({ nativeEvent }) => handleBlur(nativeEvent.text)}
                style={[tw`w-12 text-center`, coloredText]}
            />
            {props.useButtons && (
                <Pressable onPress={handleAddHour} hitSlop={10}>
                    <FontAwesome name='plus' style={coloredText} />
                </Pressable>
            )}
        </View>
    )
}
