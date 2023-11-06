import React, { useState, useEffect } from 'react';
import { Appearance, ScrollView, View, Text, StyleSheet, ImageBackground } from 'react-native';
import DogTranslator from '../components/DogTranslator.js'

const DogTranslatorPage = () => {

    const theme = Appearance.getColorScheme();
    const lightBG = require('./images/lightWP.jpg')
    const darkBG = require('./images/darkWP.png')

    const styles = StyleSheet.create({
        text: {
            fontSize: 20,
            color: theme === 'light' ? 'white' : 'black',
            backgroundColor: theme==='light'?'black':'white',
            borderRadius: 10,
            padding:10,
            textAlign: 'center'
        }
    });

    return(
        <ImageBackground
            source={theme==='light' ? lightBG : darkBG}
            style={{flex:1}}
        >

            <ScrollView contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
                <DogTranslator style={styles.text} />
            </ScrollView>

        </ImageBackground>
    )
}

export default DogTranslatorPage