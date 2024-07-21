import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign  from "react-native-vector-icons/AntDesign"


export const Screen4 = (props) => {
  return (
    <View>
      <View>
        <Image source={require('../assets/Img4.jpeg')} style={styles.img} />
      </View>


      <View style={styles.container}>
        <View>
          <Text style={styles.heading01}>Task Management</Text>
        </View>

        <View>
          <Text style={styles.heading02}>Let's create a <Text style={{color:'#6756FF'}}>space</Text> for your workflows</Text>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'space-around',marginTop:30,}} >
          <TouchableOpacity onPress={() => props.navigation.navigate('Signin')}>
            <Text style={{
              textAlign: 'center',
              fontSize: 27,
              fontWeight: '400',
              color: 'black'
            }}>
              Skip
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate('Signin')} style={{backgroundColor:'#6756FF',padding:10,borderRadius:100,}}>
            <Text>
              <AntDesign style={{
              textAlign: 'center',
              fontSize: 30,
              fontWeight: '900',
              color: '#fff',
              }} name="arrowright" />
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
    height: '100%',
    textAlign: 'center',
    alignItems: 'center'
  },
  heading01: {
    color: '#6756FF',
    fontSize: 28,
    fontWeight: '600',
    marginLeft:'-17%',
    marginBottom:5,
  },
  heading02: {
    color: 'black',
    fontWeight: '500',
    fontSize: 45,
    textAlign: 'left',
    marginLeft:29
  },
});