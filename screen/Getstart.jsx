import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


export const Getstart = (props) => {

  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: '#6756FF', }}>
    <View>
      <Image source={require('../assets/Img1.jpeg')} style={styles.img} />
    </View>


    <View style={styles.container}>
      <View>
        <Text style={styles.heading01}>Taskey</Text>
      </View>

      <View>
        <Text style={styles.heading02}>Building Better Workplaces</Text>
      </View>

      <View>
        <Text style={styles.heading03}>
          Create a unique emotional story that describes better than words
        </Text>
      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Screen2')}>
          <Text style={{
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            color:'white'
          }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  )
};

const styles = StyleSheet.create({
    img: {
      width: '100%',
    },
    container: {
      backgroundColor: 'white',
      borderTopRightRadius: 50,
      borderTopLeftRadius: 50,
      height: '100%',
      textAlign: 'center',
      alignItems: 'center'
    },
    heading01: {
      color: '#6756FF',
      fontSize: 50,
      fontWeight: 'bold',
      margin: 8
    },
    heading02: {
      color: 'black',
      fontWeight: '800',
      fontSize: 35,
      textAlign: 'center',
    },
    heading03: {
      color: 'silver',
      fontSize: 20,
      padding:8,
      textAlign: 'center',
      fontWeight: '600',
      margin: 4
    },
    button: {
      backgroundColor: '#6756FF',
      padding: 20,
      width: 300,
      marginTop: 10,
      borderRadius: 20,
    }
   
  
});
