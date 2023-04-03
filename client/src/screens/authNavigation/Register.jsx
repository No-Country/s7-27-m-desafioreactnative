import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions/authActions";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [tel, setTel] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    username: "",
    password: "",
    nombre: "",
    nacimiento: "",
    telefono: "",
  });

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    if (username === "") {
      setErrorMessage.username("Por favor ingrese su email");
    }
    if (password === "") {
      setErrorMessage.password("Por favor ingrese una contraseña");
    }
    if (nombre === "") {
      setErrorMessage.nombre("Por favor ingrese su nombre completo");
    }
    if (fecha === "") {
      setErrorMessage.nacimiento("Por favor ingrese su fecha de nacimiento");
    }
    if (tel === "") {
      setErrorMessage.telefono("Por favor ingrese su numero de telefono");
    }
    dispatch(
      registerUser({
        username: username,
        password: password,
        nombre: nombre,
        nacimiento: fecha,
        telefono: tel,
      })
    );
    // navigation.navigate("Onboarding1");
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={{ alignSelf: "flex-start", marginLeft: "10%", padding: 10 }}>
        Registro
      </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Nombre completo"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setNombre(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Fecha de Nacimiento"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setFecha(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Telefono"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setTel(text)}
        />
      </View>
      <PrimaryButton text="CREAR CUENTA" handler={(e) => handleSubmit(e)} />
      <TouchableOpacity>
        <Text style={styles.loginText}>Acepto los terminos y condiciones</Text>
      </TouchableOpacity>
      <View
        style={{ flexDirection: "row", alignItems: "center", width: "80%" }}
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
          // navigation.navigate("Register");
        }}
      />
      <PrimaryButton
        text="Continuar con Facebook"
        handler={() => {
          // navigation.navigate("Register");
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
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
});

export default Register;
