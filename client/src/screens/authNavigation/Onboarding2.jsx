import { View, Text, StyleSheet, TouchableOpacity, Image,ScrollView } from 'react-native'
import React, { useState,useRef } from 'react'
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
//
      const scrollViewRef = useRef(null);

      const handleScroll = (x) => {
        if (scrollViewRef.current) {
          scrollViewRef.current.scrollTo({ x, animated: true });
        }
      };

  return (
    <View style={styles.containerPrincipal}>
    <View style={styles.containertextp}>
    <Text style={styles.textPrincipal}>Elegi a tu nueva mascota:</Text>
    </View>
    <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 16,
          position: 'absolute',
          zIndex: 1
        }}>
        <TouchableOpacity onPress={() => handleScroll(0)} style={{top: 225}}>
          <Image source={require('./izq.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleScroll(500)} style={styles.flecha_der}>
        <Image source={require('./der.png')} />
        </TouchableOpacity>
      </View>
    <ScrollView
    ref={scrollViewRef}
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      style={{ flex: 1 }}
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
       
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
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
    },
    flecha_der: {
        left: 340,
        top: 225,
    }
})

export default Onboarding2