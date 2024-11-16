import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors'
import { TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-web'


const ColorPicker = ({selectedColor, setSelectedColor}) => {
  return (
    <View
     style={{
        display : 'flex',
        flexDirection : 'row',
        gap : 10,
        marginTop : 20,
        flexWrap : 'wrap',
        marginLeft : 10
        
     }}
    >
      {Colors.COLOR_LIST.map((color, index) =>(
        <TouchableOpacity 
        key={index}
        style={[{
            height : 30,
            width : 30,
            backgroundColor : color,
            borderRadius : 99
        }, selectedColor == color&& {borderWidth : 4}]}
         onPress={() => setSelectedColor(color)}
        >

        </TouchableOpacity>
      ))}

     
    </View>
  )
}

export default ColorPicker