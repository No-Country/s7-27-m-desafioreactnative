import { StyleSheet, View } from "react-native";
import left from "../assets/negra.png";
import center from "../assets/naranja.png";
import right from "../assets/celeste.png";
import * as Animatable from "react-native-animatable";
import { terciario } from "../../config/constants";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import kokoro from "../assets/logokokoro.gif";

const Loading = ({ destino = "Start" }) => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(`${destino}`);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <Image src={kokoro} />
      <View style={styles.patas}>
        <Animatable.Image
          animation="slideInLeft"
          duration={1000}
          delay={100}
          source={left}
          style={styles.p1}
        />
        <Animatable.Image
          animation="slideInUp"
          duration={1000}
          delay={100}
          source={center}
          style={styles.p2}
        />
        <Animatable.Image
          animation="slideInRight"
          duration={1000}
          delay={100}
          source={right}
          style={styles.p3}
        />
      </View>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: terciario,
    display: "flex",
    justifyContent: "flex-end",
  },
  patas: {
    display: "flex",
    flexDirection: "row",
  },
  p1: {
    right: 180,
  },
  p2: {
    position: "absolute",
    top: 190,
  },
  p3: {
    right: 320,
  },
});
