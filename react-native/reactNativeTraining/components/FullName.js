import React, {useState} from 'react';
import {Button, View, Text, Image, ScrollView, TextInput} from 'react-native';

const FullName = () => {
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

export default FullName;