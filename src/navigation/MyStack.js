import { createStackNavigator } from '@react-navigation/stack';
import CurrentWeather from '../screens/CurrentWeather';
import FavoriteCities from '../screens/FavoriteCities';
import Home from '../screens/Home';
import React from 'react';
import City from '../screens/City';
import Search from '../screens/Search';

const Stack = createStackNavigator();

function MyStack({weather}) {
  return (
    <Stack.Navigator>
        
      <Stack.Screen name="Home" component={Home} initialParams={{ weatherData: weather.list[0] }} options={{title: 'Home', headerStyle: {
        backgroundColor : '#042361'
      }, headerTintColor: 'white' , headerTitleStyle : {
        fontWeight : 'bold'
      }}} />
      <Stack.Screen name="CurrentWeather" component={CurrentWeather}  options={{title: 'Currently', headerStyle: {
        backgroundColor : '#042361'
      }, headerTintColor: 'white' , headerTitleStyle : {
        fontWeight : 'bold'
      }}} />
      <Stack.Screen name="FavoriteCities" component={FavoriteCities}  options={{title: 'Favorites', headerStyle: {
        backgroundColor : '#042361'
      }, headerTintColor: 'white', headerTitleStyle : {
        fontWeight : 'bold'
      }
      }} />
      <Stack.Screen name="City" component={City} />
      
      <Stack.Screen name="Search" component={Search} options={{title: 'Search', headerStyle: {
        backgroundColor : '#042361'
      }, headerTintColor: 'white' , headerTitleStyle : {
        fontWeight : 'bold'
      }}} />
    </Stack.Navigator>
  );
}


export default MyStack;