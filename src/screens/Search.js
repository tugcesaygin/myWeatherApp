import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'


import { SafeAreaView } from 'react-native-safe-area-context'

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



export default Search