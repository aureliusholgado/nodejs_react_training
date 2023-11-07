import React, { useState, useEffect } from 'react';
import { Appearance, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Count = ({ navigation }) => {
    const theme = Appearance.getColorScheme();
    const [count, setCount] = useState(0)

    useEffect(()=>{
        navigation.setOptions({
            headerRight: () => (
                <View style={{ flexDirection: 'row' }} >
                    <View style={{ margin:10 }} >
                        <TouchableOpacity
                            onPress={ ()=> setCount((c) => c - 1) }
                            style={styles.counterButton}
                        >
                            <Text style={styles.counterButtonText}>-1</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ margin:10 }} >
                        <TouchableOpacity
                            onPress={ ()=> setCount((c) => c + 1) }
                            style={styles.counterButton}
                        >
                            <Text style={styles.counterButtonText}>+1</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ),
        })
    }, [navigation])

    const styles = StyleSheet.create({
        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        text:{
            color:'black',
            justifyContent:'center',
            textAlign:'center',
            fontSize:70
        },
        counterButton:{
            backgroundColor: 'gray',
            borderRadius: 10,
            borderWidth:3,
            borderColor: 'white',
            padding: 10,
            paddingLeft:20,
            paddingRight:20,
        },
        counterButtonText:{
            textAlign: 'center',
            color: 'white'
        }
    })

    return(
        <View style={styles.container}>
            <Text style={styles.text}>{count}</Text>
        </View>
    )
}

export default Count;