import {Button, View, Text, Image, ScrollView, TextInput} from 'react-native';

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

export default Picture;