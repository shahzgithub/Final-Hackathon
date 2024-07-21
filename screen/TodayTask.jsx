import { StyleSheet, Text, ScrollView ,Image  ,View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import Angle from 'react-native-vector-icons/AntDesign';
import React from 'react'

const TodayTask = () => {
    const days = [
        { day: 'Sat', date: 19 },
        { day: 'Sun', date: 20 },
        { day: 'Mon', date: 21 },
        { day: 'Tue', date: 22 },
        { day: 'Wed', date: 23 },
      ];
  return (
    <View style={styles.container}>
    <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 30 }}>
        <Angle style={styles.icon} size={25} name='leftcircleo' />
        <Text style={styles.head}>Today Task</Text>
        <Icon style={styles.icon} size={25} name='edit' />
    </View>
    <View>
        <Image source={require('../assets/Img08.png')}  />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {days.map((item, index) => (
          <View key={index} style={[styles.dateContainer, item.date === 20 && styles.selectedDateContainer]}>
            <Text style={[styles.dateText, item.date === 20 && styles.selectedDateText]}>{item.date}</Text>
            <Text style={[styles.dayText, item.date === 20 && styles.selectedDayText]}>{item.day}</Text>
          </View>
        ))}
      </ScrollView>
      <View>
        <Image source={require('../assets/img09.png')}  style={styles.image} />
      </View>
    </View>
  )
}

export default TodayTask

const styles = StyleSheet.create({
    container:{
        height:"100%",
        backgroundColor:"white"
    },
    head: {
        fontSize: 25,
        color: "black"
    },
    icon: {
        color: "black",
    },
    scrollContainer: {
        paddingTop:10,
        paddingBottom:0,
        paddingVertical: 10,
      },
      selectedDateContainer: {
        backgroundColor: '#7b61ff',
        borderColor: '#7b61ff',
      },
    dateContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginHorizontal: 11,
        borderRadius: 8,
        backgroundColor: 'lightpurple',
        borderWidth: 1,
        borderColor: '#ddd',
      },
      dateText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
      },
      selectedDateText: {
        color: 'black',
      },
      dayText: {
        fontSize: 14,
        color: 'black',
      },
      selectedDayText: {
        color: 'black',
      },
      image:{
    marginBottom:90,
      },
})