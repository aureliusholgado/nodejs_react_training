import React, {useState, useEffect} from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'

const LoginPage = ({navigation, route}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [borderColor, setBorderColor] = useState("gray")
    const [messageColor, setMessageColor] = useState("black")

    console.log(route.params)

    /*const resetLoginState = (newUsername, newPassword, newBorderColor, newErrorMessage) => {
        setUsername(newUsername);
        setPassword(newPassword);
        setBorderColor(newBorderColor);
        setMessage(newErrorMessage);
    };

    if (resetState) {
        resetLoginState(
            route.params.newUsername,
            route.params.newPassword,
            route.params.newBorderColor,
            route.params.newErrorMessage
        );
    }*/

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
        message:{
            color:messageColor
        }
    })

    const handleLogin = () => {
        if(username === 'username' && password === 'password'){
            navigation.navigate('Section')
            setMessage('Login Successful')
            setBorderColor('green')
            setMessageColor('green')
        }else if(username.trim() === "" || password === ""){
            setMessage('Missing input fields')
            setBorderColor('red')
            setMessageColor('red')
        }else{
            setMessage('Invalid Credentials')
            setBorderColor('red')
            setMessageColor('red')
        }
    }

    return (
        <View style={styles.container}>

            {message === "" ? <Text style={styles.text}>Hello from Login Page</Text> : <Text style={styles.message}>{message}</Text>}

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

        </View>
    )
}

export default LoginPage;