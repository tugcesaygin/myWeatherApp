import React from 'react'
import CityCard from '../components/CityCard'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  View,
  StatusBar,
  ImageBackground
} from 'react-native'
import ListItem from '../components/ListItem'
import { LinearGradient } from 'expo-linear-gradient'

const UpcomingWeather = ({weatherData}) => {
  const renderItem = ({ item }) => (
   
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )
  return (
    <LinearGradient
    colors={['#042361', '#074B79', '#0C849C', '#0E99A9']}
    style={styles.safeAreaGradient}
    start={{ x: 1, y: 0.2 }}
    end={{ x: 0.6, y: 0.8 }}
>
    <SafeAreaView style={styles.container}>

        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />

    </SafeAreaView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },

  temp: {
    color: 'white',
    fontSize: 20
  },
  date: {
    color: 'white',
    fontSize: 15
  },
  image: {
    flex: 1
  },
  safeAreaGradient: {
    flex: 1,
},
})

export default UpcomingWeather

