import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const SectionPage = ({navigation, route}) => {

    const resetState = () => {
        navigation.navigate('Login', {
            resetState: true,
            newUsername: '',
            newPassword: '',
            newBorderColor: 'black',
            newErrorMessage: '',
        });
    };

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={{ margin:10 }} >
                    <TouchableOpacity onPress={resetState} >
                        <Text>Logout</Text>
                    </TouchableOpacity>
                </View>
            )
        })
    }, [])

    const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        text:{
            color:'black'
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello from Section Page</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Carousel')}>
                <Text>Go to Carousel</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SectionPage;