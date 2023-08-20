import React from 'react'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'grey',
            tabBarStyle: {
                backgroundColor: '#ECF9FF',
            
            },
            headerStyle: {
                backgroundColor: '#ECF9FF',
            },
            headerTitleStyle: {
                fontWeight: 'bold', 
                fontSize: 24,
                color: 'tomato'
            }
        }}
        >
            <Tab.Screen name={'Current'} component={CurrentWeather} options={{
                tabBarIcon: ({ focused }) => (<Feather name={'droplet'} size={25} color={focused ? 'tomato' : 'grey'} />)
            }} />
            <Tab.Screen name={'Upcoming'} component={UpcomingWeather} options={{
                tabBarIcon: ({ focused }) => (<Feather name={'clock'} size={25} color={focused ? 'tomato' : 'grey'} />)
            }} />
            <Tab.Screen name={'City'} component={City} options={{
                tabBarIcon: ({ focused }) => (<Feather name={'home'} size={25} color={focused ? 'tomato' : 'grey'} />)
            }} />
        </Tab.Navigator>
    )
}

export default Tabs