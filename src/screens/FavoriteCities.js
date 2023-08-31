import React, { useState } from 'react'
import { StyleSheet, ScrollView, SafeAreaView, View, Text, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import CityCard from '../components/CityCard'

const FavoriteCities = () => {

    const [data, setData] = useState([
        { id: 1, city: 'Los Angeles', temperature: '-10°C', imageSource: require('../../assets/night-storm.png') },
        { id: 2, city: 'Istanbul', temperature: '-5°C', imageSource: require('../../assets/snow-cloud.png') },
        { id: 2, city: 'Moscow', temperature: '-20°C', imageSource: require('../../assets/snowflake.png') },
        { id: 2, city: 'New York', temperature: '-5°C', imageSource: require('../../assets/night-wind.png') },
        { id: 2, city: 'Beirut', temperature: '6°C', imageSource: require('../../assets/snow-cloud.png') }


    ]);

    const renderListItem = item => (
        <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>

            <Text style={{ marginLeft: 10 }}>Los Angles</Text>
            <Text>-10°C</Text>
            <Image source={require('../../assets/snowy-night.png')} style={{ width: 40, height: 40 }} />
        </View>

    );



    return (
        <LinearGradient
            colors={['#042361', '#074B79', '#0C849C', '#0E99A9']}
            style={styles.safeAreaGradient}
            start={{ x: 1, y: 0.2 }}
            end={{ x: 0.6, y: 0.8 }}
        >
            <SafeAreaView style={styles.container}>

                <View style={styles.cardHeader}>
                    <Image source={require('../../assets/moon.png')} style={{ width: 30, height: 30 }} />
                    <Text style={styles.dayTitle}>monday 29 , march</Text>
                </View>
                <ScrollView style={styles.contentContainer}>
                    {data.map(item => (
                        <CityCard
                            key={item.id}
                            city={item.city}
                            temperature={item.temperature}
                            imageSource={item.imageSource}
                        />
                    ))}
                </ScrollView>

            </SafeAreaView>
        </LinearGradient>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    safeAreaGradient: {
        flex: 1,
    },
    contentContainer: {
        flexGrow: 1,
    },
    dayTitle: {
        paddingTop : 3 ,
        color: "white",
        fontSize : 16,
        fontWeight : 'bold',
        paddingLeft : 5

    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    }

})

export default FavoriteCities
