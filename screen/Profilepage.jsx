import { StyleSheet,  TouchableOpacity ,Image, Text, View } from 'react-native'
import Angle from 'react-native-vector-icons/AntDesign';
import Right from 'react-native-vector-icons/AntDesign';
import Profileimage from '../assets/man.jpg';
import React from 'react'

const Profilepage = () => {
    return (
        <View style={styles.main}>
            <View style={styles.headerContainer}>
                <Angle style={styles.icon} size={30} name='leftcircleo' />
                <Text style={styles.head}>Profile</Text>
            </View>
            <View
                style={styles.container}>
                <View style={styles.form}>
                    <View
                        style={{
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            style={{ width: 100, height: 150, }}
                            source={Profileimage}/>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: 'black', fontSize: 30, fontWeight: 800 }}>Alvart Anistain</Text>
                            <Text style={{ color: 'black', fontSize: 20 }}>@albart.anistain</Text>
                            <TouchableOpacity>
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
                                    Edit
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.imageContainer}>
        <Image source={require('../assets/ing001.png')} style={styles.image} />
      </View>
      <View style={styles.inputContainer}>
                <Text style={styles.languageText}>My Project</Text>
                <Right style={styles.icon} size={20} name='right' />
                {/* <RadioButton style={styles.radioButton} /> */}
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.languageText}>Join a Team</Text>
                <Right style={styles.icon} size={20} name='right' />
                {/* <RadioButton style={styles.radioButton} /> */}
            </View>
        </View>
    )
}

export default Profilepage

const styles = StyleSheet.create({
    main: {
        // flex: 1,
        backgroundColor: "white",
        padding: 30,
        height: "100%"
    },
    headerContainer: {
        top: 20,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,
    },
    head: {
        fontSize: 30,
        color: "black",
        marginLeft: 20,
        left: 65
    },
    icon: {
        color: "black",
        top: 3
    },
    image:{
    marginLeft:45,
    },
    inputContainer: {
        marginBottom:30,
        height:70,
        top:50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#f9f9f9",
    },
    languageText: {
        fontSize: 18,
        color: "black",
    },
    icon: {
        color: "black",
        top:3
    },
})