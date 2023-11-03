import React, {useState} from 'react';
import {Button, View, Text, Image, ScrollView, TextInput} from 'react-native';

const Nickname = props => {
    return(
        <View>
            <Text>Hello, my name is {props.name}</Text>
        </View>
    )
}