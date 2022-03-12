import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import *as permissions from "expo-permissions";
import {BarCodeScanner} from "expo-barcode-scanner";



export default class TransactionScreen extends Component {

constructor(props){
super(props);
this.state={
domState:"normal",
hasCameraPermissions:null,
scanned:false,
scannedData:""
}


}
getCameraPermission=async domState=>{
const{status}=await Permissions.askAsync(Permissions.CAMERA);
this.state({
 hasCameraPermissions:status==="granted",
 domState:domState,
 scanned:false

  })
  
};




    render() {
      return (
        <View style={styles.container}>
        <TouchableOpacity style=
        {[styles.button,{marginTop:25}]}
        onPress={()=>this.getCameraPermissions("scanner")}
        >
        <Text style = {styles.buttonText}>
        SCAN QR CODE
        </Text>
        </TouchableOpacity>
        </View>
      )
    }
  }
  const styles=StyleSheet.create({
  container:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'red'

  },    
  text:{
  color:"blue",
  fontSize:30,
 
  },
  button:{
  width:'43%',
  height:55,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'light green',
  borderRadius:15
  
  },
  buttonText:{
  fontSize:24,
  color:'purple',

  


  }
  

  });