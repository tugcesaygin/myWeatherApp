import React, { useState , useEffect} from 'react'
import { View , ActivityIndicator, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from '../navigation/Tabs'
import Counter from '../components/Tabs'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'
import FavoriteCities from '../hooks/useGetWeather'
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}


export const useGetWeather = () => {
    const [loading, setLoading] = useState(false)
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
    return[loading, error, weather]
}