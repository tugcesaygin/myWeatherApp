import React, { useState } from 'react'
import { StyleSheet, ScrollView, SafeAreaView, View, Text, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import CityCard from '../components/CityCard'

const FavoriteCities = () => {

    const [data, setData] = useState([
        { id: 1, city: 'Los Angeles', temperature: '-10°C', imageSource: require('../../assets/snowy-night.png')},
        { id: 2, city: 'New York', temperature: '-5°C', imageSource: require('../../assets/snowy-night.png')},
        { id: 2, city: 'Moscow', temperature: '-20°C', imageSource: require('../../assets/snowy-night.png')},


    ]);

    const renderListItem = item => (
        <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>

            <Text style={{ marginLeft: 10 }}>Los Angles</Text>
            <Text>-10°C</Text>
            <Image source={require('../../assets/snowy-night.png')} style={{ width: 40, height: 40 }} />
        </View>

    );



    return (

        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={['#042361', '#15E1D5']}
                style={styles.safeAreaGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <Image source={require('../../assets/moon.png')} style={{ width: 25, height: 25 }} />
                <Text style={styles.dayTitle}>monday 29 , march</Text>
               
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
            </LinearGradient>
        </SafeAreaView>

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

        color: "white"

    }

})

export default FavoriteCities
