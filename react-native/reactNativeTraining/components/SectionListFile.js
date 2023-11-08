import React, {useState, useEffect} from 'react'
import { Appearance, SectionList, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import {SectionListData} from './SectionListData.js'

const theme = Appearance.getColorScheme();

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

const SectionListBasics = () => {

    const [sectionData, setSectionData] = useState(SectionListData)

    const toggleSection = (sectionIndex) => {
        const updatedSectionData = [...sectionData];
        updatedSectionData[sectionIndex].collapsed = !updatedSectionData[sectionIndex].collapsed;
        setSectionData(updatedSectionData);
    }

    return(
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
                   return <Text style={styles.item}>{item}</Text>
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

export default SectionListBasics;