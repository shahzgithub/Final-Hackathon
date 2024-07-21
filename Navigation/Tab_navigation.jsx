/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Habits from '../screen/Habits';

import Add from 'react-native-vector-icons/MaterialIcons';
import Setting from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Search from 'react-native-vector-icons/FontAwesome';
import { SignUp } from '../screen/SignUp';
import Chatbox from 'react-native-vector-icons/Ionicons';

import { Searchpage } from '../screen/Searchpage';
import Addpage from '../screen/Addpage';
import { Chat } from '../screen/Chat';
import Settingpage from '../screen/Settingpage';


const Tab = createBottomTabNavigator();
const Tab_Navigation = () => {
  return (
        <Tab.Navigator
          screenOptions={
            {
              tabBarShowLabel: false,
              headerShown: false,
            }}>
          <Tab.Screen
            name="Settingpage"
            component={Settingpage}
            options={
              {
                tabBarIcon: ({ focused }) => (
                  <Setting
                    name="setting"
                    size={28}
                    color={focused ? "red" : "black"}
                  />
                )
              }
            }
          />
          <Tab.Screen
            name="Habits"
            component={Habits}
            options={
              {
                tabBarIcon: ({ focused }) => (
                  <Icon
                    name="home"
                    size={28}
                    color={focused ? "red" : "black"}
                  />
                )
              }
            }
          />
          <Tab.Screen
            name="Addpage"
            component={Addpage}
            options={
              {
                tabBarIcon: ({ focused }) => (
                  <Add
                    name="add"
                    size={28}
                    color={focused ? "red" : "black"}
                  />
                )
              }
            }
          />
           <Tab.Screen
            name="Chat"
            component={Chat}
            options={
              {
                tabBarIcon: ({ focused }) => (
                  <Chatbox
                    name="chatbox"
                    size={28}
                    color={focused ? "red" : "black"}
                  />
                )
              }
            }
          />
          <Tab.Screen
            name="Searchpage"
            component={Searchpage}
            options={
              {
                tabBarIcon: ({ focused }) => (
                  <Search
                    name="search"
                    size={28}
                    color={focused ? "red" : "black"}
                  />
                )
              }
            }
          />
        </Tab.Navigator>
  );
};

export default Tab_Navigation;

const styles = StyleSheet.create({});