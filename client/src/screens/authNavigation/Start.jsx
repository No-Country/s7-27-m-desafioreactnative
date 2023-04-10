import { useState } from "react";
import { StyleSheet, Text, View, Modal, ImageBackground } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import LogIn from "./LogIn";
import Register from "./Register";

const Start = () => {
  const [modalLoginVisible, setModalLoginVisible] = useState(false);
  const [modalRegisterVisible, setModalRegisterVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalLoginVisible}
        onRequestClose={() => {
          setModalLoginVisible(!modalLoginVisible);
        }}
      >
        <LogIn setModalLoginVisible={setModalLoginVisible}/>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalRegisterVisible}
        onRequestClose={() => {
          setModalRegisterVisible(!modalRegisterVisible);
        }}
      >
        <Register setModalRegisterVisible={setModalRegisterVisible}/>
      </Modal>
      <View>
        <View style={styles.whitebox}></View>
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
    marginTop: 40,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },

  whitebox: {
    backgroundColor: "white",
    height: 260,
    width: 260,
    marginBottom: 50,
    marginTop: -40,
  },
  btncontainer: {
    width: "90%",
  },
  buttonClose: {
    width: 140,
    backgroundColor: "#A8A8A8",
  },
});
