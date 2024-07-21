import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Icon  from 'react-native-vector-icons/AntDesign';
import Angle from 'react-native-vector-icons/AntDesign';

const TaskStatuspage = () => {
    return (
            <View style={styles.main}>
                <View style={styles.header}>
                    <Angle style={styles.icon} size={40} name='leftcircleo' />
                    <Text style={styles.head}>Projects</Text>
                    <Icon style={styles.icon} size={40} name='pluscircleo' />
                </View>
            </View>
    );
};


const styles = StyleSheet.create({
    container: {
        // flex: 1,
    backgroundColor: "white",
    padding: 30,
    height: "100%"
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
        color: "black",
        fontWeight: 'bold',
    },
    icon: {
        color: "black",
    },
});

export default TaskStatuspage;