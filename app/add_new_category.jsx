import { View, Text, StyleSheet,TextInput } from 'react-native'
import React, { useState } from 'react'
import Colors from '../utils/Colors'
import ColorPicker from '../components/ColorPicker'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const AddNewCategory = () => {

    const [selectedIcon, setSelectedIcon] = useState('ic')
    const [selectedColor, setSelectedColor] = useState(Colors.PRIMARY)
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
        <TextInput placeholder='Category Name' style={{width : '100%'}}/>
      </View>
     
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

    }
})