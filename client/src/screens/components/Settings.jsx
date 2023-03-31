import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { Feather, AntDesign } from "react-native-vector-icons";
import PrimaryButton from "./PrimaryButton";
const Settings = ({ setModalSetActive }) => {
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
                minimumTrackTintColor="#898A8D"
                maximumTrackTintColor="#898A8D"
                thumbTintColor="#898A8D"
              />
              <Text>Musica</Text>
              <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#898A8D"
                maximumTrackTintColor="#898A8D"
                thumbTintColor="#898A8D"
              />
            </View>
          </View>

          <View style={styles.buttonsCont}>
            <PrimaryButton text="LIBERAR MASCOTA" />
            <PrimaryButton text="SALIR DEL JUEGO" secondary={true} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Settings;
const styles = StyleSheet.create({
  capo: { backgroundColor: "#4C4C4EC4" },
  container: {
    display: "flex",
    // alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 0,
    top: 50,
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
  },
  title: {
    fontSize: 20,
    marginLeft: 10,
  },

  buttonsCont: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // marginBottom: 20,
  },
});
