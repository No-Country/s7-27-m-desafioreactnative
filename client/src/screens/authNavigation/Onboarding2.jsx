import { View, Text, StyleSheet, TouchableOpacity, Image,ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
const Onboarding2 = () => {
    
    const imagen1 = require('./pou.png');
    const imagen2 = require('./gaturro.png');

    const [imagenSeleccionada1, setImagenSeleccionada1] = useState(imagen1);
    const [imagenSeleccionada2, setImagenSeleccionada2] = useState(imagen2);
    const navigation=useNavigation();

    const continuar1 =()=> {
        setImagenSeleccionada1(imagen1);
      navigation.navigate('Onboarding3', {imagenSeleccionada1});
    };
    const continuar2 =()=> {
        setImagenSeleccionada2(imagen2);
        navigation.navigate('Onboarding3',{imagenSeleccionada2});
      };

  return (
    <View style={styles.containerPrincipal}>
    <View style={styles.containertextp}>
    <Text style={styles.textPrincipal}>Elegi a tu nueva mascota:</Text>
    </View>
    <ScrollView
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.itemContainer}>

      <View style={styles.containerText}>
        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
            <Image source={imagen1}
            style={{width:278, height: 330 }}
            />
        </View>
        <View style={{width: 283, height: 118, backgroundColor: '#D9D9D9', padding: 10}}>
            <Text>
                Este es pou!
            </Text>
        </View>
        <View style={styles.container_boton}>
    <TouchableOpacity style={styles.boton} onPress={continuar1}>
            <Text style={{color: 'white', fontWeight: '500'}}>CONTINUAR</Text>
        </TouchableOpacity>
    </View>
        </View>
      </View>
      <View style={styles.itemContainer}>

      <View style={styles.containerText}>
        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
            <Image source={imagen2 }
            style={{width:278, height: 330 }}
            />
        </View>
        <View style={{width: 283, height: 118, backgroundColor: '#D9D9D9', padding: 10}}>
            <Text>
                Este es gaturro!
            </Text>
        </View>
        <View style={styles.container_boton}>
    <TouchableOpacity style={styles.boton} onPress={continuar2}>
            <Text style={{color: 'white', fontWeight: '500'}}>CONTINUAR</Text>
        </TouchableOpacity>
    </View>
        </View>
      </View>
    </ScrollView>


    </View>
  );
};

const styles= StyleSheet.create({


    containerPrincipal: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
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
    },
    textPrincipal: {
        fontWeight: '500',
         fontSize: 20, 
         alignItems:'flex-start'

    },
    containertextp: {
        marginHorizontal: '10%'
    },
    container_boton: {
    alignItems: 'center',
    justifyContent: 'center',
    }
})

export default Onboarding2