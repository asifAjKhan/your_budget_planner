import { View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import {supabase} from '../utils/SupabaseConfig'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import CourseInfo from '../components/CourseDetail/CourseInfo';
import CourseItemList from '../components/CourseDetail/CourseItemList';



const categoryDetail = () => {
    const {categoryId} = useLocalSearchParams();
    const [categoryData, setCategoryData] = useState([]);

    const router = useRouter()
    

    useEffect(() => {
        console.log(categoryId)
        categoryId&&getCategoryDetail();
    }, [categoryId])


    const getCategoryDetail = async () => {
      try{
        const {data, error} = await supabase.from('Category')
        .select('*,CategoryItems(*)')
        .eq('id', categoryId)

        setCategoryData(data[0]);

        console.log("cat : ", data[0])


      }catch(err){
        console.log(err)
      }
        
    }

  return (
    <View style={{
      padding : 20,
      marginTop : 20

    }}>
      <TouchableOpacity onPress={() => router.back()}>
        <EvilIcons name="arrow-left" size={44} color="black" />
      </TouchableOpacity>
      <CourseInfo categoryData={categoryData} />
      <CourseItemList categoryData={categoryData} />
    </View>
  )
}

export default categoryDetail


