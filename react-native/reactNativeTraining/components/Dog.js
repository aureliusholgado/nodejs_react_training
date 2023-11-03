import React, {useState} from 'react';
import {Button, View, Text, Image, ScrollView, TextInput} from 'react-native';

const Dog = props => {
    const [isHungry, setIsHungry] = useState(true)
    return(
        <View>

            <Text>
                {isHungry ? `My name is ${props.name}, and I am hungry` : `${props.name} is full!`}
            </Text>

            <Button
                onPress={()=>{
                    setIsHungry(false)
                }}
                disabled={!isHungry}
                title={isHungry ? 'Feed Me' : 'Thank you!'}
            />

        </View>
    )
}
 export default Dog;