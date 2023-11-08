import React from 'react';
import { View, Text, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const data = [
  { image: require('../images/dog.jpg') },
  { image: require('../images/dog.jpg') },
  { image: require('../images/dog.jpg') },

  // Add more image objects here
];

const MyCarousel = () => {
  return (
    <Carousel
      data={data}
      renderItem={({ item }) => (
        <View>
          <Image source={item.image} style={{ width: 200, height: 200, borderRadius: 10 }} />
        </View>
      )}
      sliderWidth={300}
      itemWidth={200}
      layout={'default'}
      inactiveSlideOpacity={0.5} // This controls the fading effect
    />
  );
};

export default MyCarousel;
