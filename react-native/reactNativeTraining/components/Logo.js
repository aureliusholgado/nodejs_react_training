import {Button, View, Text, Image, ScrollView, TextInput} from 'react-native';

const logoImg = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64,
  };
  
  const Logo = props => {
      return(
          <ScrollView direction>
              <Text style={{fontSize: 96}}>Scroll me pls</Text>
              <Image source={logoImg}/>
              <Image source={logoImg}/>
              <Image source={logoImg}/>
              <Image source={logoImg}/>
              <Image source={logoImg}/>
              <Text style={{fontSize: 96}}>If you like</Text>
              <Image source={logoImg}/>
              <Image source={logoImg}/>
              <Image source={logoImg}/>
              <Image source={logoImg}/>
              <Image source={logoImg}/>
              <Text style={{fontSize: 96}}>Scrolling down</Text>
              <Image source={logoImg}/>
              <Image source={logoImg}/>
              <Image source={logoImg}/>
              <Image source={logoImg}/>
              <Image source={logoImg}/>
              <Text style={{fontSize: 96}}>What's the best</Text>
              <Image source={logoImg}/>
              <Image source={logoImg}/>
              <Image source={logoImg}/>
              <Image source={logoImg}/>
              <Image source={logoImg}/>
              <Text style={{fontSize: 96}}>Framework around?</Text>
              <Image source={logoImg}/>
              <Image source={logoImg}/>
              <Image source={logoImg}/>
              <Image source={logoImg}/>
              <Image source={logoImg}/>
              <Text style={{fontSize: 80}}>React Native</Text>
          </ScrollView>
      )
  }

  export default Logo;