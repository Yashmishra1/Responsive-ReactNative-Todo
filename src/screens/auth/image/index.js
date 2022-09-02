import {Text, View, Image, Pressable, alert, ImageBackground} from 'react-native';
import React, {Component, useState} from 'react';
import Images from '@themes/images';
import styles from './style';

const DisplayAnImages = () => {
  // const [imageError, setImageError] = useState(true);
  // const onImageNotFound = () => {
  //   setImageError(false);
  // };
  return (
    <View style={styles.container}>
   

      {/* <ImageBackground source={{ uri: "https://reactjs.org/logo-og.png" }} resizeMode="cover" style={styles.todologo}>
        <Text style={styles.text}>Hello Fam</Text>
      </ImageBackground> */}
      <ImageBackground source={{ uri: "https://reactjs.org/logo-og.png" }}  resizeMode="cover" style={styles.todologo}>
      <Text style={styles.text}>hello good </Text>
      </ImageBackground>
 
      </View>
  );
};
export default DisplayAnImages;
   {/* <Text style={styles.text}>
        Show Error Image When Main Image Not Found
      </Text> */}
      {/* <Image
      onLoad={event => { console.log(event.nativeEvent.source); }}
        source={

          imageError
            ? {
                uri: 'https://reactnative-examples.com/wp-content/uploads/2022/02/earth.jpg',
              }
            : {
                uri: 'https://reactnative-examples.com/wp-content/uploads/2022/02/error-image.png',
              }
        }
        style={styles.logo}
        onError={() => onImageNotFound}
        // blurRadius = {10}
        // accessible={true}
        // accessibilityLabel="hello"
        // resizeMode="stretch"
      /> */}

      {/* <Pressable
        style={styles.button}
        unstable_pressDelay={10}
        onPress={() => alert('pressable')}
      />
      <Text style={styles.text}>Im Pressable </Text> */}