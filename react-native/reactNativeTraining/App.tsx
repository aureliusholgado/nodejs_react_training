import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
    const name = 'Aurelius'
    const introduce = (firstName, middleInitial, lastName) => {
        return `Hello, my last name is ${lastName}, and my middle initial is ${middleInitial}. You can call me ${firstName}.`
    }
    return(
        <ScrollView>
            <Text>{introduce(name, "Castillo", "Holgado")}</Text>
        </ScrollView>
    )
}


const Nickname = props => {
    return(
        <View>
            <Text>Hello, my nickname is {props.name}</Text>
        </View>
    )
}

const Picture = () => {
    return(
        <Image
            source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={{
                width: 200,
                height: 200
            }}
        />
    )
}

const Input = () => {
    return(
        <View>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                }}
                defaultValue="You can type in me"
            />
        </View>
    )
}

const Display = () => {
    return(
        <View>
            <App />
            <Picture />
            <Input />
            <Nickname name="Eliot"/>
            <Nickname name="Ely"/>
            <Nickname name="El"/>
        </View>
    )
}

export default Display;
