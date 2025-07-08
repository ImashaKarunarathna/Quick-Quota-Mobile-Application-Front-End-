


import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  } from 'react-native';
import React, { useState } from 'react';
import Slidesho from './component/slidesho';
import AppBar from './component/appbar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



//main pages
import Home from './component/home';
import Offerings from './component/offerings';
import Funzone from './component/funzone';
import Journey from './component/journey';
import Signin from './component/signin';
import Login from './component/login';
import Feedback from './component/feedback';
import Frogot from './component/frogot';
import Profile from './component/Profile';
import Timer from './component/Timer';
import Graph from './component/graph';
import Report1 from './component/Report1';
import Report2 from './component/Report2';
import Report3 from './component/Report3';


//Imagelist
import Exploration from './component/exploration';
import Sport from './component/sport';
import Crafting from './component/crafting';
import Music from './component/music';
import Reading from './component/reading';
import Gardening from './component/gardening';
import Photography from './component/photography';
import Science from './component/science';
import Cooking from './component/cooking';
import GetInTouch from './component/getintouch';



const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <AppBar />

      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Quick Quota"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Offerings"
          component={Offerings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Funzone"
          component={Funzone}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Journey"
          component={Journey}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="GetInTouch"
          component={GetInTouch}
          options={{ headerShown: false }}
        />


        <Stack.Screen
          name="LogIn"
          component={Login}
          options={{ headerShown: false }}
        />


        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Feedback"
          component={Feedback}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Frogot"
          component={Frogot}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Timer"
          component={Timer}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Graph"
          component={Graph}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Report1"
          component={Report1}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Report2"
          component={Report2}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Report3"
          component={Report3}
          options={{ headerShown: false }}
        />


        <Stack.Screen
          name="Imagelist"
          component={Funzone}
          options={{ headerShown: false }}
        />


        <Stack.Screen name="Exploration"
          component={Exploration}
          options=
          {{
            headerShown: true,
            headerStyle:
            {
              backgroundColor: '#4d4dff',
              opacity: 0.8
            }
          }}
        />


        <Stack.Screen name="Sport"
          component={Sport}
          options=
          {{
            headerShown: true,
            headerStyle:
            {
              backgroundColor: '#4d4dff',
              opacity: 0.8
            }
          }}
        />

        <Stack.Screen name="Music"
          component={Music}
          options=
          {{
            headerShown: true,
            headerStyle:
            {
              backgroundColor: '#4d4dff',
              opacity: 0.8
            }
          }}
        />

        <Stack.Screen name="Crafting"
          component={Crafting}
          options=
          {{
            headerShown: true,
            headerStyle:
            {
              backgroundColor: '#4d4dff',
              opacity: 0.8
            }
          }}
        />

        <Stack.Screen name="Reading"
          component={Reading}
          options=
          {{
            headerShown: true,
            headerStyle:
            {
              backgroundColor: '#4d4dff',
              opacity: 0.8
            }
          }}
        />

        <Stack.Screen name="Gardening"
          component={Gardening}
          options=
          {{
            headerShown: true,
            headerStyle:
            {
              backgroundColor: '#4d4dff',
              opacity: 0.8
            }
          }}
        />

        <Stack.Screen name="Photography"
          component={Photography}
          options=
          {{
            headerShown: true,
            headerStyle:
            {
              backgroundColor: '#4d4dff',
              opacity: 0.8
            }
          }}
        />

        <Stack.Screen name="Science"
          component={Science}
          options=
          {{
            headerShown: true,
            headerStyle:
            {
              backgroundColor: '#4d4dff',
              opacity: 0.8
            }
          }}
        />

        <Stack.Screen name="Cooking"
          component={Cooking}
          options=
          {{
            headerShown: true,
            headerStyle:
            {
              backgroundColor: '#4d4dff',
              opacity: 0.8
            }
          }}

        />

      </Stack.Navigator>
    </NavigationContainer>



  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#180443',
    alignItems: 'center',
    justifyContent: 'center',
  },
  a: {
    color: '#ffffff',
    marginVertical: 10,
  },
});
