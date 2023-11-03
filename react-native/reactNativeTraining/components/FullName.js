import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';

const FullName = props => {
    const name = 'Aurelius'
    const introduce = (firstName, middleInitial, lastName) => {
        return `Hello, my last name is ${lastName}, and my middle initial is ${middleInitial}. You can call me ${firstName}.`
    }

    const styles = StyleSheet.create({
        text: {
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            margin: 50
        },
    })
    return(
        // <ScrollView>
        <Text style={[styles.text, props.style]}>
            {introduce(name, "Castillo", "Holgado")}
        </Text>
        // </ScrollView>
    )
}

export default FullName;