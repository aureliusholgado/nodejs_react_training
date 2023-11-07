import React from 'react';
import { Appearance, ScrollView, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const PracticePage = ({navigation, route}) => {
    const theme = Appearance.getColorScheme();

    // Getting the param/s from Feed Me Page
    const {itemId, sampleParam} = route.params;

    // Background Paths
    const lightBG = require('../images/lightWP.jpg')
    const darkBG = require('../images/darkWP.jpg')

    const styles = StyleSheet.create({
        text:{
            color: 'white',
            backgroundColor: theme === 'light' ? 'orange' : 'purple',
            borderRadius: 10,
            borderColor:theme==='light'?'black':'white',
            borderWidth:5,
            padding: 5,
            textAlign: 'center',
            fontSize: 20,
            margin: 5,
        },
        customButton: {
            backgroundColor: 'white',
            padding: 10,
            borderRadius:10,
            borderWidth: 3,
            borderColor: theme === 'light' ? 'orange' : 'purple',
            margin: 5
        },
        customButtonText: {
            color: theme === 'light' ? 'orange' : 'purple',
            fontSize:15,
            textAlign:'center'
        },
    })

    return(
        <ImageBackground
            source={theme==='light' ? lightBG : darkBG}
            style={{flex:1}}
        >
        <ScrollView contentContainerStyle={{flex:1, justifyContent: 'center', alignItems: 'center'}}>

            <Text style={styles.text}> Practice Page </Text>

            {/* itemId param */}
            {itemId !== undefined && (
                <Text style={styles.text}>Item ID: {JSON.stringify(itemId)}</Text>
            )}

            {/* sampleParam */}
            {sampleParam !== undefined && (
                <Text style={styles.text}>Sample Param: {JSON.stringify(sampleParam)} </Text>
            )}

            {/* Push Button */}
            <TouchableOpacity
                style = {styles.customButton}
                /* this will not do anything
                    onPress = { () => navigation.navigate('Practice Page') }
                */

                // this will add a new route/screen in the stack
                onPress = { () => {navigation.push('Practice Page', {
                        itemId: Math.floor(Math.random()*100)
                    })
                }}
            >
                <Text style={styles.customButtonText}>Go to Practice Page... again</Text>
            </TouchableOpacity>

            {/* Go Back Button */}
            <TouchableOpacity
                style={styles.customButton}
                onPress={()=>navigation.goBack()}
            >
                <Text style={styles.customButtonText}>Go Back</Text>
            </TouchableOpacity>

            {/* Pop to Top Button */}
            <TouchableOpacity
                style={styles.customButton}
                onPress={()=>navigation.popToTop()}
            >
                <Text style={styles.customButtonText}>Go back to first screen in the stack</Text>
            </TouchableOpacity>

        </ScrollView>

        </ImageBackground>
    )
}

export default PracticePage;