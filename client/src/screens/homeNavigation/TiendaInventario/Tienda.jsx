import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from "react-native";
import {
    MaterialCommunityIcons,
    AntDesign,
    Feather,
    MaterialIcons,
} from "react-native-vector-icons";
import PigCoin from '../../assets/coin.png';
import PinkPigCoin from '../../assets/pinkcoin.png';

const DATA = [
    {
        id: '1',
        title: '500',
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: '2',
        title: '500',
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: '3',
        title: '500',
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: '4',
        title: '500',
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: '5',
        title: '500',
        imageUrl: 'https://via.placeholder.com/150',
    },
];

const renderItem = ({ item }) => (
    <View style={styles.item}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <View style={{width:"100%", backgroundColor:"#798BB2",flexDirection:"row", alignItems:"center",justifyContent:"space-around"}}><Image source={PigCoin} style={{width:14, height:14}}/><Text style={styles.title}>{item.title}</Text></View>
    </View>
);

function Tienda() {
    return (

        <>
            <View style={{ borderColor: '#1B223C', borderWidth: 1, borderRadius: 50, width: 110,height:30, marginBottom: 15, marginTop:30, flexDirection:"row", alignItems:"center",justifyContent:"space-between" }}>
                    <Image source={PinkPigCoin} style={{ height:"100%", width:30,borderColor: '#1B223C', borderWidth: 1, borderRadius: 50}}/>
                    <Text style={{fontWeight:500, fontSize:16, marginHorizontal:5, color:"#EB5757"}}>600</Text>
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

export default Tienda