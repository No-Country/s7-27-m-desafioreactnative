import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from "react-native";
import {
    MaterialCommunityIcons,
    AntDesign,
    Feather,
    MaterialIcons,
} from "react-native-vector-icons";

const DATA = [
    {
        id: '1',
        title: 'USAR',
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: '2',
        title: 'USAR',
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: '3',
        title: 'USAR',
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: '4',
        title: 'USAR',
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: '5',
        title: 'USAR',
        imageUrl: 'https://via.placeholder.com/150',
    },
];

const renderItem = ({ item }) => (
    <View style={styles.item}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <View style={{width:"100%", backgroundColor:"#798BB2", alignItems:"center"}}><Text style={styles.title}>{item.title}</Text></View>
    </View>
);

function Inventario() {
    return (

        <>
            <View style={{  minWidth:100, marginBottom: 15, marginTop:30 }}>
                    <Text style={{fontWeight:600, fontSize:22}}>Objetos guardados</Text>
            </View>
            <View>
                <Text style={styles.textoListas}>Mascotas</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.textoListas}>Items personalizacion de fondo</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.textoListas}>Fondos de habitacion</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
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
        borderWidth:2,
        borderColor:"#798BB2",
        borderRadius:4,
        width: 91,
        height: 107,
    },
    image: {
        width: "100%",
        height:83
        
        
        
    },
    title: {
        fontSize: 16,
        color:"#FFF",
        
    },
    textoListas: {
        backgroundColor: '#F5AFB4',
        color:"#FFFFFF", 
        paddingVertical: 5,
        paddingHorizontal:5,
        fontWeight:500,
        fontSize:16,
        
    }

});

export default Inventario