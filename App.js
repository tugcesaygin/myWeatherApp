import React, { useState , useEffect} from 'react'
import { View , ActivityIndicator, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/navigation/Tabs'
import Counter from './src/demonstration/Counter' // youtube dan bul bunu
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'
import FavoriteCities from './src/screens/FavoriteCities'
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}


const App = () => {
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState(null)
  const [error,setError] = useState(null)
  const [weather,setWeather] = useState([])

  const [lat,setLat] = useState()
  const [lon,setLon] = useState()


const fetchWeather = async () => {
  try{
    const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
    const data = await res.json();
    setWeather(data);
  } catch (err){
    setError('Hava durumu oluşturulamadı!');
  } finally{
    setLoading(false);
  }  
}
  
  useEffect(() => {
    (async() =>  {   //we set this as a function
      let{ status } = await Location.requestForegroundPermissionsAsync();
      if (status!== 'granted'){
        setError('permission to access location was denied.')
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
      await fetchWeather();
    })();
  }, [lat, lon])


  if (weather){
    //console.log("Hava Durumu Geldi:", weather);
  }

  if (loading){
    return(
      <View style = {styles.container}>
        <ActivityIndicator size = {'large'} color= {'#FEA1A1'}/>
      </View>
    )
  }


  return (
    <NavigationContainer>
     <FavoriteCities/>
    </NavigationContainer>
  )

}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    flex: 1
  }
})
export default App

