import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native'
const Onboarding1 = () => {
    const route= useRoute();
    const navigation=useNavigation();

    const continuar =()=> {
      navigation.navigate('Onboarding2');
    };
  return (
    <View style={styles.containerPrincipal}>
        <View style={styles.containerText}>
        <Text style={{fontWeight: '600', fontSize: 22, textAlign: 'center'}}>Hola! Que bueno que decidiste adoptar una mascota! Estamos orgullosos de vos.</Text>
        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./pou.png')}
            style={{width:350, height: 300 }}
            />
        </View>
        <TouchableOpacity style={styles.boton} onPress={continuar}>
            <Text style={{color: 'white', fontWeight: '500', fontSize: '16'}}>CONTINUAR</Text>
        </TouchableOpacity>
        </View>
      
    </View>
  )
}
const styles= StyleSheet.create({

    containerPrincipal: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        position: 'relative'
    },
    containerHelp: {
        width: 360,
         height: 60, 
         backgroundColor:'red',
         zIndex:1 
    },
    containerText: {
        padding: 10, 
        alignItems: 'center', 
        marginTop: 50, 
        gap: 65
    },
    containerPrincipal: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
    boton: {
        backgroundColor: '#EF7F79',
        width: 328,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    }

})

export default Onboarding1