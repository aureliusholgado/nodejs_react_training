import React, {useState, useEffect} from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'

const LoginPage = ({navigation, route}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [borderColor, setBorderColor] = useState("gray")
    const [messageColor, setMessageColor] = useState("black")

    useEffect(()=>{
        if(route.params){
            setUsername(route.params.newUserName)
            setPassword(route.params.newPassword)
            setBorderColor(route.params.newBorderColor),
            setMessage(route.params.newErrorMessage)
        }
    }, [route])

    const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        text:{
            color:'black',
            fontSize:20,
            margin:20
        },
        textInput: {
            fontSize: 15,
            height: 50,
            width: 300,
            padding: 10,
            backgroundColor: 'white',
            color:'black',
            borderRadius: 10,
            borderWidth: 3,
            borderColor:borderColor,
            margin:10
        },
        message:{
            color:messageColor
        },
        customButton:{
            backgroundColor:'rgb(173, 179, 177)',
            padding: 10,
            width: 200,
            borderWidth: 3,
            borderRadius: 10,
            borderColor: 'black',
            margin: 20
        },
        customButtonText:{
            textAlign:'center',
            color:'black',
            fontSize: 15,
            fontWeight:'bold'
        }
    })

    const handleLogin = () => {
        if (username && password) {
            if(username === 'username' && password === 'password'){
                navigation.navigate('Section')
                setMessage('Login Successful')
                setBorderColor('green')
                setMessageColor('green')
            }else{
                setMessage('Invalid username or password')
                setBorderColor('red')
                setMessageColor('red')
            }
        }else{
            setMessage('Missing input fields')
            setBorderColor('red')
            setMessageColor('red')
        }
    }

    return (
        <View style={styles.container}>

            {message === "" ? <Text style={styles.text}>Login Page</Text> : <Text style={styles.message}>{message}</Text>}

            <TextInput
                placeholder="Username"
                style={styles.textInput}
                value={username}
                onChangeText={setUsername}
            />

            <TextInput
                placeholder="Password"
                style={styles.textInput}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TouchableOpacity style={styles.customButton} onPress={handleLogin} >
                <Text style={styles.customButtonText}>Login</Text>
            </TouchableOpacity>

        </View>
    )
}

export default LoginPage;