import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';



const CityCard = ({ city, temperature , imageSource}) => (
   
   
        
        <View style={styles.cityCard}>
            <Text style={styles.cardText}>{city}</Text>
            <Text style={styles.cardText}>{temperature}</Text>
            <Image source={imageSource} style={{ width: 40, height: 40 }} />
        </View>

    

)

const styles = StyleSheet.create({
    cityCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor : '#083D6F',
        borderRadius : 20,
        margin: 20,
        justifyContent: 'space-between'
        

    },
    cardText : {
        marginLeft: 10 ,
        color: 'white',
        fontWeight: 'bold'
    }
})
export default CityCard;
