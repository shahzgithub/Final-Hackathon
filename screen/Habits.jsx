import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Google = require('../assets/Img6.jpeg');

const Habits = () => {
 return (
  <ScrollView>
   <View style={styles.container}>
    <View style={styles.header}>
     <View style={styles.gridIcon}>
      <Text style={styles.gridIconText}>
       <AntDesign name="appstore-o" color="black" size={30} />
      </Text>
     </View>
     <View style={styles.date}>
      <Text style={styles.dateText}>Friday, 26</Text>
     </View>
     <TouchableOpacity style={styles.notificationIcon}>
      <Feather name="bell" size={30} color="black" />
     </TouchableOpacity>
    </View>
    <View style={styles.content}>
     <View>
      <Text style={styles.titleText}>Let's make a Habits together 🙌</Text>
     </View>
    
     <View>
      <View style={styles.card}>
       <Text style={styles.cardTitle}>Application Design</Text>
       <Text style={styles.cardSubtitle}>UI Design Kit</Text>
       <View style={styles.progress}>
        <View style={styles.profile}>
         <Image
          source={Google}
          style={styles.profileImage}/>
         <Image
          source={Google}
          style={styles.profileImage}
         />
        </View>
        <View style={{ width: '60%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', }}>
          <View style={styles.progressBar} />
         <Text style={styles.progressText}>50/80</Text>
        </View>
       </View>
      </View>
     </View>
     
     <View style={styles.inProgress}>
      <Text style={styles.inProgressTitle}>In Progress</Text>
      <View style={styles.inProgressItems}>
      
       <View style={styles.inProgressItem}>
        <View>
         <Text style={styles.inProgressItemSubtitle}>Create Detail Booking</Text>
         <Text style={styles.inProgressItemTitle}>Productivity Mobile App</Text>
         <Text style={styles.inProgressItemTime}>2 min ago</Text>
        </View>
        <View style={styles.inProgressItemProgress}>
         <Text style={styles.inProgressItemProgressText}>60%</Text>
        </View>
       </View>
     
       <View style={styles.inProgressItem}>
        <View>
         <Text style={styles.inProgressItemSubtitle}>Revision Home Page</Text>
         <Text style={styles.inProgressItemTitle}>Banking Mobile App</Text>
         <Text style={styles.inProgressItemTime}>5 min ago</Text>
        </View>
        <View style={styles.inProgressItemProgress}>
         <Text style={styles.inProgressItemProgressText}>70%</Text>
        </View>
       </View>
     
       <View style={styles.inProgressItem}>
        <View>
         <Text style={styles.inProgressItemSubtitle}>Online Course</Text>
         <Text style={styles.inProgressItemTitle}>Working On Landing Page</Text>
         <Text style={styles.inProgressItemTime}>7 min ago</Text>
        </View>
        <View style={styles.inProgressItemProgress}>
         <Text style={styles.inProgressItemProgressText}>80%</Text>
        </View>
       </View>
      </View>
     </View>
    </View>
   </View>
  </ScrollView>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: 'white',
 },
 header: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 16,
 },
 gridIcon: {
  backgroundColor: 'lightgray',
  borderRadius: 8,
  padding: 8,
 },
 gridIconText: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#000',
 },
 date: {
  backgroundColor: '#F2F2F2',
  borderRadius: 8,
  paddingHorizontal: 16,
  paddingVertical: 8,
 },
 dateText: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#000',
 },
 notificationIcon: {
  backgroundColor: 'lightgray',
  borderRadius: 8,
  padding: 8,
 },
 notificationIconImage: {
  width: 24,
  height: 24,
 },
 content: {
  padding: 16,
 },
 titleText: {
  fontSize: 24,
  fontWeight: 'bold',
  marginVertical: 8,
  marginRight: 80,
  color: '#000',
 },
 card: {
  marginTop: 20,
  backgroundColor: '#756ef3',
  borderRadius: 8,
  padding: 16,
  flex: 1,
  marginRight: 16,
 },
 cardTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 8,
  color: '#000',
 },
 cardSubtitle: {
  fontSize: 14,
  marginBottom: 16,
  color: 'white',
 },
 progress: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 16,
 },
 progressBar: {
  backgroundColor: '#F2F2F2',
  height: 8,
  width: '70%',
  borderRadius: 4,
 },
 progressText: {
  fontSize: 14,
  marginLeft: 8,
  color: 'white',
 },
 profile: {
  flexDirection: 'row',
 },
 profileImage: {
  width: 40,
  height: 40,
  borderRadius: 20,
  marginRight: 0,
 },
 inProgress: {
  paddingVertical: 30,
  marginTop: 16,
 },
 inProgressTitle: {
  fontSize: 22,
  fontWeight: 'bold',
  marginBottom: 16,
  color: '#000',
 },
 inProgressItems: {
  gap: 20,
  backgroundColor: 'white',
  borderRadius: 8,
  padding: 10,
 },
 inProgressItem: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderWidth:1,
  borderColor:'#babdc3',
  borderRadius:15,
  padding:10,
 },
 inProgressItemTitle: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#000',
 },
 inProgressItemSubtitle: {
  fontSize: 14,
  color: '#777',
 },
 inProgressItemTime: {
  fontSize: 12,
  color: '#777',
 },
 inProgressItemProgress: {
  backgroundColor: '#F2F2F2',
  borderRadius: 20,
  paddingHorizontal: 16,
  paddingVertical: 8,
  flexDirection: 'row',
 },
 inProgressItemProgressText: {
  fontSize: 14,
  color: '#000',
 },
});

export default Habits;