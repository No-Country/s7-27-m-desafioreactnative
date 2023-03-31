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
        title: 'utilizar',
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: '2',
        title: 'utilizar',
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: '3',
        title: 'utilizar',
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: '4',
        title: 'utilizar',
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: '5',
        title: 'utilizar',
        imageUrl: 'https://via.placeholder.com/150',
    },
];

const renderItem = ({ item }) => (
    <View style={styles.item}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
    </View>
);

function Inventario() {
    return (

        <>
            <View style={{  width: 150, marginTop: 15, marginBottom: 30 }}>
                    <Text>Objetos guardados</Text>
            </View>
            <View>
                <Text style={{ backgroundColor: '#ddd', paddingVertical: 5 }}>Mascotas</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={{ backgroundColor: '#ddd', paddingVertical: 5 }}>Items personalizacion de fondo</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={{ backgroundColor: '#ddd', paddingVertical: 5 }}>Fondos de habitacion</Text>
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

export default Inventario