import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import Profile from '../assets/man.jpg';
export const WorkSpace = (props) => {
    const navigation = useNavigation()
    return (
        <View
            style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Entypo style={{ fontSize: 50, textAlign: 'left', color: 'black' }} name="cross" />
            </View>
            <View style={styles.form}>
                <View
                    style={{
                        alignItems: 'center'
                    }}
                >
                    <Image
                        style={{ width: 200, height: 200, }}
                        source={Profile}
                    />
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 30, fontWeight: 800 }}>User Name</Text>
                        <Text style={{ color: 'black', fontSize: 20 }}>abc@abc.gmail.com</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate('EditProfile')}>
                            <Text style={{
                                color: 'black',
                                padding: 8,
                                borderRadius: 5,
                                borderWidth: 1,
                                marginTop: 3,
                                borderColor: 'black',
                                textAlign: 'center',
                                alignItems: 'center'
                            }}>
                                Edit Profile
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: "100%", }}>
                    <Text style={{ fontSize: 30, fontWeight: 700, color: '#002055', marginLeft: 20, }}>WorkSpace</Text>
                    <View
                        style={styles.Input} >
                        <Text style={{ color: '#002055', fontSize: 24, fontWeight: 700 }}>UI Design</Text>
                        <TouchableOpacity>
                            <Text style={{
                                padding: 10,
                                color: '#756EF3',
                                borderRadius: 5,
                                borderWidth: 1,
                                marginTop: 3,
                                borderColor: '#756EF3',
                                textAlign: 'center',
                                alignItems: 'center'
                            }}>
                                Invite
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={{}}>
                            <Text style={{ fontSize: 30, fontWeight: 700, color: '#002055', marginLeft: 20, }}>Manage</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View
                                style={styles.Input2} >
                                <Text style={{ color: 'black', fontSize: 18, fontWeight: 700 }}>
                                    Team
                                </Text>
                                <Text style={{ color: 'black' }}>8</Text>
                            </View>
                            <View
                                style={styles.Input2} >
                                <Text style={{ color: '#002055', fontSize: 18, fontWeight: 700 }}>
                                    Label
                                </Text>
                                <Text style={{ color: '#002055' }}>4</Text>

                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View
                                style={styles.Input2} >
                                <Text style={{ color: '#002055', fontSize: 18, fontWeight: 700 }}>
                                    Task
                                </Text>
                                <Text style={{ color: '#002055' }}>8</Text>
                            </View>
                            <View
                                style={styles.Input2} >
                                <Text style={{ color: 'black', fontSize: 18, fontWeight: 700 }}>
                                    Member
                                </Text>
                                <Text style={{ color: '#002055' }}>7</Text>
                            </View>
                        </View>
                    </View>
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
        color: '#002055',
    },
    Text: {
        color: '#002055',
        fontSize: 40,
        fontWeight: '800',
        textAlign: 'center',
    },
    Input: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginTop: 20,
        fontSize: 20,
        margin: 10,
        width: '90%',
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#002055'
    },
    Input2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginTop: 20,
        fontSize: 20,
        margin: 10,
        width: '45%',
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#002055',
    },

});
 