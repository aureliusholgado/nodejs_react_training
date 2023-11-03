import React, {useState} from 'react';
import {Button, View, Text, Image, ScrollView, TextInput} from 'react-native';
import Picture from './Picture';

const Dog = props => {
    const [isHungry, setIsHungry] = useState(true)
    return(
        <View
            style={{
                alignItems: 'center',
                margin: 50
            }}
        >
            <Picture/>
            <Text style={[props.style]}>
                {isHungry ? `My name is ${props.name}, and I am hungry` : `${props.name} is full!`}
            </Text>

            <View
                style={{
                    margin:20
                }}
            >
                <Button
                    onPress={()=>{
                        setIsHungry(false)
                    }}
                    disabled={!isHungry}
                    title={isHungry ? 'Feed Me' : 'Thank you!'}
                />
            </View>

        </View>
    )
}
 export default Dog;