import React from 'react'
import {Image} from 'react-native'

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 35, height: 35 }}
      source={require('../images/reactNativeLogo.png')}
    />
  );
}

export default LogoTitle;