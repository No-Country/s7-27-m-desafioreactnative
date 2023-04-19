import { useState } from "react";
import { primario, secundario, terciario } from "../../config/constants";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";

import { AntDesign } from "react-native-vector-icons";

import { useNavigation, useRoute } from "@react-navigation/native";

import data from "../../data/characters";

export default function SwapPet() {
  const navigation = useNavigation();

  const [currentImage, setCurrentImage] = useState(data[0].image);
  const [currentName, setCurrentName] = useState(data[0].name);

  const createTwoButtonAlert = () =>
    Alert.alert("Alerta!!!", "Cambio de personaje", [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () =>
          navigation.navigate("Home", {
            nombre: currentName,
            imagenOpcional: currentImage,
          }),
      },
    ]);

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.listContainer}>
        <View style={{ backgroundColor: secundario, borderRadius: 10 }}>
          <TouchableOpacity
            onPress={() => {
              setCurrentImage(item.image);
              setCurrentName(item.name);
            }}
            style={styles.imageContainer}
          >
            <Image source={item.image} style={styles.itemImage} />
          </TouchableOpacity>
          <Pressable onPress={createTwoButtonAlert} style={styles.button}>
            <Text style={styles.buttonText}>{item.name}</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* volver form atrás */}

      <View
        style={{
          backgroundColor: primario,
          marginHorizontal: 0,
          height: 60,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row", justifyContent: "space-between" }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign
            name="arrowleft"
            size={24}
            style={{ color: "#FFFFFF", marginHorizontal: 15 }}
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.textCharacter,
            { color: "white", textAlign: "center" },
          ]}
        >
          TUS MASCOTAS
        </Text>
        <Image
          style={{ marginRight: 10 }}
          source={require("../../../assets/swap.png")}
        />
      </View>

      {/* PERFIL de la mascota */}
      <Text style={styles.textCharacter}>MASCOTA ACTUAL</Text>
      {/* fondo azul */}
      <View
        style={{
          backgroundColor: terciario,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 5,
        }}
      >
        {/* fondo rosa */}
        <View style={{ backgroundColor: secundario, borderRadius: 10 }}>
          {/* fondo blanco */}
          <View style={styles.imageContainer}>
            <Image style={styles.characterImage} source={currentImage} />
          </View>
          <Text style={[styles.textCharacter, { color: "white" }]}>
            {currentName}
          </Text>
        </View>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContainer: {
    width: Dimensions.get("window").width / 2 - 20,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 20,
  },
  imageContainer: {
    backgroundColor: "white",
    margin: 5,
    borderRadius: 10,
    overflow: "hidden",
    // width: "80%",
  },
  characterImage: {
    width: "80%",
    height: undefined,
    aspectRatio: 1,
    alignSelf: "center",
  },
  itemImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  nameText: {
    fontWeight: "bold",
    marginLeft: 15,
  },
  priceText: {
    color: "orange",
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 10,
  },
  button: {
    backgroundColor: secundario,
    paddingVertical:5,
    
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  textCharacter: {
    textAlign: "center",
    // backgroundColor: '#62513E',
    // color: 'white',
    fontWeight: "bold",
    marginVertical: 12,
  },
});
