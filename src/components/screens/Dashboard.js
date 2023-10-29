import { View, Text, StyleSheet, TouchableOpacity,} from 'react-native'
import React from 'react'
import MenuIcon from "../../assets/icons/Home.svg"
import Notify from "../../assets/icons/Notification.svg"
import Project from "../../assets/icons/Frame1.svg"
import Completed from "../../assets/icons/Frame 2.svg"
import Bar from "../../assets/icons/Property 1=Variant20.svg"
import Arrow from "../../assets/icons/arrow.svg"
import Graph from "../../assets/icons/graph.svg"

export default function Dashboard({navigation}) {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity style={styles.icon}>
          <MenuIcon />
        </TouchableOpacity>
        <Text style={styles.bord} >Dashboard</Text>
        <TouchableOpacity style={styles.icon}> 
          <Notify/>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.Mainhead}>
          Project Summary</Text>
        <Text style={styles.p}>
          Let's finish your project for today!
        </Text>
        <View style={styles.prj}>
          <TouchableOpacity onPress={() =>navigation.navigate('Project')}>
            <Project/>
          </TouchableOpacity>
          <TouchableOpacity>
              <Completed/>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.middle}>
          <Text style={styles.middleTxt}>Project Statistics</Text>
          <Bar/>
        </View>
        <View style={{alignItems:'center'}}><Graph/></View>
        <View style={styles.graphview}>
          <View style={{flexDirection:'row'}}>
             <View style={{borderRadius:1,width:15,backgroundColor:'#009CBC'}}></View>
              <Text style={styles.grp}> On-target</Text>
            </View>
          <View style={{flexDirection:'row'}}>
           <View style={{borderRadius:1,width:15,backgroundColor:'#ED6B42'}}></View>
            <Text style={styles.grp}> Task-target</Text>
            </View>
          <View style={{flexDirection:'row'}}>
            <View style={{borderRadius:1,width:15,backgroundColor:'#000'}}></View>
            <Text style={styles.grp}> Off-target</Text>
            </View>
        </View>
      </View>

      <View style={styles.lastView}>
        <View style={{borderRightWidth:0.2,paddingRight:33}}>
          <View><Text>Total Working Hour</Text></View>
          <View style={styles.LastView}>
            <Text style={styles.hour}>60:23:03  </Text>
            <View style={styles.Last2}>
            <Arrow  style={{transform: [{rotate: '270deg'}]}}/>
              <Text style={{color:'#fff'}}>34%</Text>
            </View>
          </View>
        </View>
        <View style={{paddingVertical:10}}>
          <View><Text>Total Task Activity</Text></View>
          <View style={styles.LastView}>
            <Text style={styles.hour}>125 Task  </Text>
            <View style={styles.Last}>
              <View >
               <Arrow style={{transform:  [{rotate: '270deg'}]}}/>
              </View>
              <Text style={{color:'#fff'}}>14%</Text>
            </View>
          </View>
        </View>
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
  paddingTop:25,
  marginBottom:30
 
},
Mainhead:{
  fontSize:28,
  fontWeight:'500',
  marginBottom:6,
   color:'#000'
},
  p:{
    fontSize:17,
    opacity: 0.6,
    fontWeight:'500'
},

  bord:{
    fontSize:24,
    fontWeight:'bold',
    color:'#000'
},

  icon:{
    borderRadius: 30,
    borderWidth:1,
    padding: 8
  },

  prj:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:23,
    marginBottom:20
  },

  middle:{
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    paddingHorizontal:20,
    paddingBottom:20
    
  },

  middleTxt:{
    fontSize:20,
    fontWeight:'500'
  },

  bottom:{
    backgroundColor:'#fff',
    paddingVertical:15,
    
  },
  grp:{
    fontWeight:'bold'
  },

  graphview:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:25
  },

  LastView:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:10
  },

  Last:{
    backgroundColor:'#ED6B42',
    flexDirection:'row',
    padding:2
  },

  Last2:{
    flexDirection:'row',
    padding:2,
    backgroundColor:'#009CBC'
  },

  lastView:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:20,
    backgroundColor:'#fff',
    marginTop:20,
    paddingVertical:15,
  
  },
  hour:{
    fontSize:18,
    fontWeight:'500'
  }



});