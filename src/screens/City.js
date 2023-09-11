import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  StatusBar
} from 'react-native'
import moment from 'moment'
import IconText from '../components/IconText'
import { LinearGradient } from 'expo-linear-gradient'

const City = ({weatherData}) => {

  const {
    countryName,
    container,
    cityName,
    populationWrapper,
    populationText,
    countryText,
    riseSetText,
    riseSetWrapper,
    rowLayout,
    imageLayout
  } = styles


  const { name , country, population, sunrise , sunset} = weatherData;
  return (
    <LinearGradient
    colors={['#042361', '#074B79', '#0C849C', '#0E99A9']}
    style={styles.safeAreaGradient}
    start={{ x: 1, y: 0.2 }}
    end={{ x: 0.6, y: 0.8 }}
    >
    <SafeAreaView style={container}>
        <Text style={[cityName, countryText]}>{name}</Text>
        <Text style={[countryName, countryText]}>{country}</Text>
        <View style={populationWrapper}>
          <IconText
            iconName={'user'}
            iconColor={'white'}
            bodyText={population}
            bodyTextStyles={[populationText, rowLayout]}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={moment(sunrise).format('h:mm:ss a')}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={moment(sunset).format('h:mm:ss a')}
            bodyTextStyles={riseSetText}
          />
        </View>
    </SafeAreaView>
    </LinearGradient>
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
  safeAreaGradient: {
    flex: 1,
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
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'white'
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    color: 'white'
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
export default City

