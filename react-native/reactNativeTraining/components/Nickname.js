import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Nickname = props => {
    const styles = StyleSheet.create({
        text: {
            fontSize: 20,
            fontWeight: 'bold',
        },
    })

    return(
        <View>
            <Text style={[styles.text, props.style]}>
                Hello, my name is {props.name}
            </Text>
        </View>
    )
}

export default Nickname;