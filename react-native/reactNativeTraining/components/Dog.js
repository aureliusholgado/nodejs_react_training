import React, {useState} from 'react';
import {Button, View, Text, Image, ScrollView, TextInput, Appearance, TouchableOpacity, StyleSheet } from 'react-native';
import Picture from './Picture';

const Dog = props => {
    const [isHungry, setIsHungry] = useState(true);
    const theme = Appearance.getColorScheme();
    const hungryDog = require('../images/hungryDog.jpg')
    const happyDog = require('../images/happyDog.jpg')

    const styles = StyleSheet.create({
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
            textAlign:'center',
            fontSize: 20,
        }
    });

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

                <TouchableOpacity
                    onPress={()=>{
                        setIsHungry(false)
                    }}
                    disabled={!isHungry}
                    style={styles.customButton}
                >
                    <Text style={styles.customButtonText}>{isHungry ? 'Feed Me' : 'Thank you!'}</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}
 export default Dog;