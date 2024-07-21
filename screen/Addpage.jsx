import React from 'react'
import { StyleSheet, Text, Pressable, TouchableOpacity, Image, View } from 'react-native'
import Angle from 'react-native-vector-icons/AntDesign';


const Addpage = () => {
  const handlePress = () => {
    alert('Button Pressed!');
};
  return (
    <View style={styles.main}>
      <View style={styles.headerContainer}>
        <Angle style={styles.icon} size={30} name='leftcircleo' />
        <Text style={styles.head}>Add Task</Text>
      </View>
      <View>
        <Text style={styles.Text}>
          Task Name
        </Text>
      </View>
      <View style={styles.inProgressItem}>
        <View>
          <Text style={styles.inProgressItemTitle}>Mobile Application Design</Text>
        </View>
      </View>
      <View>
        <Text style={styles.Text1}>
          Task Name
        </Text>
      </View>
      <View>
        <Image source={require('../assets/Img06.png')} style={styles.img} />
      </View>
      <View>
        <Text style={styles.Text1}>
          Date
        </Text>
      </View>
      <View style={styles.inProgressItem}>
        <View>
          <Text style={styles.inProgressItemTitle}>November 01,20</Text>
        </View>
      </View>
      <View>
        <Image source={require('../assets/Img07.png')} style={styles.img1} />
      </View>
      <View>
        <Text style={styles.Text2}>
          Board
        </Text>
      </View>
      <View style={styles.buttonsAndIconContainer}>
        <Pressable style={styles.button} onPress={handlePress}>
          {({ pressed }) => (
            <Text style={[styles.buttonText, pressed && { opacity: 0.7 }]}>
             Urgent
            </Text>
          )}
        </Pressable>
        <Pressable style={styles.button} onPress={handlePress}>
          {({ pressed }) => (
            <Text style={[styles.buttonText, pressed && { opacity: 0.7 }]}>
              Running
            </Text>
          )}
        </Pressable>
        <Pressable style={styles.button} onPress={handlePress}>
          {({ pressed }) => (
            <Text style={[styles.buttonText, pressed && { opacity: 0.7 }]}>
              ongoing
            </Text>
          )}
        </Pressable>
      </View>
      <View>
        <TouchableOpacity style={styles.button1}>
          <Text style={{
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            color:'white'
          }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
     </View> 
  )
}

export default Addpage;

const styles = StyleSheet.create({
  main: {
    // flex: 1,
    backgroundColor: "white",
    padding: 30,
    height: "200%"
      },
      headerContainer: {
        top: 20,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,
      },
      icon: {
        color: "black",
        top: 3
      },
      head: {
        fontSize: 30,
        color: "black",
        marginLeft: 0,
        left: 45
      },
      Text: {
        paddingTop:50,
        fontSize: 14,
        color: '#777',
      },
      inProgressItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#babdc3',
        borderRadius: 15,
        padding: 20,
      },
      inProgressItemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
      },
   Text1:{
    paddingTop:10,
    fontSize: 14,
    color: '#777',
   },
   img1:{
marginTop:20,
   },
   buttonsAndIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 10,
},
button: {
    flex: 1,
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: '#888',
    backgroundColor: '#dcdcdc',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
    alignItems: 'center',
},
buttonText: {
    color: '#444',
    fontSize: 15,
    fontWeight: '600',
},
img1:{
marginRigt:100,
},
button1: {
  backgroundColor: '#6756FF',
  padding: 20,
  width: 300,
  marginTop: 10,
  borderRadius: 20,
},
Text2:{
  paddingTop:0,
  fontSize: 14,
  color: '#777',
 },
  })