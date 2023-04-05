import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native'
const Onboarding3 = () => {
  const route= useRoute();
  const {imagenSeleccionada1,imagenSeleccionada2 }=route.params;
    const navigation=useNavigation();
    

    const [nombre, setnombre] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handlePress = () => {
      if (nombre.trim() === '') {
        setErrorMessage('Por favor ingrese un nombre');
      } else {
        // hacer algo con el valor ingresado
        navigation.navigate('Onboarding4', {nombre,imagenSeleccionada1,imagenSeleccionada2});
      }
    }
  return (
    <View style={styles.containerPrincipal}>
        <View style={styles.containerText}>
        <Text style={{fontWeight: '500', fontSize: 20, textAlign: 'center'}}>Felicidades! Ahora Elegi un nombre!</Text>
        <View style={{ alignItems: 'center', justifyContent: 'center', position: 'relative',width:280, height: 240}}>
            <Image source={imagenSeleccionada1}
            style={{width:280, height: 240, position: 'absolute'}}
            />
            <Image source={imagenSeleccionada2}
            style={{width:280, height: 240, position: 'absolute' }}
            />
        </View>
        <TextInput
        placeholder='      Nombre'
        value={nombre}
        onChangeText={setnombre}
        style={{borderWidth: 1, width: 284, height: 56, borderRadius:4, padding: 5}}
        />
         {errorMessage !== '' && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
        <TouchableOpacity style={styles.boton} onPress={handlePress}>
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

export default Onboarding3