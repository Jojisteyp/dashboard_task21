import { View,Image, Text,StyleSheet ,TouchableOpacity,ScrollView} from 'react-native'
import React from 'react'

import Back from '../../assets/icons/Property 1=Variant24.svg'
import Search from '../../assets/icons/Search.svg'
import Play from '../../assets/icons/Property 1=Variant21.svg'
import Bar from "../../assets/icons/Property 1=Variant20.svg"
import Comment from "../../assets/icons/Property 1=Variant18.svg"
import Doc from "../../assets/icons/Property 1=Variant22.svg"
import Tick from "../../assets/icons/Variant17.svg"
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
      <ScrollView>
      <View style={styles.MainScroll}>
        <View style={styles.top} >
            <View  style={{flexDirection:'row',backgroundColor:'#ED6B42',width:180,padding:5,marginBottom:12}}>
              <Play/>
              <Text style={{fontSize:15,color:'#fff',}}> Projects in Progress</Text>
            </View>
        </View>
        <Text style={{paddingVertical:13, fontSize:27,fontWeight:'600',color:'#000'}}>Tasktion-Project</Text>
        <Text style={{ fontSize:28,fontWeight:'600',color:'#000',paddingBottom:30}}>Management Dashboard</Text>
        <Text style={styles.des}>Description</Text>
        <Text style={styles.des} >
          This project has a task management theme for a dashboard  or web app platform.Here there is a complete breif along with the...</Text>
        <View style={styles.Middle}>
          <View>
            <Text style={styles.Textmem}>Team member</Text>
            <View style={styles.Members}>
              <View style={styles.Mainmem}>
                <Image  style={styles.MemPic}
                  source={require("../../assets/images/person3.png")}
                 />
              </View>
              <View  style={styles.Mainmem}>
                <Image  style={styles.MemPic}
                  source={require("../../assets/images/person2.png")}
                 />
              </View>
              <View style={styles.Mainmem} >
                <Image  style={styles.MemPic}
                  source={require("../../assets/images/person1.png")}
                 />
              </View>
              <View  style={styles.Mainmem}>
                <Image  style={styles.MemPic}
                  source={require("../../assets/images/person4.png")}
                 />
              </View>
            </View>
          </View>
          <View>
            <Text  style={styles.Textmem}>Due date</Text>
            <Text style={{fontSize:20,fontWeight:600,color:"#000"}}>Sept 24, 2022</Text>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.BottonHeader}>
          <Text style={{fontSize:21,fontWeight:500,color:"#000"}}>Tasks</Text>
          <Bar/>
        </View>
        <View style={{paddingHorizontal:20 ,paddingVertical:14,}}>
          <View style={styles.SubContainer}>
            <View style={{flexDirection:'row'}}>
              <Tick/>
              <Text style={{fontSize:20,fontWeight:500,color:'#002'}}>  Style Guide & Component</Text>
            </View>
              <View style={styles.middle}>
                <View style={{flexDirection:'row'}}>
                  <Comment/>
                  <Text>  16 Comment</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                  <Doc/>
                  <Text>  2 Document</Text>
                </View>
              </View>
          </View>
        </View>

        <View style={{paddingHorizontal:20 ,paddingVertical:14,}}>
          <View style={styles.SubContainer}>
            <View style={{flexDirection:'row'}}>
              <Tick/>
              <Text style={{fontSize:20,fontWeight:500,color:'#002'}}>  Wireframing & Sketch</Text>
            </View>
              <View style={styles.middle}>
                <View style={{flexDirection:'row'}}>
                  <Comment/>
                  <Text>  16 Comment</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                  <Doc/>
                  <Text>  2 Document</Text>
                </View>
              </View>
          </View>
        </View>

        <View style={{paddingHorizontal:20 ,paddingVertical:14,}}>
          <View style={styles.SubContainer}>
            <View style={{flexDirection:'row'}}>
              <Tick/>
              <Text style={{fontSize:20,fontWeight:500,color:'#002'}}>  UI design & Prototype</Text>
            </View>
              <View style={styles.middle}>
                <View style={{flexDirection:'row'}}>
                  <Comment/>
                  <Text>  16 Comment</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                  <Doc/>
                  <Text>  2 Document</Text>
                </View>
              </View>
          </View>
        </View>
        <View style={{paddingHorizontal:20 ,paddingVertical:14,}}>
          <View style={styles.SubContainer}>
            <View style={{flexDirection:'row'}}>
              <Tick/>
              <Text style={{fontSize:20,fontWeight:500,color:'#002'}}>  Style Guide & Component</Text>
            </View>
              <View style={styles.middle}>
                <View style={{flexDirection:'row'}}>
                  <Comment/>
                  <Text>  16 Comment</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                  <Doc/>
                  <Text>  2 Document</Text>
                </View>
              </View>
          </View>
        </View>
      </View>
     </ScrollView>
    </View>
  )
}
const styles =StyleSheet.create({
  container:{
  },

header:{
  justifyContent:'space-between',
  flexDirection: 'row',
  paddingTop:35,
  paddingHorizontal:18,
  backgroundColor:'#fff',
  paddingBottom:30,
  
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
  paddingVertical:20,
  backgroundColor:'#fff',
  
},
top:{
  flexDirection:'row',
  justifyContent:'space-between',
},
  des:{
    fontSize:17,
    fontWeight:'500',
    paddingBottom:20,
    color:'grey'
  },
  Middle:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:5,
    paddingVertical:8,
    paddingRight:90
  },
  Members:{
    flexDirection:'row',
  },
  MemPic:{
    width: 30,
    height: 30,
    borderRadius:30,
  },
  Textmem:{
    paddingVertical:10,
    fontSize:16
  },
  Mainmem:{
    borderWidth:2 ,
    borderRadius:30,
    borderColor:'#fff',
    marginRight:-5,
  },
  middle:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingRight:55,
    paddingTop:10,
    paddingLeft:33
  },
  SubContainer:{
    paddingHorizontal:20,
     backgroundColor:'#fff',
     paddingVertical:20
  },
  BottonHeader:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:20,
    paddingVertical:20
  }

});