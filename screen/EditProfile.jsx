import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Google from '../assets/Img5.jpeg';
import Apple from '../assets/Img6.jpeg';
import Profile from '../assets/man.jpg';



export const EditProfile = () => {
    return (
        <View
            style={styles.container}>


            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Icon style={{ fontSize: 60, textAlign: 'left', paddingTop: 18, color: 'black' }} name="arrow-left" />


                <Text style={styles.heading01}>
                    Edit Profile
                </Text>

                <Text style={{color:'black',fontSize:20,marginTop:'8%',margin:10}}>
                    Save
                </Text>

            </View>


            <View style={styles.form}>



                <View
                style={{
                    alignItems:'center',
                   }}
                >
               <Image 
               source={Profile} style={styles.profile} 
               />
               </View>


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
        marginTop: '8%'

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
        paddingTop: 30,
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
  profile:{
    height:150,
    width:120,
  }
});
 