import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Angle from 'react-native-vector-icons/AntDesign';
import Bar from 'react-native-vector-icons/Feather';
import User from 'react-native-vector-icons/FontAwesome';
import Camera from 'react-native-vector-icons/Feather';

export const Chat = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 30 }}>
                <Angle style={styles.icon} size={40} name='leftcircleo' />
                <Text style={styles.head}>Chat</Text>
                <Icon style={styles.icon} size={40} name='pluscircleo' />
            </View>

            <View style={styles.searchContainer}>
                <Bar name="search" size={30} color="grey" style={styles.searchIcon} />
                <TextInput
                    placeholder="Search"
                    placeholderTextColor={'grey'}
                    style={styles.input}
                />
            </View>

            <View style={styles.hub}>
                <User name='user-circle-o' size={30} style={styles.profileIcon} />
                <View style={styles.textContainer}>
                    <Text style={styles.profileName}>Rafay</Text>
                    <Text style={styles.activeStatus}>Active now</Text>
                </View>
                <Camera name='camera' size={30} style={styles.cameraIcon} />
            </View>
            <View style={styles.hub}>
                <User name='user-circle-o' size={30} style={styles.profileIcon} />
                <View style={styles.textContainer}>
                    <Text style={styles.profileName}>Ammar</Text>
                    <Text style={styles.activeStatus}>Active 1h ago</Text>
                </View>
                <Camera name='camera' size={30} style={styles.cameraIcon} />
            </View>
            <View style={styles.hub}>
                <User name='user-circle-o' size={30} style={styles.profileIcon} />
                <View style={styles.textContainer}>
                    <Text style={styles.profileName}>Nehal</Text>
                    <Text style={styles.activeStatus}>Active 3d ago</Text>
                </View>
                <Camera name='camera' size={30} style={styles.cameraIcon} />
            </View>
            <View style={styles.hub}>
                <User name='user-circle-o' size={30} style={styles.profileIcon} />
                <View style={styles.textContainer}>
                    <Text style={styles.profileName}>Irshad</Text>
                    <Text style={styles.activeStatus}>Active 2min ago</Text>
                </View>
                <Camera name='camera' size={30} style={styles.cameraIcon} />
            </View>
            <View style={styles.hub}>
                <User name='user-circle-o' size={30} style={styles.profileIcon} />
                <View style={styles.textContainer}>
                    <Text style={styles.profileName}>Zafeer</Text>
                    <Text style={styles.activeStatus}>Active 1m ago</Text>
                </View>
                <Camera name='camera' size={30} style={styles.cameraIcon} />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container:{
        height:"100%",
        backgroundColor:"white"
    },
    head: {
        fontSize: 30,
        color: "black"
    },
    icon: {
        color: "black",
    },
    searchContainer: {
        top: 20,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        margin: 20,
        paddingLeft: 10,
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        fontSize: 21,
        color: 'black',
        padding: 10,
    },
    hub: {
        flexDirection: "row",
        alignItems: "center",
        margin: 20,
    },
    profileIcon: {
        marginRight: 10,
        color:"black"
    },
    textContainer: {
        flex: 1,
        justifyContent: "center",
    },
    profileName: {
        fontSize: 18,
        color: "black",
    },
    activeStatus: {
        fontSize: 14,
        color: "grey",
    },
    cameraIcon: {
        marginLeft: 10,
        color:"black"
    }
});