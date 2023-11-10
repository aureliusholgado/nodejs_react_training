import React, {useState, useEffect} from 'react'
import { Appearance, SectionList, StyleSheet, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import {SectionListData} from '../Components/SectionListData.js'
import AsyncStorage from '@react-native-async-storage/async-storage';

const SectionPage = ({navigation, route}) => {

    const styles = StyleSheet.create({
        container:{
            flex:1,
            alignItems: isLoading ? 'center' : null,
            justifyContent:'center',
        },
        sectionHeader: {
            paddingVertical: 5,
            paddingLeft: 10,
            paddingRight: 10,
            fontSize: 14,
            fontWeight: 'bold',
            backgroundColor: 'rgb(173, 179, 177)'
        },
        item: {
            padding: 10,
            fontSize: 15,
            height: 44,
            color: 'black'
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

    const [sectionData, setSectionData] = useState(SectionListData)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View>
                    <TouchableOpacity style={styles.logout} onPress={handleLogout} >
                        <Text style={styles.logoutText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            )
        })
    }, [])

    setTimeout(() => {
        setIsLoading(false);
    }, 2000);

    const toggleSection = (sectionIndex) => {
        const updatedSectionData = [...sectionData];
        updatedSectionData[sectionIndex].collapsed = !updatedSectionData[sectionIndex].collapsed;
        setSectionData(updatedSectionData);
    }

    const resetState = () => {
        navigation.navigate('Login', {
            resetState: true,
            newUsername: '',
            newPassword: '',
            newBorderColor: 'black',
            newErrorMessage: '',
        });
    };

    const handleLogout = async () => {
        try {
            // Clear the user token from AsyncStorage
            await AsyncStorage.removeItem('TOKEN');
        } catch (error) {
            console.error('Error clearing user token:', error);
        }

        // Navigate to the login page and reset the state
        resetState();
    };

    const renderSectionHeader = ({ section, section: { title } }) => (
        <TouchableOpacity onPress={() => toggleSection(sectionData.indexOf(section))}>
            <Text style={styles.sectionHeader}>{title}</Text>
        </TouchableOpacity>
    );

    const renderItem = ({ item, section }) => {
        if (section.collapsed) {
            return null;
        } else {
            return (
                <TouchableOpacity onPress={() => navigation.navigate('Carousel', { title: item, item: item })}>
                    <Text style={styles.item}>{item}</Text>
                </TouchableOpacity>
            );
        }
    };

    return (

        <View style={styles.container}>

            {isLoading ?
                (
                    <View>
                        <ActivityIndicator size="large" color="black" />
                    </View>
                ) :
                <SectionList
                    sections={isLoading ? []: sectionData}

                    // Render the Section Header
                    renderSectionHeader={renderSectionHeader}

                    // Render the Items
                    renderItem={renderItem}

                    // Key Extractor
                    keyExtractor={(item, index) => `basicListEntry-${item}-${index}`}

                    // Extra Data
                    extraData = {sectionData}
                />
            }

        </View>
    )
}

export default SectionPage;