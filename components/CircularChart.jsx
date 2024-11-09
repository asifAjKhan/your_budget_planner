import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import PieChart from 'react-native-pie-chart'
import Colors from '../utils/Colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const CircularChart = () => {

    const widthAndHeight = 150
    const [values, setValues] = useState([1]);
    const [sliceColor, setSliceColor] = useState([Colors.GRAY])
    



  return (
    <View style={Styles.container}>
      <Text
       style ={{
        fontSize : 20,
        fontFamily : 'outfit_bold'

       }}
      >Total Estimate : <Text style={{fontWeight : 'bold'}}>0$</Text></Text>
      <View
       style={Styles.subContainer}
      >
        <PieChart
            widthAndHeight={widthAndHeight}
            series={values}
            sliceColor={sliceColor}
            coverRadius={0.75}
            coverFill={'#FFF'}
          />

          <View style={{
            display : 'flex',
            flexDirection : 'row',
            gap : 5,
            alignItems : 'center'
          }}>

             <MaterialCommunityIcons 
                name="checkbox-blank-circle" 
                size={24} 
                color={Colors.GRAY} 
             />

             <Text>NA</Text>

          </View>
      </View>
    </View>
  )
}


const Styles = StyleSheet.create({
    container : {
        marginTop : 20,
        backgroundColor : Colors.WHITE,
        padding : 20,
        borderRadius : 15,
        elevation : 20

    },

    subContainer : {
        marginTop : 10,
        display : 'flex',
        flexDirection : 'row',
        gap : 40
    }
})

export default CircularChart