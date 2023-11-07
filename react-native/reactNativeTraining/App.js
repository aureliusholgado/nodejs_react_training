import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './Pages/HomePage.js';
import FeedMePage from './Pages/FeedMePage.js';
import DogTranslatorPage from './Pages/DogTranslatorPage.js';
import PracticePage from './Pages/PracticePage.js';
import CreatePostPage from './Pages/CreatePostPage.js'

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "Home" component={HomePage} />
                <Stack.Screen name = "Feed Me" component={FeedMePage} />
                <Stack.Screen name = "Dog Translator" component={DogTranslatorPage} />
                <Stack.Screen name = "Practice Page" component={PracticePage} />
                <Stack.Screen name = "Create Post" component={CreatePostPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;