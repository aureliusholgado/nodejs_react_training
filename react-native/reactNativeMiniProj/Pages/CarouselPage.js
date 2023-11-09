import React, { useState, useEffect } from 'react';
import { Appearance, ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ImagePicker from 'react-native-image-crop-picker';

const MyCarousel = ({navigation, route}) => {
    const data = [];
    const [carouselData, setCarouselData] = useState(data);
    const [loremIpsum, setLoremIpsum] = useState("");

    useEffect(()=>{
        fetchLoremIpsum();
    }, []);

    const fetchLoremIpsum = () => {
        fetch('https://loripsum.net/api')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then((data) => {
            const regex = /<p>|<\/p>/g;
            setLoremIpsum(data.replace(regex, ""));
        })
        .catch((error) => {
            console.error('Error fetching Lorem Ipsum:', error);
        });
    };

    const renderHtmlContent = () => {
        return { __html: loremIpsum };
    };

    const styles = StyleSheet.create({
        text: {
            color:'black',
            fontSize:20,
            margin:10
        },
        carousel: {
            color: 'black',
            fontSize:25,
            margin: 20
        },
        noImages: {
            color: 'black',
            marginBottom: 20,
            fontSize: 15
        },
        carouselContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20
        },
        carouselImage: {
            width: 200,
            height: 200,
            marginBottom: 20,
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 5,
            borderRadius: 50
        },
        addImage:{
            padding: 10,
            margin: 5,
            width: 200,
            borderWidth: 3,
            borderRadius: 10,
            borderColor: 'black',
            color: 'black',
            backgroundColor:'rgb(173, 179, 177)',
        },
        addImageText:{
            color:'black',
            fontSize:15,
            textAlign:'center',
        }
    });

    // Select from Camera
    const selectImageFromCamera = () => {
        ImagePicker.openCamera({
            width:300,
            height:400,
            cropping: true
        })
        .then(image => {
            console.log(image)
            addImageToCarousel({uri: image.path})
        })
        .catch((error) => {
            console.log('ImagePicker error:', error);
        })
    }

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
    <ScrollView contentContainerStyle={styles.carouselContainer}>
        <Text style={styles.carousel}> {route.params.item}'s Dogs </Text>

        {carouselData.length === 0 ? (
            <Text style={styles.noImages}>No Images</Text>
        ) : (
            <Carousel
                data={carouselData}
                renderItem={({ item }) => (
                    <Image source={item.image} style={styles.carouselImage} />
                )}
                sliderWidth={450}
                itemWidth={200}
                layout={'default'}
                inactiveSlideOpacity={0.5} // This controls the fading effect
                loop={true} // Enable infinite looping
                loopClonesPerSide={carouselData.length} // Set the number of clones per side to match the number of items
            />
        )}

        <Text>{loremIpsum}</Text>

        <TouchableOpacity style={styles.addImage} onPress={selectImageFromCamera}>
            <Text style={styles.addImageText}>Take Picture</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addImage} onPress={selectImageFromGallery} >
            <Text style={styles.addImageText}>Add Image</Text>
        </TouchableOpacity>

    </ScrollView>
    );
};

export default MyCarousel;
