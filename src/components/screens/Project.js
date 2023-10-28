import { View, Text, StyleSheet, ScrollView,TouchableOpacity, } from 'react-native'
import React from 'react'
import Back from '../../assets/icons/Property 1=Variant24.svg'
import Search from '../../assets/icons/Search.svg'
import Play from '../../assets/icons/Property 1=Variant21.svg'
import Bar from "../../assets/icons/Property 1=Variant20.svg"
import Comment from "../../assets/icons/comment.svg"
import Doc from "../../assets/icons/document.svg"
import Pused from "../../assets/icons/Property 1=stop.svg"



export default function Project({navigation}) {
  return (
    <View style={styles.container}>

    {/* Header section ==> */}

      <View style={styles.header}>
        <TouchableOpacity style={styles.icon} onPress={()=>navigation.goBack()}>
          <Back  style={{transform: [{rotate: '90deg'}]}}/>
        </TouchableOpacity>
        <Text style={styles.bord} >Projects</Text>
        <TouchableOpacity style={styles.icon}> 
          <Search/>
        </TouchableOpacity>
      </View>
      {/* <=== Header section Ends  */}

      <View style={styles.Head}>
        <View style={styles.Left}>
            <Text style={{fontSize:17,fontWeight:600,color:'#1F1F21'}}>In Progress</Text>
        </View>
        <View style={styles.Right}>
             <Text  style={{fontSize:17,fontWeight:500,color:'grey'}}>All Projects</Text>
        </View>
      </View>

      <ScrollView>
        {/* Lists ===> */}

        <TouchableOpacity style={styles.mainList} onPress={() =>navigation.navigate('Task')}>
          <View style={styles.top} >
              <View  style={{flexDirection:'row',backgroundColor:'#ED6B42',width:170,padding:5}}>
                  <Play/>
                  <Text style={{fontSize:15,color:'#fff'}}> Project in Progress</Text>
              </View>
              <View>
                <Bar/>
              </View>
          </View>
          <Text style={{marginVertical:14,fontSize:20,fontWeight:500,color:'#002'}}>PreCorp Website Design</Text>
          <View style={styles.middle}>
            <View style={{flexDirection:'row'}}>
              <Comment/>
              <Text>  26 Comment</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Doc/>
              <Text>  26 Document</Text>
            </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={styles.bottom}>
              <View style={styles.length1}></View>
            </View>
            <Text>75%</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.mainList}>
          <View style={styles.top}>
              <View  style={{flexDirection:'row',backgroundColor:'#009CBC',width:170,padding:5}}>
                  <Pused/>
                  <Text style={{fontSize:15,color:'#fff'}}> Projects in Paused</Text>
              </View>
              <View>
                <Bar/>
              </View>
          </View>
          <Text style={{marginVertical:14,fontSize:20,fontWeight:500,color:'#002'}}>Tasktion-Project Management..</Text>
          <View style={styles.middle}>
            <View style={{flexDirection:'row'}}>
              <Comment/>
              <Text>  26 Comment</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Doc/>
              <Text>  26 Document</Text>
            </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={styles.bottom}>
              <View style={styles.length}></View>
            </View>
            <Text>40%</Text>
          </View>
        </View>

        <View style={styles.mainList}>
          <View style={styles.top}>
              <View  style={{flexDirection:'row',backgroundColor:'#009CBC',width:170,padding:5}}>
                  <Pused/>
                  <Text style={{fontSize:15,color:'#fff'}}> Projects in Paused</Text>
              </View>
              <View>
                <Bar/>
              </View>
          </View>
          <Text style={{marginVertical:14,fontSize:20,fontWeight:500,color:'#002'}}>Tasktion-Project Management..</Text>
          <View style={styles.middle}>
            <View style={{flexDirection:'row'}}>
              <Comment/>
              <Text>  26 Comment</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Doc/>
              <Text>  26 Document</Text>
            </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={styles.bottom}>
              <View style={styles.length}></View>
            </View>
            <Text>40%</Text>
          </View>
        </View>

        <View style={styles.mainList}>
          <View style={styles.top}>
              <View  style={{flexDirection:'row',backgroundColor:'#009CBC',width:170,padding:5}}>
                  <Pused/>
                  <Text style={{fontSize:15,color:'#fff'}}> Project in Progress</Text>
              </View>
              <View>
                <Bar/>
              </View>
          </View>
          <Text style={{marginVertical:14,fontSize:20,fontWeight:500,color:'#002'}}>Tasktion-Project Management..</Text>
          <View style={styles.middle}>
            <View style={{flexDirection:'row'}}>
              <Comment/>
              <Text>  26 Comment</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Doc/>
              <Text>  26 Document</Text>
            </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={styles.bottom}>
              <View style={styles.length}></View>
            </View>
            <Text>75%</Text>
          </View>
        </View>
      {/* <== Lists  */}
      </ScrollView>

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
      fontWeight:'bold',
      color:'#000'
  },
  
    icon:{
      borderRadius: 30,
      borderWidth:1,
      padding: 8
 },

    Head:{
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor:'#9a9a9a',
      marginBottom:30
      
 },
    Left:{
        backgroundColor:"#fff",
        paddingHorizontal:50,
        paddingVertical:18,
        marginVertical:10,
        marginLeft:12,
        borderRadius:3,
 },
    Right:{
      paddingHorizontal:45,
      paddingVertical:28, 
  },
  top:{
    flexDirection:'row',
    justifyContent:'space-between',
   
  },
  mainList:{
    paddingHorizontal:18,
    paddingVertical:18,
    marginVertical:15,
    backgroundColor:'#fff'
  },
  middle:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingRight:60,
    paddingVertical:10
  },
  bottom:{
    width:260,
    backgroundColor:'grey',
    padding:6,
    borderRadius:10,
    marginVertical:10,
    position:'relative'
  },
  length:{
    position:'absolute',
    top:0,
    bottom:0,
    left:0,
    backgroundColor:'#009CBC',
    width:"40%",
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5

  },
  length1:{
    position:'absolute',
    top:0,
    bottom:0,
    left:0,
    backgroundColor:'#ED6B42',
    width:"75%",
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5

  },

})
