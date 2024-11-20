import { View, Text, StyleSheet, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Colors from '../../utils/Colors';


const CourseInfo = ({categoryData}) => {

    const [totalCost, setTotalCost] = useState();
    const [percTotal, setPercTotal] = useState(0);

    useEffect(() => {
        categoryData&&calculateTotalPerc();
    },[categoryData])


    const calculateTotalPerc = () => {
        let total = 0;
        categoryData?.CategoryItems?.forEach(item => {
            total = total + item.cost;
        })

        setTotalCost(total)
        //console.log("total ", total)

        const perc = (total / categoryData.assigned_budget)*100;
        setPercTotal(perc);
       // console.log(perc)
    }

   
  return (
   <View>
        <View style={styles.container}>
        <View style={styles.iconContainer}>
            <Text style={[styles.textIcon, {backgroundColor : categoryData.color}]}>{categoryData.icon}</Text>
        </View>

        <View style={{flex : 1,marginLeft : 20}}>
            <Text style={styles.categoryName}>{categoryData?.name}</Text>
            <Text style={styles.categoryItemText}>{categoryData?.CategoryItems?.length} Item</Text>
        </View>

        <FontAwesome5 name="trash" size={24} color="red" />
        </View>

        {/* Progress Bar */}

        <View style={styles.amountContainer}>
            <Text>${totalCost}</Text>
            <Text>Total Budget: {categoryData.assigned_budget}</Text>
        </View>

        <View style={styles.progressBarMainContainer}>
            <View style={[styles.progressBarSubContainer, {width : percTotal+'%'}]}>

            </View>
        </View>
   </View>
  )
}

export default CourseInfo

const styles = StyleSheet.create({

    container : {
        marginTop : 20,
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },

    textIcon : {
      fontSize : 25,
      padding : 20,
      borderRadius : 15

    },

    iconContainer : {
        justifyContent : 'center',
        alignItems : 'baseline'
    },

    categoryName : {
        fontFamily : 'outfit-bold',
        fontWeight : '800',
        fontSize : 24
    },

    categoryItemText : {
        fontFamily : 'outfit',
        fontSize : 16
    },

    amountContainer : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        width : '95%',
        marginTop : 10,
        
    },

    progressBarMainContainer : {
        width : '100%',
        height : 15,
        backgroundColor : Colors.GRAY,
        borderRadius : 99,
        marginTop : 7
    },

    progressBarSubContainer : {
        width : '40%',
        backgroundColor : Colors.PRIMARY,
        borderRadius : 99,
        height : 15
    }

   
  })