import { View, Text,StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'

import Back from '../../assets/icons/Property 1=Variant24.svg'
import Search from '../../assets/icons/Search.svg'
import Play from '../../assets/icons/Property 1=Variant21.svg'


export default function TaskDetails({navigation}) {
  return (

    <View style={styles.container}>

    {/* Header section ==> */}

      <View style={styles.header}>
        <TouchableOpacity style={styles.icon} onPress={()=>navigation.goBack()}>
          <Back  style={{transform: [{rotate: '90deg'}]}}/>
        </TouchableOpacity>
        <Text style={styles.bord} >Task Details</Text>
        <TouchableOpacity style={styles.icon}> 
          <Search/>
        </TouchableOpacity>
      </View>
      {/* <=== Header section Ends  */}

      <View style={styles.MainScroll}>
        <View style={styles.top} >
            <View  style={{flexDirection:'row',backgroundColor:'#ED6B42',width:180,padding:5}}>
              <Play/>
              <Text style={{fontSize:15,color:'#fff'}}> Projects in Progress</Text>
            </View>
        </View>
        <View style={styles.Middle}></View>
      </View>
    </View>
  )
}
const styles =StyleSheet.create({
  container:{
    paddingVertical:10
  },

header:{
  justifyContent:'space-between',
  flexDirection: 'row',
  paddingTop:30,
  marginBottom:30,
  paddingHorizontal:18,

},

  bord:{
    fontFamily:"OpenSans",
    fontSize:24,
    fontWeight:'bold',
    color:'#000'
},

  icon:{
    borderRadius: 30,
    borderWidth:1,
    padding: 8
},
MainScroll:{
  paddingHorizontal:18,
  paddingVertical:10
},
top:{
  flexDirection:'row',
  justifyContent:'space-between',
},

})