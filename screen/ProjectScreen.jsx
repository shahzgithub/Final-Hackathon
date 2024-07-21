import { StyleSheet, Text, TextInput, Pressable, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import Angle from 'react-native-vector-icons/AntDesign';
import Bar from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo'
import React from 'react'

export const ProjectScreen = () => {
    const handlePress = () => {
        alert('Button Pressed!');
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Angle style={styles.icon} size={40} name='leftcircleo' />
                <Text style={styles.head}>Projects</Text>
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

            <View style={styles.buttonsAndIconContainer}>
                <Pressable style={styles.button} onPress={handlePress}>
                    {({ pressed }) => (
                        <Text style={[styles.buttonText, pressed && { opacity: 0.7 }]}>
                            Favourites
                        </Text>
                    )}
                </Pressable>
                <Pressable style={styles.button} onPress={handlePress}>
                    {({ pressed }) => (
                        <Text style={[styles.buttonText, pressed && { opacity: 0.7 }]}>
                            Recents
                        </Text>
                    )}
                </Pressable>
                <Pressable style={styles.button} onPress={handlePress}>
                    {({ pressed }) => (
                        <Text style={[styles.buttonText, pressed && { opacity: 0.7 }]}>
                            All
                        </Text>
                    )}
                </Pressable>
                <Entypo style={styles.gridIcon} size={30} name='grid' />
            </View>

            <View style={styles.imageContainer}>
                <Image source={require('../assets/img01.png')} style={styles.image} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        padding: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 30,
        marginBottom: 20,
    },
    head: {
        fontSize: 28,
        color: "#444",
        fontWeight: 'bold',
    },
    icon: {
        color: "#444",
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: '#e6e6e6',
        borderRadius: 10,
        marginVertical: 20,
        paddingHorizontal: 10,
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        fontSize: 18,
        color: '#444',
        padding: 10,
    },

    buttonsAndIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    button: {
        flex: 1,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: '#888',
        backgroundColor: '#dcdcdc',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#444',
        fontSize: 11,
        fontWeight: '600',
    },
    gridIcon: {
        color: '#444',
        marginLeft: 10,
    },

    image: {
        width: 340,
        paddingTop: 90,
        paddingVertical: 50,
        height: 500,
    },
});
