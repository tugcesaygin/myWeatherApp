import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'



const CityCard = ({ city, temperature, imageSource }) => (


    <View >
        <LinearGradient style={styles.cityCard}
            colors={['transparent', 'rgba(255,255,255,0.1)']}
            start={{ x: 0.5, y: 3 }}
            end={{ x: 0.4, y: 0.5 }}
        >

            <View style={styles.cityNameCard} >
                <Text style={styles.cardText}>{city}</Text>
                <Text style={styles.cardText}>{temperature}</Text>
                <Image source={imageSource} style={{ width: 40, height: 40 }} />
            </View>

            <View style = {styles.citySituation}>
                <View style={styles.cityDetails}>
                    <Text style={styles.cardDetailsSituation}>Wind</Text>
                    <Text style={styles.cardDetailsSituationThing}>9 km/h </Text>
                </View>
                <View style={styles.cityDetails}>
                    <Text style={styles.cardDetailsSituation}>Rain</Text>
                    <Text style={styles.cardDetailsSituationThing}> %3 </Text>
                </View>
                <View style={styles.cityDetails}>
                    <Text style={styles.cardDetailsSituation}>Humidith</Text>
                    <Text style={styles.cardDetailsSituationThing}> %60 </Text>
                </View>
            
            </View>
        </LinearGradient>
    </View >


)

const styles = StyleSheet.create({
    cityCard: {
        flexDirection: 'column',
        alignItems: 'stretch',
        padding: 20,
        borderRadius: 20,
        margin: 20,
        shadowColor: 'white',
        shadowOpacity: 0.2
    },

    cityNameCard: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    cardText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 19
    },
    cityDetails: {

    },
    cardDetailsSituation: {
        color: '#DCDBDB',

    },
    cardDetailsSituationThing: {
        color: '#DCDBDB',
        fontSize: 18
    },
    citySituation  :{
        flexDirection : 'row',
        justifyContent: 'space-between', 
        paddingTop : 10
    }
})
export default CityCard;
