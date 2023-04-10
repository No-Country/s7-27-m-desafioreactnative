import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import exitdoor from "../../../assets/exitdoor.png";
import patitasplay from "../assets/patitasplay.png";
import money from "../../../assets/money.png";
import Memorama from "../components/Memorama/Memorama";
import { useState } from "react";
import { primario, terciario } from "../../config/constants";
import coin from "../assets/coin.png";
import arrowleft from "../assets/arrowleft.png";

const Play = ({ coins = 100 }) => {
  const navigation = useNavigation();
  const [score, setScore] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={arrowleft} />
        </TouchableOpacity>
        <View style={styles.circlesleft}>
          <View style={styles.circles}>
            {score > 0 && <FontAwesome name="circle" size={20} />}
          </View>
          <View style={styles.circles}>
            {score > 1 && <FontAwesome name="circle" size={20} />}
          </View>
          <View style={styles.circles}>
            {score > 2 && <FontAwesome name="circle" size={20} />}
          </View>
          <View style={styles.circles}>
            {score > 3 && <FontAwesome name="circle" size={20} />}
          </View>
          <Image source={coin} />
        </View>
        <View style={styles.topbarleft}>
          <View style={styles.pigcircle}>
            <Image source={coin} style={styles.coin} />
          </View>
          <Text style={styles.coins}>{coins}</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.gamecontainer}>
          <Memorama score={score} setScore={setScore} />
        </View>
      </View>

      <View style={styles.patitas}>
        <Image source={patitasplay} style={{ width: "100%" }} />
      </View>
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
    backgroundColor: primario,
    height: "8%",
    paddingHorizontal: 15,
  },
  circlesleft: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: -45,
  },
  circles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 23.6,
    height: 23.6,
    borderRadius: 100,
    borderStyle: "solid",
    borderWidth: 2.5,
    borderColor: "white",
    marginHorizontal: 1.5,
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
    backgroundColor: "white",
  },
  pigcircle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 100,
    width: 30,
    height: 30,
    marginLeft: -2,
  },
  coin: {
    height: 35,
    width: 35,
  },
  coins: {
    marginRight: 10,
  },
  body: {
    backgroundColor: terciario,
    height: "100%",
    width: "100%",
    zIndex: -10,
    display: "flex",
    alignItems: "center",
  },
  gamecontainer: {
    height: "75%",
    width: "93%",
    backgroundColor: "white",
    marginTop: 40,
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
  patitas: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
