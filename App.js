import React, { useState , useEffect} from 'react'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'
import Tabs from './src/components/Tabs'
import { useGetWeather } from './src/hooks/useGetWeather'
import{View ,ActivityIndicator , StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import FavoriteCities from './src/screens/FavoriteCities'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CurrentWeather from './src/screens/CurrentWeather'
import UpcomingWeather from './src/screens/UpcomingWeather'
import City from './src/screens/City'
import Search from './src/screens/Search'
import Home from './src/screens/Home'
const App = () => {
 
 const [loading, error, weather] = useGetWeather()
 console.log(loading, error,weather)
 const Tab = createBottomTabNavigator();


  if (weather){
    //console.log("Hava Durumu Geldi:", weather);
    console.log(WEATHER_API_KEY)
  }

  if (loading){
    return(
      <View style = {styles.container}>
        <ActivityIndicator size = {'large'} color= {'#FEA1A1'}/>
      </View>
    )
  }


  return (
    <NavigationContainer>
    
       <Home/>

    </NavigationContainer>
  )

}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    flex: 1
  }
})
export default App

