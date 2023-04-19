import React, { useState } from "react";
import { Alert, Text, View, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from "react-native";
import {
    MaterialCommunityIcons,
    AntDesign,
    Feather,
    MaterialIcons,
} from "react-native-vector-icons";
import PigCoin from '../../assets/coin.png';
import PinkPigCoin from '../../assets/pinkcoin.png';

const MASCOTAS = [
    {
        id: '1',
        title: '500',
        imageUrl: require('../../../../assets/characters/perro.png')
    },
    {
        id: '2',
        title: '500',
        imageUrl: require('../../../../assets/characters/cerdo.png')
    },
    {
        id: '3',
        title: '500',
        imageUrl: require('../../../../assets/characters/oso.png')
    },
    {
        id: '4',
        title: '500',
        imageUrl: require('../../../../assets/characters/tortuga.png')
    },
    {
        id: '5',
        title: '500',
        imageUrl: require('../../../../assets/characters/unicornio.png')
    }
];


const FONDOS = [

    {
        id: '2',
        title: '500',
        imageUrl: require('../../../../assets/fondos/fondo2.png')
    },
    {
        id: '3',
        title: '500',
        imageUrl: require('../../../../assets/fondos/fondo3.png')
    }
];

const OBJETOS = [
    {
        id: '1',
        title: '500',
        imageUrl: require('../../../../assets/objetos/item1-01.png')
    },
    // {
    //     id: '2',
    //     title: '500',
    //     imageUrl: require('../../../../assets/objetos/item2-01.png')
    // },
    // {
    //     id: '3',
    //     title: '500',
    //     imageUrl: require('../../../../assets/objetos/item3-01.png')
    // },
    // {
    //     id: '4',
    //     title: '500',
    //     imageUrl: require('../../../../assets/objetos/item4-01.png')
    // },
    {
        id: '5',
        title: '500',
        imageUrl: require('../../../../assets/objetos/item5-01.png')
    },
    {
        id: '6',
        title: '500',
        imageUrl: require('../../../../assets/objetos/item6-01.png')
    },
    {
        id: '7',
        title: '500',
        imageUrl: require('../../../../assets/objetos/item9-01.png')
    }
];



function Tienda(props) {

    const { monedero } = props;
    const { handleAlertConfirm } = props;


    //MASCOTAS
    const { onMascotasClick, mascotas } = props;
    const handleMascotasPress = (item) => {
        if (mascotas.includes(item)) {
            Alert.alert(
                "Error",
                "Ya has comprado este item"
            );
        } else {

            onMascotasClick(item);
            handleAlertConfirm();
        }




    }

    //FONDOS
    const { onFondosClick, fondos } = props;
    const handleFondosPress = (item) => {
        if (fondos.includes(item)) {
            Alert.alert(
                "Error",
                "Ya has comprado este item"
            );
        } else {
            onFondosClick(item);
            handleAlertConfirm();
        }
    }

    //OBJETOS / ADORNOS
    const { onObjetosClick, objetos } = props;
    const handleObjetosPress = (item) => {
        if (objetos.includes(item)) {
            Alert.alert(
                "Error",
                "Ya has comprado este item"
            );
        } else {
            onObjetosClick(item);
            handleAlertConfirm();
        }
    }
    return (

        <>
            <View style={{ borderColor: '#1B223C', borderWidth: 1, borderRadius: 50, width: 110, height: 30, marginBottom: 15, marginTop: 30, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Image source={monedero <= 500 ? PinkPigCoin : PigCoin} style={{ height: "100%", width: 30, borderColor: '#1B223C', borderWidth: 1, borderRadius: 50 }} />
                <Text style={{ fontWeight: 500, fontSize: 16, marginHorizontal: 5, color: monedero <= 500 ? "#EB5757" : "#1B223C" }}>{monedero}</Text>
            </View>
            <View>
                <Text style={styles.textoListas}>Mascotas</Text>
                <FlatList
                    data={MASCOTAS}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleMascotasPress(item)}>
                            <View style={styles.item}>
                                <Image source={item.imageUrl} style={styles.image} />
                                <View style={{ width: "100%", backgroundColor: "#798BB2", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}><Image source={PigCoin} style={{ width: 14, height: 14 }} /><Text style={styles.title}>{item.title}</Text></View>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />


                <Text style={styles.textoListas}>Fondos de habitacion</Text>
                <FlatList
                    data={FONDOS}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleFondosPress(item)}>
                            <View style={styles.item}>
                                <Image source={item.imageUrl} style={styles.image} />
                                <View style={{ width: "100%", backgroundColor: "#798BB2", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}><Image source={PigCoin} style={{ width: 14, height: 14 }} /><Text style={styles.title}>{item.title}</Text></View>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.textoListas}>Items personalizacion de fondo</Text>
                <FlatList
                    data={OBJETOS}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleObjetosPress(item)}>
                            <View style={styles.item}>
                                <Image source={item.imageUrl} style={styles.image} />
                                <View style={{ width: "100%", backgroundColor: "#798BB2", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}><Image source={PigCoin} style={{ width: 14, height: 14 }} /><Text style={styles.title}>{item.title}</Text></View>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />


            </View>
        </>
    )
}


const styles = StyleSheet.create({
    item: {

        marginHorizontal: 4,
        marginVertical: 20,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: "#798BB2",
        borderRadius: 4,
        width: 91,
        height: 107,
    },
    image: {
        width: "100%",
        height: 83,
        alignSelf: "center"


    },
    title: {
        fontSize: 16,
        color: "#FFF",

    },
    textoListas: {
        backgroundColor: '#F5AFB4',
        color: "#FFFFFF",
        paddingVertical: 5,
        paddingHorizontal: 5,
        fontWeight: 500,
        fontSize: 16,

    }
});

export default Tienda