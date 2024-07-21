import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Getstart } from '../screen/Getstart';
import { NavigationContainer } from '@react-navigation/native';
import { Screen2 } from '../screen/screen2';
import { Screen3 } from '../screen/Screen3';
import { Screen4 } from '../screen/Screen4';
import { SignUp } from '../screen/SignUp';
import { Signin } from '../screen/Signin';
import Tab_Navigation from './Tab_navigation';
import Habits from '../screen/Habits';
import Language from '../screen/Language';
import Settingpage from '../screen/Settingpage';
import { ProjectScreen } from '../screen/ProjectScreen';

const Stack_Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        options={{
          headerShown:false,
        }}
        name="Getstart" 
        component={Getstart} />
        <Stack.Screen 
        options={{
          headerShown:false,
        }}
        name="Screen2" 
        component={Screen2} />
        <Stack.Screen 
        options={{
          headerShown:false,
        }}
        name="Screen3" 
        component={Screen3} />
        <Stack.Screen 
        options={{
          headerShown:false,
        }}
        name="Screen4" 
        component={Screen4} />
          <Stack.Screen 
          options={{
            headerShown:false,
          }}
          name="Signin" 
          component={Signin} />
        <Stack.Screen 
        options={{
          headerShown:false,
        }}
        name="Signup" 
        component={SignUp} />
        <Stack.Screen 
        options={{
          headerShown:false,
        }}
        name="Language" 
        component={Language} />
          <Stack.Screen 
          options={{
            headerShown:false,
          }}
          name="Setting" 
          component={Settingpage} />
            <Stack.Screen 
            options={{
              headerShown:false,
            }}
            name="ProjectScreen" 
            component={ProjectScreen} />
              <Stack.Screen 
              options={{
                headerShown:false,
              }}
        name="Main" 
        component={Tab_Navigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stack_Navigation;