import React, { useState, useEffect } from 'react';
import { Appearance, View, Text, Image, StyleSheet, Button } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ImagePicker from 'react-native-image-crop-picker';

const MyCarousel = () => {
    const data = [];

    const [theme, setTheme] = useState(Appearance.getColorScheme());
    useEffect(() => {
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
          setTheme(colorScheme);
        });
        return () => {
          subscription.remove();
        };
    }, []);
    const [carouselData, setCarouselData] = useState(data);

    const styles = StyleSheet.create({
        text: {
            color:'black',
            fontSize:20,
            margin:10
        },
        noImages: {
            color: theme === 'light' ? 'orange' : 'purple',
            margin:20,
            fontSize: 15
        },
        carouselContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            margin:50,
        },
        carouselImage: {
            width: 200,
            height: 200,
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 10
        },
    });

    // Select from Gallery
    const selectImageFromGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        })
        .then((image) => {
            addImageToCarousel({ uri: image.path }); // Use 'path' to access the selected image path
        })
        .catch((error) => {
            console.log('ImagePicker error:', error);
        });
    }

    // Add Image to Carousel
    const addImageToCarousel = (newImage) => {
        const updatedCarousel = [...carouselData, {image: newImage}]
        setCarouselData(updatedCarousel)
    }

    return (
    <View style={styles.carouselContainer}>
        <Text style={styles.text}>Carousel</Text>

        {carouselData.length === 0 ? (
            <Text style={styles.noImages}>No Images</Text>
        ) : (
            <Carousel
                data={carouselData}
                renderItem={({ item }) => (
                    <Image source={item.image} style={styles.carouselImage} />
                )}
                sliderWidth={300}
                itemWidth={200}
                layout={'default'}
                inactiveSlideOpacity={0.5} // This controls the fading effect
                loop={true} // Enable infinite looping
                loopClonesPerSide={carouselData.length} // Set the number of clones per side to match the number of items
            />
        )}

        <Button title="Add Image" onPress={selectImageFromGallery} />
    </View>
    );
};

export default MyCarousel;
