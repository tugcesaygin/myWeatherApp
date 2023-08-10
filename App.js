import React from 'react'
import { View, StyleSheet } from 'react-native'
import CurrentWeather from './src/components/CurrentWeather'
import UpcomingWeather from './src/components/UpcomingWeather'
import OurChild from './src/components/OurChild'

const App = () => {
  return (
    <View style={styles.container}>
      <OurChild message={'hello'} />
      <OurChild message={'greetings'} />
      <OurChild message={'bye'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App
