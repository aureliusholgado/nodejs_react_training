import React, { useState, useEffect } from 'react';
import { Appearance, ScrollView, View, Text, StyleSheet, ImageBackground, TouchableOpacity  } from 'react-native';
import Dog from '../components/Dog.js';

const FeedMePage = ({navigation}) => {

    const [theme, setTheme] = useState(Appearance.getColorScheme());
    useEffect(() => {
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
          setTheme(colorScheme);
        });

        return () => {
          subscription.remove();
        };
    }, []);

    const lightBG = require('../images/lightWP.jpg')
    const darkBG = require('../images/darkWP.jpg')

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          //backgroundColor: theme === 'light' ? 'white' : 'black',
        },
        text: {
            color: theme === 'light' ? 'white' : 'black',
            backgroundColor: theme === 'light' ? 'orange' : 'white',
            borderRadius: 10,
            borderColor:'black',
            borderWidth:5,
            padding: 5,
            textAlign: 'center',
            fontSize: 25
        },
        customButton: {
            backgroundColor: theme === 'light' ? 'orange' : 'purple',
            padding: 10,
            borderRadius:10,
            borderWidth: 3,
            borderColor: theme === 'light' ? 'black' : 'white',
            margin: 5
        },
        customButtonText: {
            color: 'white'
        }
    });

    return(
        <ImageBackground
            source={theme==='light' ? lightBG : darkBG}
            style={{flex:1}}
        >
            <ScrollView style={styles.container} contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
                <Dog name="Coco" style={styles.text} />
            </ScrollView>

        </ImageBackground>
    )
}

export default FeedMePage;