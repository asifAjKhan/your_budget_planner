import { View, Text, StyleSheet,TextInput } from 'react-native'
import React, { useState } from 'react'
import Colors from '../utils/Colors'
import ColorPicker from '../components/ColorPicker'


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
      </View>
      <ColorPicker 
       selectedColor ={selectedColor}
       setSelectedColor ={(color) => setSelectedColor(color)}
      />
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

        
    }
})