import { View, Text, Image , StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import logInImg from '../../assets/images/login_img.png'
import Colors from '../../utils/Colors'
import { client } from '../../utils/KindeConfig'
import services from '../../utils/services'
import { useRouter } from 'expo-router'

export default function LoginScreen() {

  const router = useRouter()

  const handleSignIn = async () => {
    const token = await client.login();
    if (token) {
      // User was authenticated
      await services.storeData('login', 'true')
      router.replace('/')
    }
  };

  


  return (
    <View style={{
      display : 'flex',
      alignItems : 'center'
    }}>
      <Image source={logInImg}
        style={styles.bgImage}
       />

      <View style={{
        backgroundColor : Colors.PRIMARY,
        width : '100%',
        height : '100%',
        padding : 20,
        marginTop : -30,
        borderTopLeftRadius : 30,
        borderTopRightRadius : 30
      }}>
          <Text
          style={{
            fontSize : 25,
            fontWeight : 'bold',
            textAlign : 'center',
            color : Colors.WHITE
          }}
          >Your Budget Planner</Text>

          <Text style ={{
            fontSize : 16,
            textAlign : 'center',
            color  : Colors.WHITE,
            marginTop : 20,
          }}>
            Stay on Track , Event by Event : Your Personal Budget Planner app!
          </Text>

          <TouchableOpacity style={styles.button}
          onPress={handleSignIn}>
            <Text style={{
              textAlign : 'center',
              color : Colors.PRIMARY
              }}> Login/Signup</Text>
          </TouchableOpacity>

          <Text style={{fontSize : 13, color : Colors.GRAY, marginTop : 10 }}>By login/signup you aggree to your terms and condition</Text>


      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  bgImage : {
    width : 200,
    height : 400,
    marginTop : 70,
    borderWidth : 8,
    borderRadius : 20,
    borderColor : Colors.BLACK

   

  },

  button : {
    backgroundColor : Colors.WHITE,
    padding : 8,
    paddingHorizontal : 5,
    borderRadius : 99,
    marginTop : 30


  }
})