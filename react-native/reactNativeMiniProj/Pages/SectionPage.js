import React, {useState, useEffect} from 'react'
import { Appearance, SectionList, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import {SectionListData} from '../Components/SectionListData.js'

const SectionPage = ({navigation, route}) => {
    const [sectionData, setSectionData] = useState(SectionListData)

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View>
                    <TouchableOpacity style={styles.logout} onPress={resetState} >
                        <Text style={styles.logoutText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            )
        })
    }, [])

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

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: 22,
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

    return (
        <SectionList
            sections={sectionData}

            // Render the Section Header
            renderSectionHeader={({section, section:{title}}) => (
                <TouchableOpacity onPress = {() => toggleSection(sectionData.indexOf(section))} >
                    <Text style={styles.sectionHeader}>{title}</Text>
                </TouchableOpacity>
            )}

            // Render the Items
            renderItem={({item, section}) => {
                if(section.collapsed){
                    return null
                }else{
                   return(
                        <TouchableOpacity onPress={()=>navigation.navigate('Carousel', {
                            title: item,
                            item: item
                        })}>
                            <Text style={styles.item}>{item}</Text>
                        </TouchableOpacity>
                   )
                }
            }}

            // Key Extractor
            keyExtractor={(item, index) => `basicListEntry-${item}-${index}`}

            // Extra Data
            extraData = {sectionData}

            // Section Footer
            renderSectionFooter={({ section }) => {
                if (section.collapsed) {
                    return null;
                } else {
                    return <View style={{ height: 5, backgroundColor: 'transparent' }} />;
                }
            }}
        />
    )
}

export default SectionPage;