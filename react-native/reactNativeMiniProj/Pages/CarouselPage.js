import React, { useState, useEffect } from 'react';
import { Alert, Appearance, ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyCarousel = ({navigation, route}) => {

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
            borderRadius: 50
        },
        addImage:{
            padding: 10,
            margin: 5,
            width: 200,
            borderRadius: 10,
            color: 'black',
            backgroundColor:'rgb(173, 179, 177)',
        },
        addImageText:{
            fontSize:15,
            textAlign:'center',
        }
    });
    const pic1 = require('../images/pic1.jpg')
    const data = [
        {image: require('../images/pic1.jpg')},
        {image: require('../images/pic2.jpg')},
        {image: require('../images/pic3.jpg')},
        {image: require('../images/pic4.jpg')}
    ];
    const [carouselData, setCarouselData] = useState(data);
    const [loremIpsum, setLoremIpsum] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)

    useEffect(()=>{
        fetchLoremIpsum();
    }, []);

    const fetchLoremIpsum = async () => {
        setIsLoading(true)
        try{

            const response = await fetch('https://loripsum.net/api')
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.text();
            const regex = /<p>|<\/p>/g;
            setLoremIpsum(data.replace(regex, ""));
        } catch(error) {
            console.error('Error fetching Lorem Ipsum:', error);
        } finally {
            setIsLoading(false)
        }
    };

    const renderHtmlContent = () => {
        return { __html: loremIpsum };
    };

    // Select from Camera
    const selectImageFromCamera = () => {
        if(carouselData.length < 8){
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
        }else{
            Alert.alert("Maximum Limit Reached", "You can no longer add pictures.", [
                {
                    text: "OK",
                    onPress: () => setIsButtonDisabled(true)
                }
            ]);
        }
    }

    // Select from Gallery
    const selectImageFromGallery = () => {
        if(carouselData.length < 8){
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
        }else{
            Alert.alert("Maximum Limit Reached", "You can no longer add pictures.", [
                {
                    text: "OK",
                    onPress: () => setIsButtonDisabled(true)
                }
            ]);
        }
    }

    // Add Image to Carousel
    const addImageToCarousel = (newImage) => {
        const updatedCarousel = [{image: newImage}, ...carouselData]
        setCarouselData(updatedCarousel)
    }

    return (
    <ScrollView contentContainerStyle={styles.carouselContainer}>
        <Text style={styles.carousel}> {route.params.item} </Text>

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

        {isLoading ? <ActivityIndicator size="large" color="black" style={{ margin: 20 }} /> : <Text>{loremIpsum}</Text>}

        <TouchableOpacity style={styles.addImage} onPress={selectImageFromCamera} disabled={isButtonDisabled}>
            <Text style={[styles.addImageText, isButtonDisabled ? { color: 'white' } : { color: 'black' }]}>Take Picture</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addImage} onPress={selectImageFromGallery} disabled={isButtonDisabled}>
            <Text style={[styles.addImageText, isButtonDisabled ? { color: 'white' } : { color: 'black' }]}>Add Image</Text>
        </TouchableOpacity>

    </ScrollView>
    );
};

export default MyCarousel;
