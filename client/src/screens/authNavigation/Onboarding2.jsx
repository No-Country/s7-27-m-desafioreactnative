import { View, Text, StyleSheet, TouchableOpacity, Image,ScrollView } from 'react-native'
import React, { useState,useRef } from 'react'
import { useNavigation } from '@react-navigation/native';

const Onboarding2 = () => {
    
    const imagen1 = require('../assets/gato_normal.png');
    const imagen2 = require('../assets/perro.png');

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
    <Text style={styles.textPrincipal}>Elegí a tu nueva mascota:</Text>
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
        <TouchableOpacity onPress={() => handleScroll(0)} style={{top: '160%', right: '8%'}}>
          <Image source={require('../assets/izquierda.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleScroll(500)} style={styles.flecha_der}>
        <Image source={require('../assets/derecha.png')} />
        </TouchableOpacity>
      </View>
    <ScrollView
    ref={scrollViewRef}
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      style={{ flex: 1, }}
    >
      <View style={styles.itemContainer}>

      <View style={styles.containerText}>
        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
            <Image source={imagen1}
            style={{width:264, height: 320 }}
            />
        </View>

        </View>
        <View style={styles.caja_descripcion}>
            <Text style={styles.text_descripcion}>
            Si buscas un compañero fiel, amistoso y que te reciba siempre con mucha felicidad, ese SOY YO!
            Mi felicidad depende siempre de la tuya y no puedo esperar a estar EN CASA con mi nuevo amo.
            </Text>
        </View>
        <View style={styles.container_boton}>
        <TouchableOpacity style={styles.boton} onPress={continuar1}>
            <Text style={{color: 'white', fontWeight: '500',letterSpacing: 1}}>CONTINUAR</Text>
        </TouchableOpacity>
    </View>
      </View>
      <View style={styles.itemContainer}>
      <View style={styles.containerText}>
        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
            <Image source={imagen2 }
            style={{width:264, height: 320 }}
            />
        </View>
        </View>
        <View style={styles.caja_descripcion}>
            <Text style={styles.text_descripcion}>
            No me gusta bañarme, amo las hamburguesas y jugar, me gustan los espacios luminosos y busco un dueño amable que juegue conmigo todos los días.  Espero un nombre y amo pronto!
            </Text>
        </View>
        <View style={styles.container_boton}>
    <TouchableOpacity style={styles.boton} onPress={continuar2}>
            <Text style={{color: 'white', fontWeight: '500', letterSpacing: 1}}>CONTINUAR</Text>
        </TouchableOpacity>
    </View>
      </View>
    </ScrollView>


    </View>
  );
};

const styles= StyleSheet.create({


    containerPrincipal: {
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
        padding: 20,
    },
    boton: {
      backgroundColor: '#EF7F79',
      width: 328,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
    },
    textPrincipal: {
      fontWeight: '700', 
      fontSize: 22, textAlign: 'center',
       fontFamily: 'Roboto', 
       fontStyle: 'normal', 
       lineHeight: 28, 
       color: '#1B223C',
       marginLeft: 20
    },
    containertextp: {
        width: 328,
        height: 28,

    },
    container_boton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
    },
    flecha_der: {
      top: '160%',
      left: '123%'
    },
    caja_descripcion: {
      width: 328, 
      height: 160, 
      backgroundColor: '#FFFFFF', 
      paddingHorizontal: 10 ,
      paddingTop: 3, 
      borderWidth: 3,
      borderColor: '#F5AFB4',
      borderRadius: 16,
      shadowColor: '#EF7F79',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 3,
    },
    itemContainer: {
      marginLeft: 10,
      marginRight: 10
    },
    text_descripcion: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0.5,
      color: '#1B223C',
      display: 'flex',
      alignItems: 'center',
      flexGrow: 1,
    }
})

export default Onboarding2