import React from 'react';
import AppLoading   from 'expo-app-loading';


import Routes from './src/routes';
import {
  Jost_400Regular,
  Jost_600SemiBold, useFonts
} from '@expo-google-fonts/jost';

export default function App() {

  let [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

if(!fontsLoaded)
  return <AppLoading/>
 

  return (
    
    <Routes/>
    
  )
}

