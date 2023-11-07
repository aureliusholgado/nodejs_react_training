import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedMePage from './Pages/FeedMePage.js';
import DogTranslatorPage from './Pages/DogTranslatorPage.js';
import PracticePage from './Pages/PracticePage.js';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "Home" component={FeedMePage} />
                <Stack.Screen name= "Dog Translator" component={DogTranslatorPage} />
                <Stack.Screen name= "Practice Page" component={PracticePage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;