import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const Onboarding4 = () => {
  const route = useRoute();
  const { nombre,imagenSeleccionada1,imagenSeleccionada2 } = route.params;
  const navigation = useNavigation();


  let imagenSeleccionada = null;
if (imagenSeleccionada1) {
  imagenSeleccionada = require('../assets/choosen1.gif');
} else if (imagenSeleccionada2) {
  imagenSeleccionada = require('../assets/choosen2.gif');
}
const handlePress = () => navigation.navigate("Home", { nombre,imagenSeleccionada1,imagenSeleccionada2 });
  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.containerText}>
        <Text style={styles.text_principal}>
          {nombre}
        </Text>
        <View style={{ alignItems: 'center', justifyContent: 'center', position: 'relative',width:360, height: 360}}>
            <Image source={imagenSeleccionada}
            style={{width:360, height: 380, position: 'absolute'}}
            />
        </View>
        <View style={styles.caja_descripcion}>
            <Text style={styles.text_descripcion}>
            Acabas de dar el primer paso en tu entrenamiento para demostrar que podes cuidar de una mascota! Ahora a divertirnos juntos en este espacio.           
            </Text>
        </View>
        <TouchableOpacity style={styles.boton} onPress={handlePress}>
          <Text style={{ color: "white", fontWeight: "500", letterSpacing: 1 }}>CONTINUAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  containerText: {
    alignItems: "center",
    gap: 20,
  },
  containerPrincipal: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  boton: {
    backgroundColor: '#EF7F79',
    width: 328,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginTop: 20
  },
  caja_descripcion: {
    width: 328, 
    height: 112, 
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
  },
  text_principal:{
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 32,
    lineHeight: 40,
    textAlign: 'center',
    color: '#EF7F79',
  }
});

export default Onboarding4;
