import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const LoginPage = ({navigation}) => {

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
            <Text style={styles.text}>Hello from Login Page</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Section')}>
                <Text>Go to Section</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Carousel')}>
                <Text>Go to Carousel</Text>
            </TouchableOpacity>

        </View>
    )
}

export default LoginPage;