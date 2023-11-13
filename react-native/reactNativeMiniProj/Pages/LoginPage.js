import React, {useState, useEffect} from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = ({navigation, route}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [borderColor, setBorderColor] = useState("gray")
    const [messageColor, setMessageColor] = useState("black")
    const [isLoading, setIsLoading] = useState(true)

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
                    navigation.replace('Section');
                }
            } catch (error) {
                console.error('Error checking user authentication:', error);
            } finally {
                setIsLoading(false);
            }
        };

        checkUserAuthentication();
    }, [route]);


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
            borderWidth: message === "" ? null : 3,
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
            borderRadius: 10,
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
                    await AsyncStorage.setItem('TOKEN', 'myToken');
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

    if (isLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="black" />
            </View>
        )
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