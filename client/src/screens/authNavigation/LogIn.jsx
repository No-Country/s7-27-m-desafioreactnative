import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const LogIn = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [modalRecoverPassVisible, setModalRecoverPassVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalRecoverPassVisible}
        onRequestClose={() => {
          // Alert.alert("Login Modal has been closed.");
          setModalRecoverPassVisible(!modalRecoverPassVisible);
        }}
      >
        <View style={styles.container}>
          <Text style={styles.Text}>Recupera tu contraseña</Text>

          <Text style={styles.Text}>
            Para continuar necesitamos que ingreses el e-mail con el que te
            registraste. Al finalizar, te enviaremos un mail para que puedas
            crear una nueva contraseña.
          </Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Email..."
              placeholderTextColor="#003f5c"
              onChangeText={(text) => setUsername({ username: text })}
            />
          </View>

          <PrimaryButton
            text="CONTINUAR"
            handler={() => {
              // navigation.navigate("LogIn");
            }}
          />

          <PrimaryButton
            text="VOLVER"
            handler={() => {
              // navigation.navigate("LogIn");
            }}
          />
        </View>
      </Modal>

      <Text style={{ alignSelf: "flex-start", marginLeft: "10%", padding: 10 }}>
        Bienvenido
      </Text>

      <Text style={styles.logo}>Care U Pet</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setUsername({ username: text })}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPassword({ password: text })}
        />
      </View>
      <PrimaryButton
        text="INGRESAR"
        handler={() => {
          navigation.navigate("Onboarding1");
        }}
      />
      <TouchableOpacity onPress={() => setModalRecoverPassVisible(true)}>
        <Text style={styles.loginText}>Olvidé mi contraseña</Text>
      </TouchableOpacity>
      <View
        style={{ flexDirection: "row", alignItems: "center", width: "90%" }}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        <View>
          <Text style={{ width: 50, textAlign: "center" }}>o</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
      </View>
      <PrimaryButton
        text="Continuar con Google"
        handler={() => {
          // navigation.navigate("LogIn");
        }}
      />
      <PrimaryButton
        text="Continuar con Facebook"
        handler={() => {
          // navigation.navigate("LogIn");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#a8a",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  loginBtn: {
    width: "90%",
    backgroundColor: "#fb5b5a",
    // borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "black",
  },
  button: {
    // display: "flex",

    backgroundColor: "#A8A8A8",
    width: 283,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    margin: 10,
  },
});

export default LogIn;
