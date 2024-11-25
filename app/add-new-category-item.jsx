import {
   View,
   ScrollView, 
   Text, StyleSheet,
   Image, TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    ToastAndroid
  } from 'react-native'
import React, { useState } from 'react'
import Colors from '../utils/Colors'

import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';

import { decode } from 'base64-arraybuffer';
import {supabase} from './../utils/SupabaseConfig'
import { useLocalSearchParams, useRouter } from 'expo-router';







const AddNewCategoryItem = () => {

  const placeholder = 'https://st.depositphotos.com/4058993/60405/i/450/depositphotos_604056392-stock-photo-happy-faces-ball-yellow-background.jpg'
  const [image, setImage] = useState(placeholder)
  const {categoryId} = useLocalSearchParams();
  const [previewImage, setPreviewImage] = useState(placeholder)
  const [name, setName] = useState()
  const [url, setUrl] = useState()
  const [cost, setCost] = useState()
  const [note, setNote] = useState()

  const router = useRouter()


  const onImagePick = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64 : true
    });

   // console.log(result)

    if(!result.canceled){
      setImage(result.assets[0].base64)
      setPreviewImage(result.assets[0].uri)
    }
  }

  const onClickAdd = async () => {

    const fileName = Date.now();
      const { data, error } = await supabase
      .storage
      .from('images')
      .upload(fileName+'.png', decode(image), {
        contentType : 'image/png'
      })

      if(data){

        const fileUrl = "https://bkpywesqgnhsjkafezqy.supabase.co/storage/v1/object/public/images/"+fileName+".png"
       // console.log(fileUrl)

       const {data, error} = await supabase
       .from('CategoryItems')
       .insert([{
         name : name,
         cost : cost,
         url : url,
         Image : fileUrl,
         note : note,
         category_id : categoryId
       }]).select()

       ToastAndroid.show('New Item Added!', ToastAndroid.SHORT)

       console.log(data)
       router.replace({
        pathname : '/category-detail',
        params : {
          categoryId  : categoryId
        }
      })

       
      }


      console.log("File Upload")

  }




  return (

    <KeyboardAvoidingView>
      <ScrollView style={{padding : 20, backgroundColor : Colors.WHITE}}>
        <TouchableOpacity onPress={() => onImagePick()} >
          <Image source={{uri : previewImage}}
            style={styles.image}
          />
        </TouchableOpacity>

        <View style={styles.textInputContainer}>
          <FontAwesome name="tag" size={24} color={Colors.GRAY} />  
          <TextInput onChangeText={(value) => setName(value)} placeholder='Item name' style={styles.input} />
        </View>

        <View style={styles.textInputContainer}>
        <FontAwesome name="dollar" size={24} color={Colors.GRAY}/> 
          <TextInput onChangeText={(value) => setCost(value)} keyboardType='number-pad' placeholder='Cost' style={styles.input} />
        </View>

        <View style={styles.textInputContainer}>
        <FontAwesome name="link" size={24} color={Colors.GRAY} /> 
          <TextInput onChangeText={(value) => setUrl(value)}  placeholder='Url' style={styles.input} />
        </View>

        <View style={styles.textInputContainer}>
        <FontAwesome name="sticky-note" size={24} color={Colors.GRAY} />  
          <TextInput onChangeText={(value) => setNote(value)} placeholder='Note' style={styles.input} 
          numberOfLines={3}
          />
        </View>

        <TouchableOpacity 
        style={styles.button} 
        disabled={!name || !cost}
        onPress={() => onClickAdd()}
        >
          <Text style={{textAlign : 'center', fontWeight : 'bold', color: Colors.WHITE}}>Add</Text>
        </TouchableOpacity>


      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default AddNewCategoryItem

const styles = StyleSheet.create({
  image : {
    width : 150,
    height : 150,
    backgroundColor : Colors.GRAY,
    borderRadius : 15
  }, 

  textInputContainer : {
    padding : 10,
    borderWidth : 1,
    display : 'flex',
    flexDirection : 'row',
    gap : 5,
    alignItems : 'center',
    borderRadius : 10,
    borderColor : Colors.GRAY,
    marginTop : 10,

  },
  input : {
    fontSize : 17,
    width : '100%'
  },

  button : {
    padding : 16,
    backgroundColor : Colors.PRIMARY,
    borderRadius : 99,
    marginTop : 25,
  }
})