/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'
import { Feather } from '@expo/vector-icons'
import Home from '../screens/Home'
import FavoriteCities from '../screens/FavoriteCities'

const Tab = createBottomTabNavigator()

const Tabs = ({ weather }) => {
  console.log(weather)
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#042361',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#0E99A9'
        },
        headerStyle: {
          backgroundColor: '#042361'
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: 'white'
        }
      }}
    >
      <Tab.Screen
        name={'Home'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'droplet'}
              size={25}
              color={focused ? '#042361' : 'white'}
            />
          )
        }}
      >
        {() => <Home weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name={'Upcoming'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'clock'}
              size={25}
              color={focused ? '#042361' : 'white'}
            />
          )
        }}
      >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name={'Favorites'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'heart'}
              size={25}
              color={focused ? '#042361' : 'white'}
            />
          )
        }}
      >
        {() => <FavoriteCities weatherData={weather.city} />}
      </Tab.Screen>
      <Tab.Screen
        name={'City'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'heart'}
              size={25}
              color={focused ? '#042361' : 'white'}
            />
          )
        }}
      >
        {() => <City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default Tabs