import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'



const CityCard = ({ city, temperature, imageSource }) => (


    <View >
        <LinearGradient style={styles.cityCard}
            colors={['#042361', '#00000']}
            start={{ x: 1, y: 0 }}
            end={{ x: 0.5, y: 2 }}
        >

        <View style={styles.cityNameCard} >
            <Text style={styles.cardText}>{city}</Text>
            <Text style={styles.cardText}>{temperature}</Text>
            <Image source={imageSource} style={{ width: 40, height: 40 }} />
        </View>

        <View style={styles.cityDetails}>
            <Text style={styles.cardDetailsSituation}>Wind</Text>
            <Text style={styles.cardDetailsSituationThing}>9 km/h </Text>
        </View>
    </LinearGradient>
    </View >
    






)

const styles = StyleSheet.create({
    cityCard: {
        flexDirection: 'column',
        alignItems: 'stretch',
        padding: 10,
        backgroundColor: '#083D6F',
        borderRadius: 20,
        margin: 20,
    },

    cityNameCard: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    cardText: {
        marginLeft: 10,
        color: 'white',
        fontWeight: 'bold'
    },
    cityDetails: {

    },
    cardDetailsSituation: {
        color: '#DCDBDB',

    },
    cardDetailsSituationThing: {
        color: '#DCDBDB',
        fontSize: 16
    }
})
export default CityCard;
