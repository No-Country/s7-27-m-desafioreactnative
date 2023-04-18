import { Text, View, TouchableOpacity, StyleSheet, Modal } from "react-native";
import Slider from "@react-native-community/slider";
import { Feather, AntDesign } from "react-native-vector-icons";
import PrimaryButton from "./PrimaryButton";
import { useState } from "react";
import PopupFree1 from "./PopupFree1";
import { primario } from "../../config/constants";
import { useNavigation } from "@react-navigation/native";
const Settings = ({ setModalSetActive }) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const navigator = useNavigation();

  return (
    <View style={styles.capo}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setModalSetActive(false)}
          style={styles.xtop}
        >
          <AntDesign name="close" size={20} />
        </TouchableOpacity>

        <View style={styles.center}>
          <View>
            <View style={styles.titleCont}>
              <Feather name="settings" size={25} />
              <Text style={styles.title}>Ajustes</Text>
            </View>
            <View>
              <Text>Sonido</Text>
              <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor={primario}
                maximumTrackTintColor="#898A8D"
                thumbTintColor={primario}
              />
              <Text>Musica</Text>
              <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor={primario}
                maximumTrackTintColor="#898A8D"
                thumbTintColor={primario}
              />
            </View>
          </View>

          <View style={styles.buttonsCont}>
            <PrimaryButton
              text="LIBERAR MASCOTA"
              handler={() => setIsModalActive(true)}
            />
            <PrimaryButton
              text="SALIR DEL JUEGO"
              secondary={true}
              handler={() => navigator.navigate("Loading")}
            />
          </View>
        </View>
      </View>
      <Modal visible={isModalActive} transparent={false}>
        <PopupFree1 setIsModalActive={setIsModalActive} />
      </Modal>
    </View>
  );
};

export default Settings;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    // alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 0,
    top: 90,
    borderWidth: 1.3,
    borderColor: "black",
    height: "100%",
    padding: 20,
  },
  xtop: {
    // position: "absolute",
    // right: 20,
    // top: 10,
    alignItems: "flex-end",
  },
  center: {
    height: "90%",
    padding: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  titleCont: {
    flexDirection: "row",
    marginBottom: 40,
    alignItems: "center",
    fontWeight: "900",
  },
  title: {
    fontSize: 20,
    marginLeft: 10,
  },

  buttonsCont: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 50,
  },
});
