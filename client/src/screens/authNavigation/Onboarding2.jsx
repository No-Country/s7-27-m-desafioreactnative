import { View, Text, StyleSheet, TouchableOpacity, Image,ScrollView } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native'
const Onboarding2 = () => {

    const [nombre, setnombre] = useState('');

    const navigation=useNavigation();

    const continuar =()=> {
      navigation.navigate('Onboarding3');
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
            <Image source={require('./pou.png')}
            style={{width:278, height: 330 }}
            />
        </View>
        <View style={{width: 283, height: 118, backgroundColor: '#D9D9D9', padding: 10}}>
            <Text>
                Este es pou!
            </Text>
        </View>

        </View>
      </View>
      <View style={styles.itemContainer}>

      <View style={styles.containerText}>
        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./gaturro.png')}
            style={{width:278, height: 330 }}
            />
        </View>
        <View style={{width: 283, height: 118, backgroundColor: '#D9D9D9', padding: 10}}>
            <Text>
                Este es gaturro!
            </Text>
        </View>

        </View>
      </View>
    </ScrollView>
    <View style={styles.container_boton}>
    <TouchableOpacity style={styles.boton} onPress={continuar}>
            <Text style={{color: 'white', fontWeight: '500'}}>CONTINUAR</Text>
        </TouchableOpacity>
    </View>

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