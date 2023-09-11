import React from "react"
import { SafeAreaView, StyleSheet, View, Text, Image} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native';
import FavoriteCities from "./FavoriteCities";
import { weatherType } from '../utilities/weatherType'

const Home = ({weatherData}) => {

    const { name,
        main: { temp, feels_like, humidity },
        weather,
        wind: { speed } 
    } = weatherData;
    const {
  
        homeCityLabel,

      } = styles
    
    
    const weatherCondition = weather[0].main

    console.log(weatherData);

    return (
        <LinearGradient
            colors={['#042361', '#074B79', '#0C849C', '#0E99A9']}
            style={styles.safeAreaGradient}
            start={{ x: 1, y: 0.2 }}
            end={{ x: 0.6, y: 0.8 }}
        >
            <SafeAreaView style={styles.container}>

                <View style={styles.homeHeader}>
                    <Text style={styles.homeText}>Good Night , Tuğçe</Text>
                    <Image source={require('../../assets/moon-2.png')} style={{ width: 45, height: 45 }} />
                </View>

                <View style={styles.homeCityContainer}>

                    <View style={styles.homeCityDetails}>
                        <Text style={styles.homeCityLabel}>{name}</Text>
                        <Image source={require('../../assets/night-storm.png')} style={{ width: 80, height: 80 }} />
                    </View>

                    <View style={styles.homeTempreture}>
                        <Text style={styles.homeTempretureDegree}>{temp}°C</Text>
                        <View style={styles.homeTempretureDetail}>
                            <Text style={styles.feelsLike}>Feels like</Text>
                            <Text style={styles.feelsLikeDegree}>{feels_like} °C</Text>
                        </View>

                    </View>
                </View>

              
                <View style={styles.citySituation}>
                    <View style={styles.cityDetails}>
                        <Text style={styles.cardDetailsSituation}>Wind</Text>
                        <Text style={styles.cardDetailsSituationThing}>{`${speed} km/h`}</Text>
                    </View>
                  
                    <View style={styles.cityDetails}>
                        <Text style={styles.cardDetailsSituation}>Humidith</Text>
                        <Text style={styles.cardDetailsSituationThing}>%{`${humidity}`}</Text>
                    </View>

                </View>

                <View style={styles.bottomHeader}>

                    <Image source={require('../../assets/night-wind.png')} style={{ width: 40, height: 40 }} />
                    <Image source={require('../../assets/night-storm.png')} style={{ width: 40, height: 40 }} />
                    <Text style={styles.bottomHeaderText}>monday 20, march</Text>
                    <Image source={require('../../assets/snow-cloud.png')} style={{ width: 40, height: 40 }} />
                    <Image source={require('../../assets/cloudy.png')} style={{ width: 40, height: 40 }} />

                </View>

            </SafeAreaView>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({

    safeAreaGradient: {
        flex: 1,
    },

    homeButton: {
        backgroundColor: '#1A6893',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
        alignSelf: 'center',
    },

    homeButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },


    homeText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 32,

    },

    homeCityContainer: {
        margin: 60
    },

    homeCityDetails: {
        alignItems: 'center',
        paddingBottom: 20
    },


    homeHeader: {
        flexDirection: 'row',
        marginTop: 50,
        marginLeft: 20,
        justifyContent: 'center'
    },

    homeTempreture: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft : 40,
        marginRight : 40
    },

    homeCityLabel: {
        fontSize: 26,
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        paddingBottom: 20

    },

    homeTempretureDetail: {
        paddingLeft: 20,
        paddingTop: 20
    },

    homeTempretureDegree: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
       paddingTop : 20

    },

    feelsLike: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,

    },

    feelsLikeDegree: {
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
        paddingTop: 3
    },

    moreCitiesButton: {
        backgroundColor: 'white'
    },

    citySituation: {
        flexDirection: 'row',
        paddingTop: 10,
        justifyContent : 'space-between', 
        marginLeft : 40,
        marginRight : 40

    },

    cardDetailsSituation: {
        color: '#F4F2F2',
        justifyContent: 'center',
        marginLeft : 40,
        marginRight: 40,
        marginTop: 20
    },

    cardDetailsSituationThing: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'

    },

    cityDetails: {
        alignItems: 'center'
    },

    bottomHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 40
    },

    bottomHeaderText: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center'
    }

})


export default Home