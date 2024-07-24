import React from "react";
import { View,Text, StyleSheet,Image } from "react-native";


const Header :React.FC = () => {
  return (
    <View style={styles.header}>
     <Image
        source={require('../assets/back.png')}
        style={styles.backButton}
      />
        <Text style={styles.title}>My Orders</Text>
      <Image
        source={require('../assets/profilepic.png')}
        style={styles.profilePic}
      />
    </View>
  );
};

const styles = StyleSheet.create({
   header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:2,
    backgroundColor: '#fff',
   },
   backButton:{
    width: 80,
    height: 80,
    top:12,
    left: 7,
    gap: 0,
    opacity:1,
   },
   title:{
    fontSize: 18,
    color: '#111719',
    fontWeight:'bold',
    fontFamily: 'SofiaPro',
   },
    profilePic:{
        width: 80,
        height: 80,
        top: 8,
        left: 7,
        gap: 0,
        opacity:1,
   }
})

export default Header;