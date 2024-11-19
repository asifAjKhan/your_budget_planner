import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors'
import { useRouter } from 'expo-router'

const CategoryList = ({categoryList = []}) => {

  const router = useRouter()

  const onCategoryClick = (category) => {
    router.push({
      pathname : '/category-detail',
      params : {
        categoryId  : category.id
      }
    })
  }
    

    // {categoryList.map((category,index) => {
    //     console.log(category.icon)
    // })}
  return (
    <View>
      <Text style={{
        fontFamily : 'outfit-bold',
        fontSize : 25,
        marginTop : 20,
        marginBottom : 10
      }}>Latest Budget</Text>

      <View>
        {categoryList.map((category, index) => (
            <TouchableOpacity key={index} style={styles.container}
              onPress={() => onCategoryClick(category)}
            >
                <View style={styles.iconContainer}>
                    <Text style={[styles.iconText, {backgroundColor : category.color}]}>{category.icon}</Text>
                </View>
                <View style={styles.subContainer}>
                  <View>
                    <Text style={styles.categoryText}>{category.name}</Text>
                    <Text style={styles.itemCount}>{category?.CategoryItems?.length} Items</Text>
                  </View>
                  <Text style ={styles.totalAmountText}>$500</Text>
                </View>
            </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default CategoryList

const styles = StyleSheet.create({
    container : {
        marginBottom : 10,
        display : 'flex',
        flexDirection : 'row',
        gap : 7,
        alignItems : 'center',
        backgroundColor : Colors.WHITE,
        padding : 10,
        borderRadius : 15

    },

    iconText : {
        fontSize : 20,
        padding : 15,
        borderRadius : 15
    },

    iconContainer : {
        justifyContent : 'center',
        alignItems : 'baseline'
    },
    categoryText : {
      fontFamily : 'outfit-bold',
      fontSize : 20
    },
    itemCount : {
      fontFamily : 'outfit'
    },

    subContainer : {
      display : 'flex',
      flexDirection : 'row',
      alignItems : 'center',
      justifyContent : 'space-between',
      width : '70%'
    },

    totalAmountText : {
      fontFamily : 'outfit-bold',
      
    }
})