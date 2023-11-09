import React, {useState, useEffect} from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'

const LoginPage = ({navigation}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [borderColor, setBorderColor] = useState("gray")
    const [errorMessage, setErrorMessage] = useState("")

    const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        text:{
            color:'black'
        },
        textInput: {
            height: 50,
            width: 300,
            padding: 10,
            backgroundColor: 'white',
            color:'black',
            borderRadius: 10,
            borderWidth: 5,
            borderColor:borderColor,
            textAlign:'center',
            margin:10
        },
        errorMessage:{
            color:'red'
        }
    })

    const handleLogin = () => {
        if(username === 'username' && password === 'password'){
            navigation.navigate('Section')
        }else{
            setBorderColor('red')
            setErrorMessage('Invalid Credentials')
            setUsername("")
            setPassword("")
        }
    }

    return (
        <View style={styles.container}>

            {errorMessage === "" ? <Text style={styles.text}>Hello from Login Page</Text> : <Text style={styles.errorMessage}>{errorMessage}</Text>}

            <TextInput
                multiline
                placeholder="username"
                style={styles.textInput}
                value={username}
                onChangeText={setUsername}
            />

            <TextInput
                multiline
                placeholder="password"
                style={styles.textInput}
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity onPress={handleLogin} >
                <Text>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Carousel')}>
                <Text>Go to Carousel</Text>
            </TouchableOpacity>

        </View>
    )
}

export default LoginPage;