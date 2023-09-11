import React from 'react'
import { StyleSheet, SafeAreaView, Text,View , FlatList,Platform,ActivityIndicator } from 'react-native'
import { SearchBar } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient'
import 'react-native-gesture-handler'

const Search = () => {
    return (
        <LinearGradient
            colors={['#042361', '#074B79', '#0C849C', '#0E99A9']}
            style={styles.safeAreaGradient}
            start={{ x: 1, y: 0.2 }}
        >
            <SafeAreaView>

            </SafeAreaView>

        </LinearGradient >
    )
}



const styles = StyleSheet.create({
    safeAreaGradient: {
        flex: 1,
    }
})



export default Search