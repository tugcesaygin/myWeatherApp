import React, { useState } from 'react'
import { StyleSheet, ScrollView, SafeAreaView, View, Text, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'





const FavoriteCities = () => {
    const [data, setData] = useState([
        { id: 1, text: 'Öğe 1' },
        { id: 2, text: 'Öğe 2' },
        { id: 2, text: 'Öğe 2' },
        { id: 2, text: 'Öğe 2' },
        { id: 2, text: 'Öğe 2' },


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
                start = {{x: 0, y:0}}
                end = {{x:1 , y:1}}
            >
                <Image source={require('../../assets/moon-icon.png')} style={{ width: 25, height: 25 }} />
                <Text style = {styles.dayTitle}>monday 29 , march</Text>
                <ScrollView style={styles.contentContainer}>
                    {data.map(renderListItem)}
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
    dayTitle : {
        fontFamily : 'SF Pro Regular',
        color: "white"
        
    }

})

export default FavoriteCities
