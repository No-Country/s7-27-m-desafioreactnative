import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'

const Onboarding4 = () => {
    const route= useRoute();
    const {nombre}=route.params;
  return (
    <View style={styles.containerPrincipal}>
        <View style={styles.containerText}>
        <Text style={{fontWeight: '500', fontSize: 20, textAlign: 'center'}}>{nombre}</Text>
        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./pou.png')}
            style={{width:280, height: 240 }}
            />
        </View>
        <View style={{width: 283, height: 118, backgroundColor: '#D9D9D9', padding: 10}}>
            <Text>
                Descripcion de la mascota: tu mascotita esta muy alegre de que lo hayas adoptado!
            </Text>
        </View>
        <TouchableOpacity style={styles.boton}>
            <Text style={{color: 'white', fontWeight: '500'}}>CONTINUAR</Text>
        </TouchableOpacity>
        </View>
      
    </View>
  )
}
const styles= StyleSheet.create({

    containerPrincipal: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
    containerText: {
        padding: 10, 
        alignItems: 'center', 
        margin: 25, 
        gap: 30 
    },
    containerPrincipal: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
    boton: {
        backgroundColor: '#A8A8A8',
        width: 283,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4
    }

})

export default Onboarding4