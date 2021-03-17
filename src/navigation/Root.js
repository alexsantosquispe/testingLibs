import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Feather'

import { LocalContacts, Maps, Multimedia, Bluetooth } from '../pages'
import { Colors } from '../styles'

const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const HomeTabs = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Maps"
      tabBarOptions={{
        activeTintColor: Colors.primaryColor,
        inactiveTintColor: Colors.grayColor,
        labelStyle: {
          fontSize: 13,
          fontFamily: 'Dosis-SemiBold'
        }
      }}>
      <Tabs.Screen
        name="Contacts"
        component={LocalContacts}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="users" color={color} size={25} />
          )
        }}
      />
      <Tabs.Screen
        name="Maps"
        component={Maps}
        options={{
          tabBarIcon: ({ color }) => <Icon name="map" color={color} size={25} />
        }}
      />
      <Tabs.Screen
        name="Multimedia"
        component={Multimedia}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="image" color={color} size={25} />
          )
        }}
      />
      <Tabs.Screen
        name="Bluetooth"
        component={Bluetooth}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="bluetooth" color={color} size={25} />
          )
        }}
      />
    </Tabs.Navigator>
  )
}

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Root
