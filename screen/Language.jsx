import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Angle from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Circle from 'react-native-vector-icons/Entypo';
// import RadioButton from 'react-native-radio-buttons';

const Language = (props) => {
    const navigation = useNavigation()
    return (
        <View style={styles.main}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Setting')}>
            <View style={styles.headerContainer}>
                <Angle style={styles.icon} size={30} name='leftcircleo' />
                <Text style={styles.head}>Language</Text>
            </View>
            </TouchableOpacity>

            <View style={styles.inputContainer}>
                <Text style={styles.languageText}>English</Text>
                <Circle style={styles.icon} size={20} name='circle' />
                {/* <RadioButton style={styles.radioButton} /> */}
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.languageText}>Spanish</Text>
                <Circle style={styles.icon} size={20} name='circle' />
                {/* <RadioButton style={styles.radioButton} /> */}
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.languageText}>German</Text>
                <Circle style={styles.icon} size={20} name='circle' />
                {/* <RadioButton style={styles.radioButton} /> */}
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.languageText}>Dutch</Text>
                <Circle style={styles.icon} size={20} name='circle' />
                {/* <RadioButton style={styles.radioButton} /> */}
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.languageText}>Chinese</Text>
                <Circle style={styles.icon} size={20} name='circle' />
                {/* <RadioButton style={styles.radioButton} /> */}
            </View>
        </View>
    );
}

export default Language;

const styles = StyleSheet.create({
    main: {
        // flex: 1,
        backgroundColor: "white",
        padding: 30,
        height:"100%"
    },
    headerContainer: {
        top:20,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,
    },
    head: {
        fontSize: 30,
        color: "black",
        marginLeft: 20,
        left:65
    },
    icon: {
        color: "black",
        top:3
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
    radioButton: {
        marginRight: 10,
    },
});