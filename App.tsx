import React from "react";
import { Text } from "react-native";
import { FieldTime } from "./src/RNCore/components/fields/FieldTime";
import { Col1 } from "./src/RNCore/components/markup/markup";
import { EDate } from "./src/RNCore/sugar/date";

export default function App() {
    return (
        <Col1 class={'m-5'}>
            <Text>Привет! Ниже должно быть по больше примеров использования готового компонента. </Text>
            <Text>Разной ширины, с разным фоном и цветом шрифта</Text>
                <FieldTime
                    class={'mt-2 bg-primary'}
                    value={null}
                />
                <FieldTime
                    class={'mt-2 bg-danger'}
                    value={new EDate().isoDate()}
                />
                <FieldTime
                    value={null}
                    class={'w-50 mt-2 bg-success'}
                />
                <FieldTime
                    value={null}
                    class={'w-25 mt-2 bg-black text-white'}
                    useButtons
                />
        </Col1>

    );
}
