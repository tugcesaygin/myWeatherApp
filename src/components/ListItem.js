import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import moment from 'moment'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType'
import { LinearGradient } from 'expo-linear-gradient'
const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props
    const { item, date, temp, dateTextWrapper } = styles
    return (
        <LinearGradient style={styles.cityCard}
            colors={['transparent', 'rgba(255,255,255,0.2)']}
            start={{ x: 0.5, y: 2 }}
            end={{ x: 0.4, y: 0.5 }}
        >
            <View style={item}>
                <Feather name={weatherType[condition]?.icon} size={50} color={'white'} />
                <View style={dateTextWrapper}>
                    <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
                    <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
                </View>
                <Text style={temp}>{`${Math.round(min)}° / ${Math.round(max)}°`}</Text>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderRadius: 20,
        margin: 15,
        shadowColor: 'white',
        shadowOpacity: 0.2
    },
    temp: {
        color: 'white',
        fontSize: 20
    },
    date: {
        color: 'white',
        fontSize: 15
    },
    dateTextWrapper: {
        flexDirection: 'column'
    },
    cityCard : {
        margin : 20,
        borderRadius: 20,
    }
})
export default ListItem