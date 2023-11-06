import React, {useState} from 'react';
import {Button, View, Text, Image, ScrollView, TextInput, Appearance} from 'react-native';
import Picture from './Picture';

const Dog = props => {
    const [isHungry, setIsHungry] = useState(true);
    const theme = Appearance.getColorScheme();
    const hungryDog = require('../images/hungryDog.jpg')
    const happyDog = require('../images/happyDog.jpg')
    return(
        <View
            style={{
                alignItems: 'center',
                margin: 50
            }}
        >

            <Text style={[props.style]}>
                {isHungry ? `My name is ${props.name}, and I am hungry` : `${props.name} is full!`}
            </Text>

            <Image
                source={isHungry ? hungryDog : happyDog}
                style={{
                    height:350,
                    width: 350,
                    borderRadius:30,
                    borderColor:'black',
                    borderWidth:5,
                    margin: 10
                }}
            />



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
                    style={{
                        fontSize:100,
                        backgroundColor: 'green'
                    }}
                />

            </View>

        </View>
    )
}
 export default Dog;