
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  Dimensions
} from "react-native";
import data from "../../data/characters";

export default function SwapPet() {
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.listContainer}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.priceText}>{item.price}</Text>
        <TouchableWithoutFeedback onPress={() => {
          console.log("Buy Now:", index)
        }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Buy now!</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
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
    // alignItems: "center",
    // justifyContent: "center",
  },
  listContainer: {
    width: Dimensions.get('window').width / 2 - 20,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 20,
  },
  imageContainer: {
    margin: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
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
    backgroundColor: '#62513E',
    padding: 10,
    margin: 15,
    borderRadius: 10
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  }
});
