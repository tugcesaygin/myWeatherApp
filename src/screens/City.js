import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  StatusBar
} from 'react-native'
import { Feather } from '@expo/vector-icons'

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/seoul.jpg')}
        style={styles.imageLayout}
      >
        <Text style={[styles.cityName, styles.countryText]}>Seoul</Text>
        <Text style={[styles.countryName, styles.countryText]}>
          South Korea
        </Text>
        <View style={styles.populationWrapper}>
          <Feather name={'user'} size={50} color={'blue'} />
          <Text style={styles.populationText}>8000</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  imageLayout: {
    flex: 1
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  countryText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  populationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'blue',
    fontWeight: 'bold'
  }
})
export default City
