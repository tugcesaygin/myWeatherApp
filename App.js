import React, { useState , useEffect} from 'react'
import { WEATHER_API_KEY } from '@env'
import { useGetWeather } from './src/hooks/useGetWeather'
import{View ,ActivityIndicator , StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/navigation/Tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MyStack from './src/navigation/MyStack'

const App = () => {
 
 const [loading, error, weather] = useGetWeather()
 console.log(loading, error,weather)
 const Tab = createBottomTabNavigator();


  if (weather){
    console.log(WEATHER_API_KEY)
  }

  if (weather && weather.list){
    return (
      <NavigationContainer>
      
         <Tabs weather={weather}/>
  
      </NavigationContainer>
    )
  }

    return(
      <View style = {styles.container}>
        <ActivityIndicator size = {'large'} color= {'#FEA1A1'}/>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    flex: 1
  }
})
export default App

