import { StyleSheet, Image, Pressable, Text, TextInput, View } from 'react-native';
import Angle from 'react-native-vector-icons/AntDesign';
import React from 'react';
import Bar from 'react-native-vector-icons/Feather';

export const Searchpage = () => {
  const handlePress = () => {
    alert('Button Pressed!');
  };

  return (
    <View style={styles.main}>
      <View style={styles.headerContainer}>
        <Pressable>
          <Angle style={styles.icon} size={30} name='left' />
        </Pressable>
        <Text style={styles.head}>Search</Text>
      </View>

      <View style={styles.searchContainer}>
        <Bar name="search" size={24} color="grey" style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          placeholderTextColor={'grey'}
          style={styles.input}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button} onPress={handlePress}>
          {({ pressed }) => (
            <Text style={[styles.buttonText, pressed && { opacity: 0.7 }]}>
              Tasks
            </Text>
          )}
        </Pressable>
        <Pressable style={styles.button} onPress={handlePress}>
          {({ pressed }) => (
            <Text style={[styles.buttonText, pressed && { opacity: 0.7 }]}>
              File
            </Text>
          )}
        </Pressable>
      </View>
      
      <Image source={require('../assets/img02.png')} style={styles.img02} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    padding: 20,
    height: "100%",
    justifyContent: "flex-start",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 40,
  },
  head: {
    fontSize: 24,
    color: "black",
    marginLeft: 90,
    marginBottom: 60,
  },
  icon: {
    marginBottom:55,
    color: "black",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: 'black',
    paddingVertical: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  button: {
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#f9f9f9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
  img02: {
    width: '200px',
    height: 200,
    resizeMode: 'contain',
    marginTop: 0,
  },
});
