import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import services from '../utils/services'
import {useRouter} from 'expo-router'
import { Button } from 'react-native-web'


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
  return (
    <View>
      <Text>Home</Text>
      
    </View>
  )
}