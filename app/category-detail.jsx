import { View,ScrollView, Text , StyleSheet, TouchableOpacity, Touchable} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, useLocalSearchParams, useRouter } from 'expo-router'
import {supabase} from '../utils/SupabaseConfig'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import CourseInfo from '../components/CourseDetail/CourseInfo';
import CourseItemList from '../components/CourseDetail/CourseItemList';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Colors from '../utils/Colors';

const categoryDetail = () => {
    const {categoryId} = useLocalSearchParams();
    const [categoryData, setCategoryData] = useState([]);

    const router = useRouter()
    

    useEffect(() => {
       // console.log(categoryId)
        categoryId&&getCategoryDetail();
    }, [categoryId])


    const getCategoryDetail = async () => {
      try{
        const {data, error} = await supabase.from('Category')
        .select('*,CategoryItems(*)')
        .eq('id', categoryId)

        setCategoryData(data[0]);

       // console.log("cat : ", data[0])


      }catch(err){
        console.log(err)
      }
        
    }

  return (
    <View style={{
      padding : 20,
      marginTop : 20,
      flex : 1,
      backgroundColor : Colors.WHITE,

    }}>
      <TouchableOpacity onPress={() => router.back()}>
        <EvilIcons name="arrow-left" size={44} color="black" />
      </TouchableOpacity>
      <CourseInfo categoryData={categoryData} />
      <CourseItemList categoryData={categoryData} />

      <Link 
      href={{
        pathname : '/add-new-category-item',
        params : {
          categoryId : categoryData.id
        }
      }}
      style={styles.floatingBtn}>
        <FontAwesome6 name="circle-plus" size={60} color={Colors.PRIMARY} />
      </Link>

    </View>
  )
}

export default categoryDetail

const styles = StyleSheet.create({
  floatingBtn : {
    position : 'absolute',
    bottom : 16,
    right : 16
  }
})


