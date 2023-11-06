import React, { useState, useEffect } from 'react';
import { Appearance, ScrollView, View, Text, StyleSheet } from 'react-native';
import Dog from './components/Dog.js';
import DogTranslator from './components/DogTranslator.js';
import Logo from './components/Logo.js';
import Picture from './components/Picture.js';
import FullName from './components/FullName.js';
import Nickname from './components/Nickname.js';
import FlatListBasics from './components/FlatListFile.js' 
import SectionListBasics from './components/SectionListFile.js';

const App = () => {

    const [theme, setTheme] = useState(Appearance.getColorScheme());
    useEffect(() => {
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
          setTheme(colorScheme);
        });
    
        return () => {
          subscription.remove();
        };
      }, []);

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: theme === 'light' ? 'white' : 'black',
        },
        text: {
            color: theme === 'light' ? 'black' : 'white',
        }
    });
    
    return(
        <ScrollView style={styles.container} contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
            <Dog name="Coco" style={styles.text} />
            <DogTranslator style={styles.text} />
        </ScrollView>
    )
}

export default App;

// To see FlatList or SectionList, comment out everything else but either of these:
    // export default FlatListBasics;
    // export default SectionListBasics;

// Commented components
    /*
        <FullName style={styles.text} />
        <Nickname name="Eliot" style={styles.text} />
        <Nickname name="Ely" style={styles.text} />
        <Nickname name="El" style={styles.text} />
    */