import React, {useState} from 'react';
import {Button, View, Text, Image, ScrollView, TextInput} from 'react-native';
import Dog from './components/Dog.js';
import DogTranslator from './components/DogTranslator.js';
import Logo from './components/Logo.js';
import Picture from './components/Picture.js';
import FullName from './components/FullName.js';
import Nickname from './components/Nickname.js';



const App = () => {
    return(
        <View>
            <FullName />
            <Picture />
            <Nickname name="Eliot"/>
            <Nickname name="Ely"/>
            <Nickname name="El"/>
            <Dog name="Coco"/>
            <Dog name="Crunch"/>
            <DogTranslator />
            <Logo />
        </View>
    )
}

export default App;
