import React from 'react';
import { Appearance, ScrollView, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const PracticePage = ({navigation}) => {
    const theme = Appearance.getColorScheme();

    // Background Paths
    const lightBG = require('../images/lightWP.jpg')
    const darkBG = require('../images/darkWP.jpg')

    const styles = StyleSheet.create({
        text:{
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
    })

    return(
        <ImageBackground
            source={theme==='light' ? lightBG : darkBG}
            style={{flex:1}}
        >
        <ScrollView contentContainerStyle={{flex:1, justifyContent: 'center', alignItems: 'center'}}>

            <Text style={styles.text}> Practice Page </Text>

            {/* Button 1 */}
            <TouchableOpacity
                style = {styles.customButton}
                /* this will not do anything
                    onPress = { () => navigation.navigate('Practice Page') }
                */

                // this will add a new route
                onPress = { () => navigation.push('Practice Page') }
            >
                <Text style={styles.customButtonText}>Go to Practice Page... again</Text>
            </TouchableOpacity>

        </ScrollView>

        </ImageBackground>
    )
}

export default PracticePage;