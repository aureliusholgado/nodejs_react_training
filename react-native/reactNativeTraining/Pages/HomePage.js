import React, { useState, useEffect } from 'react';
import { Appearance, ScrollView, View, Text, StyleSheet, ImageBackground, Button, TouchableOpacity  } from 'react-native';
import Dog from '../components/Dog.js';
import LogoTitle from './LogoTitle.js'

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
        postHeader: {
            backgroundColor: 'white',
            color: theme === 'light' ? 'orange' : 'purple',
            fontSize: 20,
            padding: 5,
            textAlign: 'center',
            borderWidth: 5,
            borderRadius: 10,
            borderColor: theme === 'light' ? 'orange' : 'purple',
        },
        postBody: {
            color: 'black',
            backgroundColor: 'white',
            borderRadius: 10,
            borderColor:'black',
            borderWidth:5,
            padding: 5,
            textAlign: 'center',
            fontSize: 15,
            margin:5,
            width: 300
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
                    <Text style={styles.customButtonText}>Feed Coco</Text>
                </TouchableOpacity>

                {/* Dog Translator Page */}
                <TouchableOpacity
                    style={styles.customButton}
                    onPress={() => navigation.navigate('Dog Translator')}
                >
                    <Text style={styles.customButtonText}>Dog Translator</Text>
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
                    <Text style={styles.customButtonText} >Practice Page</Text>
                </TouchableOpacity>

                {/* Create Post Page */}
                <TouchableOpacity
                    style={styles.customButton}
                    onPress={()=>navigation.navigate('Create Post')}
                >
                    <Text style={styles.customButtonText}>Create Post</Text>
                </TouchableOpacity>

                {/* Display POST if available */}
                {route.params?.post && (
                    <View>
                        <Text style={styles.postHeader}>POST</Text>
                        <Text style={styles.postBody}>{route.params?.post}</Text>
                    </View>
                )}

                {/* Change Title Button */}
                <TouchableOpacity
                    style={styles.customButton}
                    onPress={() => navigation.setOptions({
                        headerTitle: (props) => <LogoTitle {...props} />
                        // title: 'NICE'
                    })}
                >
                    <Text style={styles.customButtonText}>Press to change the title</Text>
                </TouchableOpacity>

                {/* Logo Title Page */}
                <TouchableOpacity
                    style={styles.customButton}
                    onPress = {()=>navigation.navigate('Logo Title')}
                >
                    <Text style={styles.customButtonText}>Logo Title</Text>
                </TouchableOpacity>

                {/* Count Page */}
                <TouchableOpacity
                    style={styles.customButton}
                    onPress = {()=>navigation.navigate('Count')}
                >
                    <Text style={styles.customButtonText}>Counter</Text>
                </TouchableOpacity>

                {/* Section Page */}
                <TouchableOpacity
                    style={styles.customButton}
                    onPress = {()=>navigation.navigate('Section Page')}
                >
                    <Text style={styles.customButtonText}>Section Page</Text>
                </TouchableOpacity>

                {/* Carousel Page */}
                <TouchableOpacity
                    style={styles.customButton}
                    onPress = {()=>navigation.navigate('Carousel Page')}
                >
                    <Text style={styles.customButtonText}>Carousel Page</Text>
                </TouchableOpacity>

            </ScrollView>
        </ImageBackground>
    )
}

export default HomePage;