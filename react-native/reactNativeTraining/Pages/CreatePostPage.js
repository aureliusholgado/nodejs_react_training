import React from 'react';
import { Appearance, ScrollView, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const CreatePostPage = ({navigation, route}) => {
    theme = Appearance.getColorScheme();

    // Background Paths
    const lightBG = require('../images/lightWP.jpg')
    const darkBG = require('../images/darkWP.jpg')

    const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        text:{
            color: theme === 'light' ? 'white' : 'black',
            backgroundColor: theme === 'light' ? 'orange' : 'white',
            borderRadius: 10,
            borderColor:'black',
            borderWidth:5,
            padding: 5,
            textAlign: 'center',
            fontSize: 20,
            margin: 5,
        }
    })
    return(
        <ImageBackground
            source={theme==='light' ? lightBG : darkBG}
            style={{flex:1}}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.text}>Create Post Page</Text>
            </ScrollView>
        </ImageBackground>
    )
}
export default CreatePostPage;