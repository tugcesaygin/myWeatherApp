import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather style={styles.icon} name="sun" size={100} color="black" />
        <Text>Current Weather</Text>
        <Text style={styles.temp}> 6</Text>
        <Text style={styles.feels}> Feels like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High : 8</Text>
          <Text style={styles.highLow}>Low : 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}> It is sunny</Text>
        <Text style={styles.message}>It is perfect t-shirt weather</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFDBAA',
    flex: 1
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  temp: {
    color: 'black',
    fontSize: 48
  },

  feels: {
    fontSize: 30,
    color: 'black'
  },

  highLow: {
    color: 'black',
    fontSize: 20
  },

  highLowWrapper: {
    flexDirection: 'row'
  },

  bodyWrapper: {
    paddingLeft: 25,
    marginBottom: 40,
    alignItems: 'flex-start',
    justifyContent: 'flex-end' // this displays the bottom of the screen
  },

  description: {
    fontSize: 48
  },

  message: {
    fontSize: 30
  },

  icon: {
    color: '#E14D2A'
  }
})

export default CurrentWeather
