import React, { useState, useEffect } from 'react';
import { Appearance } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './Pages/HomePage.js';
import FeedMePage from './Pages/FeedMePage.js';
import DogTranslatorPage from './Pages/DogTranslatorPage.js';
import PracticePage from './Pages/PracticePage.js';
import CreatePostPage from './Pages/CreatePostPage.js'
import LogoTitle from './Pages/LogoTitle.js'

const Stack = createNativeStackNavigator();

const App = () => {
    const [theme, setTheme] = useState(Appearance.getColorScheme());
    useEffect(()=>{
        const subscription = Appearance.addChangeListener( ({colorScheme}) => {
            setTheme(colorScheme)
        })
        return() => {
            subscription.remove()
        };
    }, [])

    const headerBackgroundColor = theme ==='light'? '#f29216':'purple'

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: headerBackgroundColor
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }
                }}
            >

                <Stack.Screen
                    name = "Home"
                    component={HomePage}
                    initialParams={{ name: "My Home" }}
                    options={ ({route}) => ({title:route.params.name}) }
                />

                <Stack.Screen
                    name = "Feed Me"
                    component={FeedMePage}
                    options={{title: "Feed Coco"}}
                />

                <Stack.Screen name = "Dog Translator" component={DogTranslatorPage} />
                <Stack.Screen name = "Practice Page" component={PracticePage} />
                <Stack.Screen name = "Create Post" component={CreatePostPage} />
                <Stack.Screen
                    name = "Logo Title"
                    component={LogoTitle}
                    options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;