import { View, Text,ScrollView , StyleSheet, Image} from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors'


const CourseItemList = ({categoryData}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Item List</Text>

      <ScrollView style={{marginTop : 15}}>
        {categoryData?.CategoryItems?.length>0 ? categoryData?.CategoryItems?.map((item, index) => (
         <View key={index}>
            <View key={index} style={styles.itemContainer}>
               <Image source={{uri : item.Image}}  style={styles.image}/>
               <View style={{flex:1, marginLeft : 10}}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.url}>{item.url}</Text>
               </View>
               <Text style={styles.cost}>$ {item.cost}</Text>
            </View>

           {categoryData?.CategoryItems.length-1 !=index && 
           <View style={{borderWidth : 0.5, marginTop : 10, borderColor : Colors.GRAY}}></View>
           }

         </View>
        )):
        <Text style={styles.noItemText}>No Item Found</Text>
    
    }
      </ScrollView>

    </View>
  )
}

export default CourseItemList

const styles = StyleSheet.create({
    container : {
        marginTop : 20
    },
    heading : {
        fontWeight : 'bold',
        fontSize : 20
    },

    image : {
        width : 80,
        height : 80,
        backgroundColor : Colors.GRAY,
        borderRadius : 15,
        marginBottom : 5
        
    },

    itemContainer : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        marginTop : 10
    },

    name : {
        fontSize : 20,
        fontFamily : 'outfit-bold'
    },
    url : {
        fontFamily : 'outfit',
        color : Colors.GRAY
    },

    cost : {
        fontSize : 17,
        fontFamily : 'outfit-bold',
        marginLeft : 10,

    },

    noItemText : {
        fontFamily : 'outfit-bold',
        fontSize : 25,
        color : Colors.GRAY
    }
})