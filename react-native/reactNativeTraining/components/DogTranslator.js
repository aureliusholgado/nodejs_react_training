import React, {useState} from 'react';
import {View, Text, TextInput, Appearance} from 'react-native';

const DogTranslator = props => {
    const [text, setText] = useState("")
    const variations = ['Ow!', 'Arf!', 'Woof!', 'Bark!', 'Yip!'];
    const theme = Appearance.getColorScheme();
    return(
        <View>
            <Text
                style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    margin: 10,
                    textAlign: 'center'
                }}>
                Dog Translator
            </Text>

            <TextInput
                style={{
                    height: 40,
                    borderColor: theme === 'light' ? 'black' : 'white',
                    borderWidth: 1,
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
        </View>
    )
}

export default DogTranslator;