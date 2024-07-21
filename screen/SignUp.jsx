import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Google from '../assets/Img5.jpeg'
import Apple from '../assets/Img6.jpeg'



export const SignUp = (props) => {
  return (
    <View tyle={styles.container}>
      <View style={{ flexDirection: 'row', }}>
        <Text onPress={() => props.navigation.navigate('Getstart')}>
          <Icon style={{ fontSize: 60, color: 'black' }} name="arrow-left" />
        </Text>

        <Text style={styles.heading01}>
          Sign Up
        </Text>
      </View>
      <View>
        <Text style={styles.heading02}>
          Create Account
        </Text>
        <Text style={styles.heading03}>
          Please Inter your Information and create your account
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="  Enter your Full Name"
          placeholderTextColor={'black'}
          style={styles.Input} />

        <TextInput
          placeholder="  Enter  your Email"
          placeholderTextColor={'black'}
          style={styles.Input} />

        <TextInput
          placeholder="  Enter your Password"
          placeholderTextColor={'black'}
          secureTextEntry={true}
          style={styles.Input} />
        <View style={{ width: '100%', alignItems: 'center' }}>
          <TouchableOpacity style={styles.button}>
            <Text style={{
              textAlign: 'center',
              fontSize: 25,
              fontWeight: 'bold',
              color: 'white'
            }}>
              Sign Up
            </Text>
          </TouchableOpacity>

        </View>

        <View>
          <Text style={styles.heading04}>Sign Up With</Text>

          <View style={styles.icons}>
            <Image source={Apple} />
            <Image source={Google} />
          </View>

          <Text style={styles.heading04}>Have an Account?
            <Text style={styles.signUp} onPress={() => props.navigation.navigate('Signin')} >
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    color: 'black'
  },
  heading01: {
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    fontWeight: '400',
    marginBottom: 20,
    marginTop:10,
    marginLeft:60,

  },
  heading02: {
    marginLeft: 30,
    textAlign: 'left',
    color: 'black',
    fontSize: 30,
    fontWeight: '500',
    margin: 9,

  },
  heading03: {
    marginLeft: 10,
    textAlign: 'left',
    color: 'silver',
    fontSize: 22,
    fontWeight: '400',
    margin: 9,

  },
  heading04: {
    marginLeft: 10,
    textAlign: 'center',
    color: 'silver',
    fontSize: 22,
    fontWeight: '400',
    margin: 9,

  },
  form: {
    paddingTop: 20,
  },
  Text: {
    color: 'black',
    fontSize: 40,
    fontWeight: '800',
    textAlign: 'center',
  },
  Input: {
    padding: 15,
    marginTop: 10,
    fontSize: 20,
    margin: 10,
    width: '90%',
    color: 'black',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'black',
  },
  button: {
    backgroundColor: '#756EF3',
    padding: 15,
    width: '92%',
    marginTop: 10,
    borderRadius: 20,
  },

  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-evenly'
  },
  signUp: {
    color: '#756EF3',
    fontfamily: 'Poppins',
    fontsize: '14px',
    fontweight: 600,
    textalign: 'right',
  }
});
