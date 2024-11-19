import { View, Text, StyleSheet,TextInput, Touchable, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import Colors from '../utils/Colors'
import ColorPicker from '../components/ColorPicker'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import {client} from './../utils/KindeConfig.jsx'

import {supabase} from './../utils/SupabaseConfig.jsx'

const AddNewCategory = () => {

    const [selectedIcon, setSelectedIcon] = useState('ic')
    const [selectedColor, setSelectedColor] = useState(Colors.PRIMARY)
    const [categoryName, setCategoryName] = useState();
    const [totalBudget, setTotalBudget] = useState();

    const onCreateCategory = async () => {
   
      
      try{
        const user = await client.getUserDetails();
          const {data, error} = await supabase.from('Category')
        .insert([{
          name : categoryName,
          assigned_budget : totalBudget,
          icon : selectedIcon,
          color : selectedColor,
          created_by : user.email

        }]).select();
        console.log(data);
        if(data)
        {
          ToastAndroid.show('Category Created!', ToastAndroid.SHORT)
        }

      }catch(err){
        console.log(err)
      }
      
    }


  return (
    <View style={{
        marginTop : 30,
        padding : 10
    }}>
      <View
       style={{
        justifyContent : 'center',
        alignItems : 'center'
       }}
      >
        <TextInput
         style={[styles.iconInput, {backgroundColor : selectedColor}]}
         maxLength={2}
         onChangeText={(value) => setSelectedIcon(value)}
        >
            {selectedIcon}
        </TextInput>

        <ColorPicker 
          selectedColor ={selectedColor}
          setSelectedColor ={(color) => setSelectedColor(color)}
      />
      </View>
       {/* Add category Name and total Budget section */}

       <View style={styles.inputView}>
        <FontAwesome5 name="tags" size={24} color={Colors.GRAY} />
        <TextInput 
        placeholder='Category Name' 
        style={{width : '100%', fontSize : 17}}
        onChangeText={(v) => setCategoryName(v)}
        />
      </View>

      <View style={styles.inputView}>  
        <FontAwesome name="dollar" size={24} color={Colors.GRAY} />
        <TextInput 
        keyboardType='numeric' 
        placeholder='Total Budget' 
        style={{width : '100%', fontSize : 17}}
        onChangeText={(v) => setTotalBudget(v)}
        />
      </View>

      <TouchableOpacity 
      style={styles.button}
      disabled={!categoryName && !totalBudget}
      onPress={() => onCreateCategory()}
      >
        <Text style={{
          textAlign : 'center',
          fontSize : 16,
          color : Colors.WHITE
        }}>Create</Text>
      </TouchableOpacity>
     
    </View>


  )
}

export default AddNewCategory

const styles = StyleSheet.create({
    iconInput : {
        textAlign : 'center',
        fontSize : 30,
        padding : 20,
        borderRadius : 99,
        paddingHorizontal : 25,
        color : Colors.WHITE

        
    },

    inputView : {
      borderWidth : 1,
      display : 'flex',
      flexDirection : 'row',
      gap : 2,
      padding : 14,
      borderRadius : 10,
      borderColor : Colors.GRAY,
      backgroundColor : Colors.WHITE,
      alignItems : 'center',
      marginTop : 25,

    },

    button : {
      backgroundColor : Colors.PRIMARY,
      padding : 15,
      borderRadius : 50,
      marginTop : 30
    }
})