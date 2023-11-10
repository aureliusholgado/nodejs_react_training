import React, {useState, useEffect} from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = ({navigation, route}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [borderColor, setBorderColor] = useState("gray")
    const [messageColor, setMessageColor] = useState("black")

    useEffect(() => {
        // Check for route parameters
        if (route.params) {
            setUsername(route.params.newUserName);
            setPassword(route.params.newPassword);
            setBorderColor(route.params.newBorderColor);
            setMessage(route.params.newErrorMessage);
        }

        // Check for user authentication
        const checkUserAuthentication = async () => {
        try {
            const userToken = await AsyncStorage.getItem('TOKEN');
            // Check if the user is already authenticated
            if (userToken) {
                navigation.navigate('Section');
            }
        } catch (error) {
            console.error('Error checking user authentication:', error);
        }
    };

  checkUserAuthentication();
}, [route]); // Include route as a dependency


    const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        text:{
            color:'black',
            fontSize:20,
            marginBottom:20
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

    const handleLogin = async () => {
        if (username && password) {
            if(username === 'username' && password === 'password'){
                try {
                    await AsyncStorage.setItem('TOKEN', 'TOKEN');
                } catch (error) {
                    console.error('Error saving user token:', error);
                }

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

            {message && <Text style={styles.message}>{message}</Text>}

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