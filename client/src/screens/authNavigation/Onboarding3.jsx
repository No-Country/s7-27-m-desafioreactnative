import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native'
import { useDispatch } from 'react-redux';
import { postPetData } from '../../redux/actions/petActions';
const Onboarding3 = () => {
  const dispatch = useDispatch();
  const route= useRoute();

  const {imagenSeleccionada1,imagenSeleccionada2 }=route.params;

    const navigation=useNavigation();

    const [nombre, setnombre] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    
    let type_mascot= '';
  
  if(imagenSeleccionada1){
    type_mascot= 'Gato';
  } else if(imagenSeleccionada2){
    type_mascot= 'Perro';
  }

  //Cuando le da a continuar
    const handlePress = () => {
      if (nombre.trim() === '') {
        setErrorMessage('Por favor ingrese un nombre');
      } else {
        // hacer algo con el valor ingresado
        dispatch(
          postPetData({
            nombre: nombre, // Hasta 25 caracteres
            tipoMascota: type_mascot, // Id del tipo de mascota
            caracteristicas: {
              // Estas o las caracteristicas que se definan
              edad: 0,
              sueno: 100,
              energia: 100,
              salud: 100,
              felicidad: 100,
              higiene: 100
            },
            accesoriosEnUso: [] // Array de id's de los accesorios en uso
          })
        );
        navigation.navigate('Onboarding4', {nombre,imagenSeleccionada1,imagenSeleccionada2});
      }
    }
    //Mostrar el nombre en pantalla solamente
    const [nombreMostrado, setNombreMostrado] = useState('');

    const mostrarNombre = () => {
      setNombreMostrado(nombre);
    }

 

  return (
    <View style={styles.containerPrincipal}>
      <Text style={{fontWeight: '700', fontSize: 24, textAlign: 'center', marginTop: 20}}>Felicidades! </Text>
        <View style={styles.containerText}>
        <Text style={{fontWeight: '400', fontSize: 18, textAlign: 'center'}}>Ahora Elegi un nombre:</Text>
        <View style={{ alignItems: 'center', justifyContent: 'center', position: 'relative',width:280, height: 240}}>
            <Image source={require('./tagnombre.png')}
            style={{width:328, height: 244, position: 'absolute'}}
            />
            <Text style={{fontWeight: '800', fontSize: 50, textAlign: 'center',color:'#ffffff', position: 'absolute'}}>{'\n'}{'\n'}{nombreMostrado}</Text>
        </View>
        <TextInput
        placeholder='Ingresa un Nombre'
        value={nombre}
        onChangeText={setnombre}
        onSubmitEditing={mostrarNombre}
        style={{borderWidth: 1, width: 328, height: 48, borderRadius:4, paddingHorizontal: 16}}
        />
         {errorMessage !== '' && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
        <TouchableOpacity style={styles.boton} onPress={handlePress}>
            <Text style={{color: 'white', fontWeight: '500', letterSpacing: 1}}>CONTINUAR</Text>
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
    },
    containerText: {
        alignItems: 'center', 
        gap: 25 
    },
    boton: {
      backgroundColor: '#EF7F79',
      width: 328,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
    }

})

export default Onboarding3