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

            <Stack.Screen
                name = "Login"
                component={LoginPage}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name = "Section"
                component={SectionPage}
                options={{
                    title: 'My List',
                    headerTitleAlign: 'center', // Center the title
                    headerTitleStyle: {
                        fontWeight: 'bold', // You can adjust the style as needed
                    },
                }}
            />

            <Stack.Screen
                name = "Carousel"
                component={CarouselPage}
                options={({route})=>({
                    title: route.params.title,
                    headerTitleAlign: 'center', // Center the title
                    headerTitleStyle: {
                        fontWeight: 'bold', // You can adjust the style as needed
                    }
                })}
            />

        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
