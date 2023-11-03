import React from 'react';
import {View} from 'react-native';
import Dog from './components/Dog.js';
import DogTranslator from './components/DogTranslator.js';
import Logo from './components/Logo.js';
import Picture from './components/Picture.js';
import FullName from './components/FullName.js';
import Nickname from './components/Nickname.js';
import FlatListBasics from './components/FlatListFile.js' 
import SectionListBasics from './components/SectionListFile.js';

const App = () => {
    return(
        <View>
            <FullName />
            <Picture />
            <Nickname name="Eliot"/>
            <Nickname name="Ely"/>
            <Nickname name="El"/>
            <Dog name="Coco"/>
            <Dog name="Crunch"/>
            <DogTranslator />
            {/* <Logo /> */}
        </View>
    )
}

export default App;

// To see FlatList or SectionList, comment out everything else but either of these:
    // export default FlatListBasics;
    // export default SectionListBasics;