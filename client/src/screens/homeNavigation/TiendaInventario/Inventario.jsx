import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  MaterialCommunityIcons,
  AntDesign,
  Feather,
  MaterialIcons,
  Entypo,
} from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

function Inventario(props) {
  const navigation = useNavigation();
  const { mascotas } = props;
  const { fondos } = props;
  const { objetos } = props;
  return (
    <>
      <View style={{ minWidth: 100, marginBottom: 15, marginTop: 30 }}>
        <Text style={{ fontWeight: 600, fontSize: 22 }}>Objetos guardados</Text>
      </View>
      <View>
        <View style={styles.botonMascotas}>
          <Text style={styles.textoMascotas}>Mascotas</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("SwapPet", {
                nombre: "gato",
                imagenSeleccionada: require("../../assets/cat_rest.gif"),
              })
            }
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Text style={{ color: "#FFFFFF", fontSize: 11, fontWeight: 500 }}>
              IR A MIS MASCOTAS
            </Text>
            <Entypo
              name="chevron-right"
              size={11}
              style={{ color: "#FFFFFF" }}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          style={{ minHeight: 120 }}
          data={mascotas}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image source={item.imageUrl} style={styles.image} />
              <View
                style={{
                  width: "100%",
                  backgroundColor: "#798BB2",
                  alignItems: "center",
                }}
              >
                <Text style={styles.title}></Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.textoListas}>Fondos de habitacion</Text>
        <FlatList
          style={{ minHeight: 120 }}
          data={fondos}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image source={item.imageUrl} style={styles.image} />
              <View
                style={{
                  width: "100%",
                  backgroundColor: "#798BB2",
                  alignItems: "center",
                }}
              >
                <Text style={styles.title}>USAR</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.textoListas}>Items personalizacion de fondo</Text>
        <FlatList
          style={{ minHeight: 120 }}
          data={objetos}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image source={item.imageUrl} style={styles.image} />
              <View
                style={{
                  width: "100%",
                  backgroundColor: "#798BB2",
                  alignItems: "center",
                }}
              >
                <Text style={styles.title}>USAR</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  item: {
    marginHorizontal: 4,
    marginVertical: 20,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#798BB2",
    borderRadius: 4,
    width: 91,
    height: 107,
  },
  image: {
    width: "100%",
    height: 83,
  },
  title: {
    fontSize: 16,
    color: "#FFF",
  },
  textoListas: {
    backgroundColor: "#F5AFB4",
    color: "#FFFFFF",
    paddingVertical: 5,
    paddingHorizontal: 5,
    fontWeight: 500,
    fontSize: 16,
  },
  textoMascotas: {
    backgroundColor: "#F5AFB4",
    color: "#FFFFFF",

    fontWeight: 500,
    fontSize: 16,
  },
  botonMascotas: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F5AFB4",
    color: "#FFFFFF",
    paddingVertical: 5,
    paddingHorizontal: 5,
    fontWeight: 500,
    fontSize: 16,
  },
});

export default Inventario;
