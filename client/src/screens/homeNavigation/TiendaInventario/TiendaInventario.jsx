import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from "react-native";
import {
    MaterialCommunityIcons,
    AntDesign,
    Feather,
    MaterialIcons,
} from "react-native-vector-icons";
import Tienda from "./Tienda";
import Inventario from "./Inventario";
import { useNavigation } from '@react-navigation/native';



const TiendaInventario = () => {
    const [currentTab, setCurrentTab] = useState("tienda");

    const handleTabChange = (tab) => {
        setCurrentTab(tab);
    };

    const navigation = useNavigation();

    const [monedero, setMonedero] = useState(3500);
    const handleAlertConfirm = () => {
        setMonedero(monedero - 500);
    };

    //MASCOTAS
    const [mascotas, setMascotas] = useState([]);

    const handleMascotasPress = (item) => {
        setMascotas([...mascotas, item]);
    }

    //FONDOS
    const [fondos, setFondos] = useState([]);

    const handleFondosPress = (item) => {
        setFondos([...fondos, item]);
    }
    
    //OBJETOS / ADORNOS
    const [objetos, setObjetos] = useState([]);

    const handleObjetosPress = (item) => {
        setObjetos([...objetos, item]);
    }

    return (
        <>
            <View style={{ backgroundColor: "#EF7F79", marginHorizontal: 0, height: 60, flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} style={{ color: "#FFFFFF", marginHorizontal: 15 }} />
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.scrollView}>

                <View style={styles.containerPrincipal}>


                    <View style={styles.navTiendaInventario}>
                        <TouchableOpacity onPress={() => handleTabChange("tienda")}>
                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 10,
                                }}
                            >
                                <Feather name="shopping-bag" size={24} style={{ color: currentTab === "tienda" ? "#000000" : "#999" }} />
                                <Text style={currentTab === "tienda" ? styles.tiendaActive : null}>
                                    Tienda
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleTabChange("inventario")}>
                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 10,
                                }}
                            >
                                <Feather name="box" size={24} style={{ color: currentTab === "inventario" ? "#000000" : "#999" }} />
                                <Text style={{ fontSize: 16, fontWeight: 500, color: currentTab === "inventario" ? "#000000" : "#999" }}>
                                    Inventario
                                </Text>
                            </View>
                        </TouchableOpacity>

                    </View>


                    {currentTab === "tienda" 
                    
                    
                        ?


                        <Tienda onMascotasClick={handleMascotasPress} mascotas={mascotas} onFondosClick={handleFondosPress} fondos={fondos} onObjetosClick={handleObjetosPress} objetos={objetos} monedero={monedero} handleAlertConfirm={handleAlertConfirm}/>




                        :



                        <Inventario mascotas={mascotas} fondos={fondos} objetos={objetos}/>}


                    <TouchableOpacity style={styles.boton} onPress={() => navigation.goBack()}>
                        <Text style={{ color: '#EF7F79', fontWeight: '500' }}>VOLVER</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>
        </>
    );
};




const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        marginHorizontal: 4,
        marginVertical: 20,
        alignItems: 'center',
        borderWidth: 1
    },
    image: {
        width: 91,
        height: 107,
        borderRadius: 0,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
    },

    scrollView: {
        backgroundColor: "#FFF"
    },
    containerPrincipal: {
        marginVertical: 30,
        marginHorizontal: 20,

    },
    navTiendaInventario: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    boton: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#EF7F79',
        borderRadius: 25,
        width: 328,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',


        marginVertical: 20

    },

    tiendaActive: {


        fontSize: 16,
        fontWeight: 500,
        color: "#000000"
    },

    navTienda: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    }



});

export default TiendaInventario;
