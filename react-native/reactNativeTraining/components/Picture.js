import {View, Image} from 'react-native';

const Picture = () => {
    return(
        <View style = {{
            alignItems: 'center'
        }}>
            <Image
                source={{
                    uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                }}
                style={{
                    width: 200,
                    height: 200,
                }}
            />
        </View>
    )
}

export default Picture;