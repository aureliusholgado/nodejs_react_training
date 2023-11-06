import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Appearance, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';

const DogTranslator = props => {

    const theme = Appearance.getColorScheme()
    const [text, setText] = useState("")
    const isTyping = text !== '';
    const variations = ['Ow!', 'Arf!', 'Woof!', 'Bark!', 'Yip!'];

    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <Text
                style={[props.style]}>
                Dog Translator
            </Text>

            {isTyping && (
                <Animatable.View style={{ alignItems: 'center' }}>
                    <Animatable.Image
                        source={require('../images/dog1.png')}
                        style={{ width: 300, height: 435 }}
                        animation="swing"
                        duration={1000}
                        iterationCount="infinite"
                    />
                </Animatable.View>
            )}

            <Text
                style={{
                    padding: 10,
                    fontSize: 24,
                    textAlign: 'center',
                    color: theme==='light'?'black':'white',
                    backgroundColor: theme==='light'?'white':'black', // Background color,
                    borderRadius: 10,
                    display: isTyping ? 'flex' : 'none'
                }}>

                {
                    text
                    .split(' ')
                    .map(word =>
                        word ? variations[Math.floor(Math.random() * variations.length)] : ''
                    )
                    .join(' ')
                }
            </Text>

            <TextInput
                style={{
                    height: 40,
                    width:200,
                    borderColor: theme === 'light' ? 'black' : 'white',
                    borderWidth: 1,
                    margin: 15,
                    textAlign: 'center',
                    color: theme==='light'?'black':'white',
                    backgroundColor: theme==='light'?'white':'black', // Background color
                }}
                placeholder="Type here to translate!"
                placeholderTextColor={theme === 'light' ? 'black' : 'white'}
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />



        </View>
    )
}

export default DogTranslator;