import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'

const CurrentWeather = () => {
  const {
    wrapper,
    container,
    icon,
    temp,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message
  } = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather style={icon} name="sun" size={100} color="black" />
        <Text>Current Weather</Text>
        <Text style={temp}> 6</Text>
        <Text style={feels}> Feels like 5</Text>
        <RowText
          messageOne={'hight : 8'}
          messageTwo={'Low : 6'}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={'It is sunny.'}
        messageTwo={'Perfect t-shirt weather'}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
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
