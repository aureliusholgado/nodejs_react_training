import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DogScreen from './DogScreen.js';
import DogTranslatorPage from './DogTranslatorPage.js';

const AppNavigator = createStackNavigator(
  {
    Dog: DogScreen,
    DogTranslator: DogTranslatorScreen,
  },
  {
    initialRouteName: 'Dog', // Set the initial screen
  }
);

export default createAppContainer(AppNavigator);
