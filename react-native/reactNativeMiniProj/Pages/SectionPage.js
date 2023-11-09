import React, {useState, useEffect} from 'react'
import { Appearance, SectionList, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import SectionListBasics from '../Components/SectionListFile.js'

const SectionPage = ({navigation, route}) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View>
                    <TouchableOpacity style={styles.logout} onPress={resetState} >
                        <Text style={styles.logoutText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            ),
            headerRight: () => (
                <View>
                    <TouchableOpacity style={styles.logout} onPress={() => navigation.navigate('Carousel')} >
                        <Text style={styles.logoutText}>Carousel</Text>
                    </TouchableOpacity>
                </View>
            )
        })
    }, [])

    const resetState = () => {
        navigation.navigate('Login', {
            resetState: true,
            newUsername: '',
            newPassword: '',
            newBorderColor: 'black',
            newErrorMessage: '',
        });
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: 22,
        },
        logout:{
            margin: 10,
            backgroundColor:'rgb(173, 179, 177)',
            paddingVertical: 3,
            paddingHorizontal: 10,
            borderRadius:10
        },
        logoutText:{
            color:'black',
            fontSize: 12
        }
    });

    return (
        <View>
            <View>
                <SectionListBasics/>
            </View>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Carousel')}>
                    <Text>Go to Carousel</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SectionPage;