import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const CarouselPage = ({navigation}) => {

    const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        text:{
            color:'black'
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.text} >Hello from CarouselPage</Text>
        </View>
    )
}

export default CarouselPage;