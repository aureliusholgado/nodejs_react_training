import React, { useState, useEffect } from 'react';
import { Appearance, Button, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './Pages/HomePage.js';
import FeedMePage from './Pages/FeedMePage.js';
import DogTranslatorPage from './Pages/DogTranslatorPage.js';
import PracticePage from './Pages/PracticePage.js';
import CreatePostPage from './Pages/CreatePostPage.js'
import LogoTitle from './Pages/LogoTitle.js'
import Count from './Pages/Count.js'
import SectionListBasics from './components/SectionListFile.js'
import MyCarousel from './components/Carousel.js'

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
                    options={{
                        headerTitle: (props) => <LogoTitle {...props} />,
                        headerRight: () => (
                            <Button
                              onPress={() => alert('This is a button!')}
                              title="Info"
                              color="black"
                            />
                        ),
                    }}
                />

                <Stack.Screen
                    name = 'Count'
                    component = {Count}
                    options = { ({navigation, route}) => ({
                        headerTitle: (props) => <Text style={{color:'white', fontWeight:'bold', fontSize:20}}>Counter</Text>,
                        /*headerRight: () => (
                            <Button
                                title="Update Count"
                                color="gray"
                            />
                        ),*/
                    })}
                />

                <Stack.Screen name="Section Page" component={SectionListBasics} />
                <Stack.Screen name="Carousel Page" component={MyCarousel} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;