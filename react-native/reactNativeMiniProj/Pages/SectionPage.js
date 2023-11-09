import React, {useState, useEffect} from 'react'
import { Appearance, SectionList, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import SectionListBasics from '../Components/SectionListFile.js'

const SectionPage = ({navigation, route}) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={{ margin:10 }} >
                    <TouchableOpacity onPress={resetState} >
                        <Text>Logout</Text>
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
        sectionHeader: {
            paddingTop: 2,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 2,
            fontSize: 14,
            fontWeight: 'bold',
            backgroundColor: 'green',
        },
        item: {
            padding: 10,
            fontSize: 15,
            height: 44,
            color: 'black'
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