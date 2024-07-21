import { StyleSheet, Pressable, TouchableOpacity, Image, Text, View } from 'react-native'
import Angle from 'react-native-vector-icons/AntDesign';
import React from 'react'

const CreateTeam = () => {
  const handlePress = () => {
    alert('Button Pressed!');
};
  return (
    <View style={styles.main}>
      <View style={styles.headerContainer}>
        <Angle style={styles.icon} size={30} name='leftcircleo' />
        <Text style={styles.head}>Create Team</Text>
      </View>
      <View>
        <Image source={require('../assets/Img04.png')} style={styles.img} />
      </View>
      <View>
        <Text style={styles.Text}>
          Team Name
        </Text>
      </View>
      <View style={styles.inProgressItem}>
        <View>
          <Text style={styles.inProgressItemTitle}>Team Align</Text>
        </View>
      </View>
      <View>
        <Text style={styles.Text1}>
          Team Member
        </Text>
      </View>
      <View>
        <Image source={require('../assets/Img05.png')} />
      </View>
      <View>
        <Text style={styles.Text2}>
          Types
        </Text>
      </View>
      <View style={styles.buttonsAndIconContainer}>
        <Pressable style={styles.button} onPress={handlePress}>
          {({ pressed }) => (
            <Text style={[styles.buttonText, pressed && { opacity: 0.7 }]}>
              Private
            </Text>
          )}
        </Pressable>
        <Pressable style={styles.button} onPress={handlePress}>
          {({ pressed }) => (
            <Text style={[styles.buttonText, pressed && { opacity: 0.7 }]}>
              Public
            </Text>
          )}
        </Pressable>
        <Pressable style={styles.button} onPress={handlePress}>
          {({ pressed }) => (
            <Text style={[styles.buttonText, pressed && { opacity: 0.7 }]}>
              Secret
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
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CreateTeam

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
    marginLeft: 0,
    left: 45
  },
  icon: {
    color: "black",
    top: 3
  },
  img: {
    width: '100%',
    height: 220,
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
  Text: {
    fontSize: 14,
    color: '#777',
  },
  Text1: {
    paddingTop: 30,
    fontSize: 14,
    color: '#777',
  },
  Text2: {
    paddingTop: 10,
    fontSize: 14,
    color: '#777',
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
button1: {
  backgroundColor: '#6756FF',
  padding: 20,
  width: 300,
  marginTop: 10,
  borderRadius: 20,
},
})
