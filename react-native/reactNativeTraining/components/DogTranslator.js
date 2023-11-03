import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

const DogTranslator = props => {
    const [text, setText] = useState("")
    const variations = ['Ow!', 'Arf!', 'Woof!', 'Bark!', 'Yip!'];
    return(
        <View>
            <TextInput
                style={{height: 40}}
                placeholder="Type here to translate!"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />

            <Text style={{padding: 10, fontSize: 42}}>
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