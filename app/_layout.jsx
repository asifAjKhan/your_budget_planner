import { View, Text } from 'react-native'
import React, { useCallback } from 'react';
import { Stack } from 'expo-router'


import { useFonts } from 'expo-font';




const HomeLayout = () => {




  const [fontsLoaded, fontsError] = useFonts({
    outfit: require('./../assets/fonts/Outfit-Regular.ttf'),
    outfit_medium : require('./../assets/fonts/Outfit-Medium.ttf'),
    outfit_bold : require('./../assets/fonts/Outfit-Bold.ttf')
  })


    // Hide splash screen once fonts are loaded
    // const onLayoutRootView = useCallback(async () => {
    //   if (fontsLoaded) {
    //     await SplashScreen.hideAsync();
    //   }
    // }, [fontsLoaded]);
  
    // if (!fontsLoaded) {
    //   console.log('fucked')
    //   return null; // Optionally render a loading spinner
    // }



  return (
    <Stack 
        screenOptions={{
            headerShown: false
        }}
    >

      <Stack.Screen name = '(tabs)'
        options={{
          headerShown : false
        }}
      />

    </Stack>
  )
}

export default HomeLayout