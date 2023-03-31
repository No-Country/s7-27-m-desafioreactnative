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
    
    const navigation=useNavigation();

    return (
        <>
        <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.containerPrincipal}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} />
                </TouchableOpacity>

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
                                <Feather name="shopping-bag" size={24} />
                                <Text style={{ color: currentTab === "tienda" ? "#333" : "#999" }}>
                                    Tienda
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleTabChange("inventario")}>
                            <Text style={{ color: currentTab === "inventario" ? "#333" : "#999" }}>
                                Inventario
                            </Text>
                        </TouchableOpacity>
                </View>


                {currentTab === "tienda" ? <Tienda /> : <Inventario />}
                

                <TouchableOpacity style={styles.boton} onPress={() => navigation.goBack()}>
                    <Text style={{color: 'white', fontWeight: '500'}}>VOLVER</Text>
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
        borderWidth:1
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
        backgroundColor: '#A8A8A8',
        width: 283,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginHorizontal: 20,
        marginVertical:20
    }
});

export default TiendaInventario;


