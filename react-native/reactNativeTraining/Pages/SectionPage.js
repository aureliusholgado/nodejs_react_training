import React, { useState, useEffect } from 'react';
import { Appearance, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SectionListBasics from '../components/SectionListFile'

const SectionPage = ({navigation}) => {
    const theme = Appearance.getColorScheme()
    return(
        <ScrollView>
            <SectionListBasics/>
        </ScrollView>
    )
}

export default SectionPage;