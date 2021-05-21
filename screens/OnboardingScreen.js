import React from 'react';
import {View, Text, StyleSheet, Button, StatusBar, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const data = [
  {
    id : 1,
    title: 'Todo list',
    text: 'Your future depends on many things, but mostly on you',
    image: require('../assets/images/Group1.png'),
    bg: '#59b2ab',
  },
  {
    id : 2,
    title: 'Todo list',
    text: 'Keep your eyes on the stars and your feet on the ground',
    image: require('../assets/images/Group2.png'),
    bg: '#febe29',
  },
  {
    id : 3,
    title: 'Todo list',
    text: "Life is like a coin. You can spend it anyway you wish, but you only spend it once.",
    image: require('../assets/images/Group3.png'),
    bg: '#22bcb5',
  },
];

const OnboardingScreen = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <View key={item.id} style={styles.slice}>
        <Image style={styles.image} source={item.image} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };
    const keyExtractor = item => {
    return item.id;
     };
    const renderDoneButton = () => {
    return (
        <View style={styles.btn}>
            <Text>Done</Text>
        </View>
    );
    };
    const renderNextButton = () => {
        return (
        <View style={styles.btn}>
            <Text>Next</Text>
        </View>
        );
    };
    const renderPrevButton = () => {
        return (
        <View style={styles.btn}>
            <Text>Pre</Text>
        </View>
        );
    };
    const handleOndone = () => {
        navigation.navigate('TodoScreen');
    }
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={data}
        dotClickEnabled={true}
        activeDotStyle = {styles.activeDot}
        renderDoneButton = {renderDoneButton}
        renderNextButton = {renderNextButton}
        renderPrevButton = {renderPrevButton}
        showPrevButton
        onDone={handleOndone}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    slice:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },

    image:{
        marginTop: -70,
    },

    title:{
        fontSize: 22,
        textAlign: 'center',

    },

    text:{
        fontSize: 14,
        textAlign: 'center',

    },
    activeDot:{
        backgroundColor: '#1C215D'
    },
    btn:{
        marginTop: 14,
    }

}); 

export default OnboardingScreen;
