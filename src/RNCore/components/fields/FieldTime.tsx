import { FontAwesome } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { Pressable, TextInput, View } from "react-native";

import tw from "../../libs/tailwind";
import { zfill } from "../../sugar/text";

interface ITimeField {
    class?: string // tailwind classes
    value: string | null // Если не задано отображаем --:--
    onChange?: (time: string) => void // событие должно вызываться при снятии фокуса с компонента.
    useButtons?: boolean // если true - отображаем кнопки "<" слева и справа ">" + или - 1 час соответственно
}

const timePattern = /^([0-2]|[01]\d:|2[0-3]:)([0-5]\d?)?$/;

function changeHour(time: string, shift: number) {
    if (time.length < 2) {
        time = '00:00'
    }

    let updated = zfill(parseInt(time.slice(0, 2)) + shift) + time.slice(2)
    
    if (timePattern.test(updated)) {
        return updated
    }
    
    return time
}

export function FieldTime(props: ITimeField) {
    const [value, setValue] = useState(props?.value && timePattern.test(props.value) ? props.value : '')
    const textInputRef = useRef<TextInput | null>(null);

    function handleChange(text: string) {
        let formattedText = text.replace(/[^0-9]/g, "")
        
        if (text.length === 2 && value.length > text.length) {
            formattedText = formattedText.slice(0, 1)
        } else if (text.length >= 2) {
            formattedText = `${formattedText.slice(0, 2)}:${formattedText.slice(2)}`
        }

        if (formattedText.length === 0 || timePattern.test(formattedText)) {
            setValue(formattedText)
        }
    }

    function handleBlur(text: string) {
        return props?.onChange && text.length === 5 && timePattern.test(text) && props.onChange(text)
    }

    function handleAddHour() {
        setValue(prev => changeHour(prev, 1))
    };

    function handleSubtractHour() {
        setValue(prev => changeHour(prev, -1))
    };

    return <View style={tw`flex flex-row gap-2 items-center ${props.class || ''}`}>
    {props.useButtons && (
        <Pressable onPress={handleSubtractHour} onBlur={() => handleBlur(value)}>
            <FontAwesome name="minus" style={tw`text-inherit`} />
        </Pressable>
      )}
    <TextInput
        ref={textInputRef}
        placeholder="--:--"
        inputMode="numeric"
        maxLength={5}
        value={value}
        onChangeText={handleChange}
        onBlur={({nativeEvent}) => handleBlur(nativeEvent.text)}
        style={tw`w-full text-inherit`}
    />
      {props.useButtons && (
        <Pressable onPress={handleAddHour} onBlur={() => handleBlur(value)}>
            <FontAwesome name="plus" style={tw`text-inherit`} />
        </Pressable>
      )}
    </View>
}

