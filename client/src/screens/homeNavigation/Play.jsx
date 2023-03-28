import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
} from "react-native-vector-icons";
const Play = ({ coins = 100 }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <View style={styles.circlesleft}>
          <View style={styles.circles}></View>
          <View style={styles.circles}></View>
          <View style={styles.circles}></View>
          <View style={styles.circles}></View>
          <View style={styles.circles}>
            <MaterialIcons name="attach-money" size={16} />
          </View>
        </View>
        <View style={styles.topbarleft}>
          <View style={styles.pigcircle}>
            <MaterialCommunityIcons name="piggy-bank-outline" size={24} />
          </View>
          <Text style={styles.coins}>{coins}</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.gamecontainer}></View>
      </View>

      <TouchableOpacity style={styles.footer}>
        <MaterialIcons name="exit-to-app" size={35} style={styles.exit} />
      </TouchableOpacity>
    </View>
  );
};

export default Play;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  topbar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    top: 30,
    backgroundColor: "#EAEAEA",
    height: "8%",
    paddingHorizontal: 20,
  },
  circlesleft: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topbarleft: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 25,
    borderRadius: 100,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "black",
    marginHorizontal: 2,
  },
  topbarleft: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 100,
    height: 35,
    width: 120,
  },
  pigcircle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 100,
    width: 35,
    height: 35,
    marginLeft: -2,
    backgroundColor: "#D2D2D2",
  },
  coins: {
    marginRight: 10,
  },
  body: {
    backgroundColor: "#D9D9D9",
    height: "100%",
    width: "100%",
    zIndex: -10,
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
  },
  gamecontainer: {
    height: "70%",
    width: "80%",
    backgroundColor: "white",
    marginTop: 60,
  },
  footer: {
    height: 60,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    marginTop: -130,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  exit: {
    marginTop: -20,
    marginRight: 40,
  },
});
