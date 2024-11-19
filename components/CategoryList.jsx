import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CategoryList = ({categoryList = []}) => {
    

    // {categoryList.map((category,index) => {
    //     console.log(category.icon)
    // })}
  return (
    <View>
      <Text style={{
        fontFamily : 'outfit-bold',
        fontSize : 20
      }}>Latest Budget</Text>

      <View>
        {categoryList.map((category, index) => (
            <View key={index} style={styles.container}>
                <View style={styles.iconContainer}>
                    <Text style={[styles.iconText, {backgroundColor : category.color}]}>{category.icon}</Text>
                </View>
            </View>
        ))}
      </View>
    </View>
  )
}

export default CategoryList

const styles = StyleSheet.create({
    container : {
        marginBottom : 10
    },

    iconText : {
        fontSize : 35,
        padding : 15,
        borderRadius : 15
    },

    iconContainer : {
        justifyContent : 'center',
        alignItems : 'baseline'
    }
})