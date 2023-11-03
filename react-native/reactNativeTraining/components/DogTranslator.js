import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

const DogTranslator = () => {
    const [text, setText] = useState("")
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
                    .map(word => word && 'Ow!')
                    .join(' ')
                }
            </Text>
        </View>
    )
}

export default DogTranslator;