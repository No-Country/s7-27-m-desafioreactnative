import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  ImageBackground,
  Image,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import LogIn from "./LogIn";
import Register from "./Register";
import fondoinicio from "../assets/fondoinicio.png";
import arbder from "../assets/arbustoder.png";
import arbizq from "../assets/arbustoizq.png";
const Start = () => {
  const [modalLoginVisible, setModalLoginVisible] = useState(false);
  const [modalRegisterVisible, setModalRegisterVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={fondoinicio} style={styles.fondoinicio} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalLoginVisible}
        onRequestClose={() => {
          setModalLoginVisible(!modalLoginVisible);
        }}
      >
        <LogIn setModalLoginVisible={setModalLoginVisible} />
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalRegisterVisible}
        onRequestClose={() => {
          setModalRegisterVisible(!modalRegisterVisible);
        }}
      >
        <Register setModalRegisterVisible={setModalRegisterVisible} />
      </Modal>
      <View style={styles.arbustos}>
        <Image source={arbder} style={styles.arbder} />
        <Image source={arbizq} style={styles.arbizq} />
      </View>
      <View style={styles.btncontainer}>
        <PrimaryButton
          handler={() => setModalRegisterVisible(true)}
          text="REGISTRARSE"
        ></PrimaryButton>
        <PrimaryButton
          handler={() => setModalLoginVisible(true)}
          secondary={true}
          text="INGRESAR"
        ></PrimaryButton>
      </View>
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    justifyContent: "flex-end",
  },
  fondoinicio: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  arbustos: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "90%",
  },
  arbder: {
    position: "absolute",
    right: 0,
    bottom: 180,
  },
  arbizq: {
    position: "absolute",
    left: 0,
    bottom: 180,
  },

  btncontainer: {
    width: "90%",
    bottom: 60,
  },
});
