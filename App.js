import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <ImageBackground source={require('./assets/primeraVista/fondo.png')} style={styles.image}>
         <View style={styles.viewPrincipal}>

         <View style={styles.viewText}>
          <Text style={styles.TextMarca}>Easy Food</Text>
         </View>
        
        <View style={styles.LogoView}>
          <Image style={styles.Logo} source={require('./assets/primeraVista/Logo.png')} />
        </View>

          <View>
          <TouchableOpacity style={styles.button}>
             <Text style={styles.btntext}>Comencemos</Text>
           </TouchableOpacity>
          </View>
         </View>
       </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  viewPrincipal: {
  },
  LogoView: {
    paddingTop:80,
    paddingBottom:70,
    height: 500,
    alignItems:'center',
  },
  Logo: {
    flex:1,
    alignItems:'center',
  },
  TextMarca: {
    fontSize: 60,
    marginTop:50,
    textShadowRadius: 5,
    textShadowColor:"#363636"
  },
  
  viewText: {
    paddingBottom: 50,
    alignItems:'center',
  },
  button: {
    alignItems: "center",
    backgroundColor: '#FFEBEE',
    padding: 25,
    borderRadius: 100,
    marginTop:80,
    margin:30,
    },
    btntext:{
      color:"#FF5722",
      fontSize:15,
      fontWeight: 'bold'
      
    }
});
