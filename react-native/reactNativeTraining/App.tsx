import React, {useState} from 'react';
import {Button, View, Text, Image, ScrollView, TextInput} from 'react-native';

const logoImg = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

const Logo = () => {
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

const App = () => {
    const name = 'Aurelius'
    const introduce = (firstName, middleInitial, lastName) => {
        return `Hello, my last name is ${lastName}, and my middle initial is ${middleInitial}. You can call me ${firstName}.`
    }
    return(
        <ScrollView>
            <Text>{introduce(name, "Castillo", "Holgado")}</Text>
        </ScrollView>
    )
}


const Nickname = props => {
    return(
        <View>
            <Text>Hello, my name is {props.name}</Text>
        </View>
    )
}

const Picture = () => {
    return(
        <Image
            source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={{
                width: 200,
                height: 200
            }}
        />
    )
}

const DogTranslator = () => {
    const [text, setText] = useState("")
    return(
        <View>
            <TextInput
                style={{height: 40}}
                placeholder="Type here to translate!"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />

            <Text style={{padding: 10, fontSize: 42}}>
                {
                    text
                    .split(' ')
                    .map(word => word && 'Ow!')
                    .join(' ')
                }
            </Text>
        </View>
    )
}

const Dog = props => {
    const [isHungry, setIsHungry] = useState(true)
    return(
        <View>

            <Text>
                {isHungry ? `My name is ${props.name}, and I am hungry` : `${props.name} is full!`}
            </Text>

            <Button
                onPress={()=>{
                    setIsHungry(false)
                }}
                disabled={!isHungry}
                title={isHungry ? 'Feed Me' : 'Thank you!'}
            />

        </View>
    )
}

const Display = () => {
    return(
        <View>
            <App />
            <Picture />
            <Nickname name="Eliot"/>
            <Nickname name="Ely"/>
            <Nickname name="El"/>
            <Dog name="Coco"/>
            <Dog name="Crunch"/>
            <DogTranslator />
            <Logo/>
        </View>
    )
}

export default Display;
