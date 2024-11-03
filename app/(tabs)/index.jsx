import { View, Text, Pressable, Touchable, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import services from './../../utils/services'
import {useRouter} from 'expo-router'
import { Button } from 'react-native-web'
import { client } from './../../utils/KindeConfig'
import { TouchableOpacity } from 'react-native'


export default function Home() {

  const router = useRouter()

    /*
    Used to check user is already auth or not
    */

    useEffect(() => {
      checkUserAuth();
    }, [])

    const checkUserAuth = async () => {
        const result = await services.getData('login');
        
        if (result !== 'true'){
            router.push('/login')
        }
    }


    const handleLogout = async () => {
      const loggedOut = await client.logout();
      if (loggedOut) {
  
        await services.storeData('login', 'false');
        router.replace('/login');
        // User was logged out
      }
    };



  return (
    <View style={styles.container}>
      <Text>Home</Text>
      
      <TouchableOpacity 
         onPress={handleLogout} 
      >
        <Text style={styles.button}>Logout</Text>
      </TouchableOpacity >
      
    </View>
  )
}

const styles = StyleSheet.create({

  container : {
    marginTop : 30,
  },

  button : {
    backgroundColor : 'green',
    padding : 10
  }

})