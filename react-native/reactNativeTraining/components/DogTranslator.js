import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Appearance, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';

const DogTranslator = props => {

    const theme = Appearance.getColorScheme()
    const [text, setText] = useState("")
    const isTyping = text !== '';
    const variations = ['Ow!', 'Arf!', 'Woof!', 'Bark!', 'Yip!'];

    return(
        <View>
            <Text
                style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: theme==='light'?'black':'white'
                }}>
                Dog Translator
            </Text>

            <TextInput
                style={{
                    height: 40,
                    borderColor: theme === 'light' ? 'black' : 'white',
                    borderWidth: 1,
                    margin: 15,
                    textAlign: 'center'
                }}
                placeholder="Type here to translate!"
                placeholderTextColor={theme === 'light' ? 'black' : 'white'}
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />

            <Text
                style={{
                    padding: 10,
                    fontSize: 24,
                    textAlign: 'center'
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

            {isTyping && (
                <Animatable.View style={{ alignItems: 'center' }}>

                    <Animatable.Image
                        animation="swing"
                        duration={1000}
                        iterationCount="infinite"
                        source={require('../images/dog1.png')}
                        style={{ width: 100, height: 150 }}
                    />

                </Animatable.View>
            )}

        </View>
    )
}

export default DogTranslator;