import React from 'react';
import { Appearance, ScrollView, Text, StyleSheet } from 'react-native';

const PracticePage = ({navigation}) => {
    const styles = StyleSheet.create({
        text:{
            color:'black',
            fontSize: 20
        }
    })

    return(
        <ScrollView contentContainerStyle={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.text} > Practice Page </Text>
        </ScrollView>
    )
}

export default PracticePage;