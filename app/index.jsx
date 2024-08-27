import { View, Text } from 'react-native'
import React from 'react'
import services from '../utils/services'

export default function Home() {
    /*
    Used to check user is already auth or not
    */

    const checkUserAuth = async () => {
        const result = await services.getData('login');
        
        if (result !== 'true'){
            
        }
    }
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}