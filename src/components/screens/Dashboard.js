import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

import MenuIcon from "../../assets/icons/Home.svg"
import Notify from "../../assets/icons/Notification.svg"

export default function Dashboard() {
  return (
    <View style={styles.main}>
      <MenuIcon style={styles.svgg}/>
      <Text style={styles.bord}>Dashboard</Text>
      <Notify/>
    </View>
  )
}
const styles =StyleSheet.create({
main:{
  justifyContent:'space-between',
  flexDirection: 'row',
},

  bord:{
    fontFamily:"Outfit-VariableFont_wght",
    fontSize:17,
    fontWeight:'600'

},
  svgg:{
    width:25,
    borderRadius:30
  }
});