import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native'
import React from 'react'
import Back from '../../assets/icons/Property 1=Variant24.svg'
import Search from '../../assets/icons/Search.svg'



export default function Project() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity style={styles.icon}>
          <Back  style={{transform: [{rotate: '270deg'}]}}/>
        </TouchableOpacity>
        <Text style={styles.bord} >Projects</Text>
        <TouchableOpacity style={styles.icon}> 
          <Search/>
        </TouchableOpacity>
      </View>

      <View style={styles.Head}>
        <View style={styles.Left}>
            <Text>In Progress</Text>
        </View>
        <View >
             <Text>All Projects</Text>
        </View>
      </View>
      <View>
        <View style={styles.top}>
            <View>
            
                <Text>Project in Progress</Text>
            </View>
          
        </View>

        <Text>PreCorp Website Design</Text>

        <View style={styles.middle}></View>
        <View style={styles.bottom}></View>
      </View>

    </View>
  )
}
const styles =StyleSheet.create({
    container:{
      paddingHorizontal:18,
      paddingVertical:10
    },
  
  header:{
    justifyContent:'space-between',
    flexDirection: 'row',
    paddingTop:30,
    marginBottom:30
   
  },
  
    bord:{
      fontFamily:"OpenSans",
      fontSize:24,
      fontWeight:'bold'
  },
  
    icon:{
      borderRadius: 30,
      borderWidth:1,
      padding: 8
 },

    Head:{
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor:'#9B9A9A'
 },
    Left:{
        backgroundColor:"#fff",
        padding:15,
 },


})