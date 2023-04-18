import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import PrimaryButton from "./PrimaryButton";
import { AntDesign } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

const PopupFree1 = ({ setIsModalActive }) => {
  const navigator = useNavigation();
  return (
    <View style={styles.capo}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setIsModalActive(false)}
          style={styles.xtop}
        >
          <AntDesign name="close" size={20} />
        </TouchableOpacity>
        <View style={styles.msgs}>
          <Text style={styles.msg1}>
            ESTÁS SEGURO DE QUE DESEAS LIBERAR A TU MASCOTA?
          </Text>
          <Text style={styles.msg2}>ESTA ACCIÓN NO SE PUEDE DESHACER</Text>
        </View>
        <View style={styles.buttons}>
          <PrimaryButton
            text="NO, VOLVER AL JUEGO"
            handler={() => setIsModalActive(false)}
            secondary={true}
          />
          <PrimaryButton
            text="SI, QUIERO LIBERAR A MI MASCOTA"
            handler={() => navigator.navigate("Loading")}
          />
        </View>
      </View>
    </View>
  );
};

export default PopupFree1;

const styles = StyleSheet.create({
  capo: { backgroundColor: "#4C4C4EC4", height: "100%" },
  container: {
    width: "80%",
    height: "45%",
    display: "flex",
    flexDirection: "column",
    paddingBottom: 0,
    top: 50,
    borderWidth: 1.3,
    borderColor: "black",
    margin: 20,
    alignSelf: "center",
    backgroundColor: "white",
  },
  xtop: {
    alignItems: "flex-end",
    padding: 10,
  },
  msgs: {
    alignItems: "center",
    marginVertical: 30,
    marginHorizontal: 40,
    fontWeight: "700",
  },
  msg1: {
    textAlign: "center",
    marginBottom: 20,
  },
  msg2: {
    textAlign: "center",
    paddingHorizontal: 20,
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
});
