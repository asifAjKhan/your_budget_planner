import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { client } from '../utils/KindeConfig'
import Colors from '../utils/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';



const Header = () => {


    useEffect(() => {
        getUserData()
    }, []);

    const [user, setUser] = useState();

    const getUserData = async () => {
        const user = await client.getUserDetails();
        setUser(user);
    }

    
  return (
    <View
     style ={{
        display : 'flex',
        flexDirection : 'row',
        gap : 8,
        alignItems : 'center'
     }}
    >
       <Image source={{uri:user?.picture}}  
        style={{
            backgroundColor : 'red',
            width : 50,
            height : 50,
            borderRadius : 99,
        }}
       />


       <View 
            style={{
                display : 'flex',
                flexDirection : 'row',
                alignItems : 'center',
                justifyContent : 'space-between',
                width : '85%'
            }}
       >
            <View>
                <Text style={{color : Colors.WHITE, fontSize : 16, fontFamily : 'outfit'}}>Welcome</Text>
                <Text style={{color : Colors.WHITE, fontSize : 20, fontFamily : 'outfit_bold' }}>{user?.given_name}</Text>
            </View>
            <FontAwesome name="bell" size={24} color='white' />
       </View>
    </View>
  )
}

export default Header