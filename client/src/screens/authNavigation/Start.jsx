import { useState } from "react";
import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import LogIn from "./LogIn";
import Register from "./Register"

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
          // Alert.alert("Login Modal has been closed.");
          setModalLoginVisible(!modalLoginVisible);
        }}
      >
        <LogIn />
        {/* <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalLoginVisible(!modalLoginVisible)}
        >
          <Text style={styles.textStyle}>Regresar</Text>
        </Pressable> */}
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalRegisterVisible}
        onRequestClose={() => {
          // Alert.alert("Register Modal has been closed.");
          setModalRegisterVisible(!modalRegisterVisible);
        }}
      >
        <Register />
        {/* <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalRegisterVisible(!modalRegisterVisible)}
        >
          <Text style={styles.textStyle}>Regresar</Text>
        </Pressable> */}
      </Modal>
      <View>
        <View style={styles.whitebox}>
          <Text style={{ color: "lightgray" }}>
            Acá iría una imagen o logo me imagino
          </Text>
        </View>
      </View>
      <View>
        <Pressable style={styles.button} onPress={() => setModalLoginVisible(true)}>
          <Text style={styles.textStyle}>INGRESAR</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setModalRegisterVisible(true)}>
          <Text style={styles.textStyle}>REGISTRARSE</Text>
        </Pressable>
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
    backgroundColor: "#D9D9D9",
    height: "100%",
  },
  whitebox: {
    backgroundColor: "white",
    height: 260,
    width: 260,
    marginBottom: 50,
    marginTop: -40,
  },
  button: {
    display: "flex",
    backgroundColor: "#A8A8A8",
    width: 283,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    margin: 10,
  },
  buttonClose: {
    width: 140,
    backgroundColor: '#A8A8A8',
  }
});
