import React, { useState, useEffect } from 'react';
import { Appearance, ScrollView, View, Text, StyleSheet, ImageBackground, Button, TouchableOpacity  } from 'react-native';
import Dog from '../components/Dog.js';

const HomePage = ({navigation, route}) => {

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
          justifyContent: 'center',
          alignItems: 'center'
          //backgroundColor: theme === 'light' ? 'white' : 'black',
        },
        headerText: {
            backgroundColor: theme === 'light' ? 'black' : 'white',
            color: theme === 'light' ? 'orange' : 'purple',
            fontSize: 20,
            padding: 5,
            textAlign: 'center',
            borderWidth: 5,
            borderRadius: 10,
            borderColor: theme === 'light' ? 'orange' : 'purple',
        },
        text: {
            color: theme === 'light' ? 'white' : 'black',
            backgroundColor: theme === 'light' ? 'orange' : 'white',
            borderRadius: 10,
            borderColor:'black',
            borderWidth:5,
            padding: 5,
            textAlign: 'center',
            fontSize: 15,
            margin:5,
            width: 300

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
            color: 'white',
            textAlign:'center',
            fontSize: 20,
        }
    });

    return(
        <ImageBackground
            source={theme==='light' ? lightBG : darkBG}
            style={{flex:1}}
        >
            <ScrollView contentContainerStyle={styles.container}>

                {/* Feed Me Page */}
                <TouchableOpacity
                    style={styles.customButton}
                    onPress={()=>navigation.navigate("Feed Me")}
                >
                    <Text style={styles.customButtonText}>Go to Feed Me Page</Text>
                </TouchableOpacity>

                {/* Dog Translator Page */}
                <TouchableOpacity
                    style={styles.customButton}
                    onPress={() => navigation.navigate('Dog Translator')}
                >
                    <Text style={styles.customButtonText}>Go to Dog Translator</Text>
                </TouchableOpacity>

                {/* Practice Page */}
                <TouchableOpacity
                    style={styles.customButton}
                    onPress = {() => {
                        navigation.navigate('Practice Page', {
                            itemId: 99,
                            sampleParam: "Hello from Param in Feed Me Page"
                        })
                    }}
                >
                    <Text style={styles.customButtonText} >Go to Practice Page</Text>
                </TouchableOpacity>

                {/* Create Post Page */}
                <TouchableOpacity
                    style={styles.customButton}
                    onPress={()=>navigation.navigate('Create Post')}
                >
                    <Text style={styles.customButtonText}>Create Post</Text>
                </TouchableOpacity>

                {route.params?.post && (
                    <View>
                        <Text style={styles.headerText}>POSTS</Text>
                        <Text style={styles.text}>{route.params?.post}</Text>
                    </View>
                )}

            </ScrollView>
        </ImageBackground>
    )
}

export default HomePage;