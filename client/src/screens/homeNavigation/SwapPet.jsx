import { useState } from "react";
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
  Alert
} from "react-native";
import data from "../../data/characters";



export default function SwapPet() {
  const [currentImage, setCurrentImage] = useState(data[0].image)
  const [currentName, setCurrentName] = useState(data[0].name)

  const createTwoButtonAlert = () =>
    Alert.alert('Alerta!!!', 'Cambio de personaje', [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);


  
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.listContainer} >
        <TouchableOpacity onPress={() => {
          setCurrentImage(item.image)
          setCurrentName(item.name)
        }} style={styles.imageContainer}>
          <Image  source={item.image} style={styles.itemImage} />
        </TouchableOpacity>
        <Pressable onPress={createTwoButtonAlert} style={styles.button}>
          <Text style={styles.buttonText}>{item.name}</Text>
        </Pressable>
       
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.textCharacter}>MASCOTA ACTUAL</Text>
        <Image
          style={styles.characterImage}
          source={currentImage}
        />
        <Text style={styles.textCharacter}>{currentName}</Text>
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
    marginTop: 12,
    // alignItems: "center",
    // justifyContent: "center",
  },
  listContainer: {
    width: Dimensions.get("window").width / 2 - 20,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 20,
  },
  imageContainer: {
    margin: 5,
    borderRadius: 10,
    overflow: "hidden",
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
    backgroundColor: "#62513E",
    padding: 10,
    margin: 5,
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
  },
});
