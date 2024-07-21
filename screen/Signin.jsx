import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Google from '../assets/Img5.jpeg';
import Apple from '../assets/Img6.jpeg';
import Tab_Navigation from '../Navigation/Tab_navigation';

export const Signin = (props) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (email && password) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        props.navigation.navigate('Main');
      }, 2000);
    } else {
      Alert.alert('Error', 'Please fill in all fields.');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Text onPress={() => props.navigation.navigate('Getstart')}>
            <Icon style={{ fontSize: 60, textAlign: 'left', paddingTop: 18, color: 'black' }} name="arrow-left" />
          </Text>
          <Text style={styles.heading01}>
            Sign In
          </Text>
        </View>
        <Text style={styles.heading02}>
          Welcome Back
        </Text>
        <Text style={styles.heading03}>
          Please Enter your Information to sign in
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="Enter your Email"
          placeholderTextColor={'black'}
          style={styles.Input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Enter your Password"
          placeholderTextColor={'black'}
          secureTextEntry={true}
          style={styles.Input}
          value={password}
          onChangeText={setPassword}
        />
        <View>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            {loading ? (
              <ActivityIndicator color="white" size={35} />
            ) : (
              <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: 'white' }}>
                Sign In
              </Text>
            )}
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.heading04}>Sign In With</Text>
          <View style={styles.icons}>
            <Image source={Apple} />
            <Image source={Google} />
          </View>
          <Text style={styles.heading04}>Have an Account?
            <Text style={styles.signUp} onPress={() => props.navigation.navigate('Signup')}>
              Sign Up
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
  Icon1: {
    fontSize: 40,
    marginRight: 20,
    textAlign: 'left',
    color: 'black',
    paddingTop: 50,
  },
  heading01: {
    textAlign: 'center',
    paddingTop: 50,
    color: 'black',
    fontSize: 30,
    fontWeight: '400',
    marginBottom: 20,
    marginTop: '-10%',
    marginLeft: 70
  },
  heading02: {
    paddingTop: 5,
    marginLeft: 30,
    textAlign: 'left',
    color: 'black',
    fontSize: 30,
    fontWeight: '500',
    margin: 9,
  },
  heading03: {
    marginLeft: 30,
    textAlign: 'left',
    color: 'silver',
    fontSize: 22,
    fontWeight: '400',
    margin: 9,
  },
  heading04: {
    marginLeft: 30,
    textAlign: 'center',
    color: 'silver',
    fontSize: 22,
    fontWeight: '400',
    margin: 9,
  },
  form: {
    paddingTop: 0,
  },
  Text: {
    color: 'black',
    fontSize: 40,
    fontWeight: '800',
    textAlign: 'center',
  },
  Input: {
    padding: 20,
    marginTop: 20,
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
    marginLeft: 10,
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
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 14,
    textAlign: 'right',
  },
  arrow: {
    color: 'black',
  }
});
