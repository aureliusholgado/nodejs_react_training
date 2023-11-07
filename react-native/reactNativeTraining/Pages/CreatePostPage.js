import React, {useState, useEffect} from 'react';
import { Appearance, ScrollView, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput } from 'react-native';

const CreatePostPage = ({navigation, route}) => {
    theme = Appearance.getColorScheme();

    // NOTE!! You may use useEffect() to determine what happens with the post (e.g. db registration or whatsoever)

    const [postText, setPostText] = useState('');

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
        textInput: {
            height: 100,
            width: 300,
            padding: 10,
            backgroundColor: 'white',
            color:'black',
            borderRadius: 10,
            borderWidth: 5,
            borderColor:'gray',
            textAlign:'center'
        }
    })
    return(
        <ImageBackground
            source={theme==='light' ? lightBG : darkBG}
            style={{flex:1}}
        >

            <ScrollView contentContainerStyle={styles.container}>

                <Text style={styles.text}>Create Post Page</Text>
                <TextInput
                    multiline
                    placeholder="What's on your mind?"
                    placeholderTextColor='black'
                    style={styles.textInput}
                    value={postText}
                    onChangeText={setPostText}
                />

                <TouchableOpacity
                    style={styles.customButton}
                    onPress={() => {
                        navigation.navigate('Home', {post: postText})
                    }}
                >
                    <Text style={styles.customButtonText}>Done</Text>
                </TouchableOpacity>

            </ScrollView>

        </ImageBackground>
    )
}
export default CreatePostPage;