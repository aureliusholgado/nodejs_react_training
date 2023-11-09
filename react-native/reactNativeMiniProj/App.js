import React from 'react';
import { StyleSheet, Text, ScrollView, View, Appearance } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './Pages/LoginPage.js'
import SectionPage from './Pages/SectionPage.js'
import CarouselPage from './Pages/CarouselPage.js'

const Stack = createNativeStackNavigator();

/*<View>
    <Text>Hello From App</Text>
</View>*/

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen name = "Login" component={LoginPage} />
            <Stack.Screen name = "Section" component={SectionPage} />
            <Stack.Screen name = "Carousel" component={CarouselPage} />

        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
