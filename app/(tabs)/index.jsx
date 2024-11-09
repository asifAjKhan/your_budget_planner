import { View, Text, Pressable, Touchable, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import services from './../../utils/services'
import {useRouter} from 'expo-router'
import { Button } from 'react-native-web'
import { client } from './../../utils/KindeConfig'
import { TouchableOpacity } from 'react-native'
import {supabase} from '../../utils/SupabaseConfig'
import Header from '../../components/Header'
import Colors from '../../utils/Colors'
import CircularChart from '../../components/CircularChart'


export default function Home() {

  const router = useRouter()

    /*
    Used to check user is already auth or not
    */

    useEffect(() => {
      checkUserAuth();
      getCategoryList();
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

   const getCategoryList = async () => {

    const user = await client.getUserDetails();
    const {data, error} = await supabase.from('Category')
    .select('*')
    .eq('created_by', user.email)

    console.log("data", data)

   } 



  return (
    <View style={styles.container}>
      
      
      <Header />
      <CircularChart />
      
    </View>
  )
}

const styles = StyleSheet.create({

  container : {
    marginTop : 30,
    padding : 20,
    backgroundColor : Colors.PRIMARY,
    height : 150
  },

  button : {
    backgroundColor : 'green',
    padding : 10
  }

})