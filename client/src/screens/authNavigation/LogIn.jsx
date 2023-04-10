import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  error,
  focus,
  fondo,
  fondo2,
  primario,
  secundario,
  terciario,
  texto1,
} from "../../config/constants";
import x from "../assets/x.png";

const Login = ({ setModalLoginVisible }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    username: "",
    password: "",
  });
  const auth = useSelector((state) => state.auth);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    if (username === "") {
      setErrorMessage.username("Por favor ingrese su email");
    }
    if (password === "") {
      setErrorMessage.password("Por favor ingrese una contraseña");
    }
    if (!toggleCheckBox) {
      setErrorMessage.checkbox = "Debe aceptar los términos y condiciones";
    }

    navigation.navigate("Onboarding1");
  };
  return (
    <View style={styles.capo}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setModalLoginVisible(false)}
          style={{ alignSelf: "flex-end" }}
        >
          <Image source={x} />
        </TouchableOpacity>
        <Text style={styles.title}>Bienvenido!</Text>
        <View style={styles.inputView}>
          <Text style={styles.placeholder}>Email</Text>

          <TextInput
            style={[
              styles.inputText,
              { backgroundColor: isFocused ? focus : fondo },
              { color: isFocused ? texto1 : texto1 },
            ]}
            value={username}
            onChangeText={(text) => setUsername(text)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {errorMessage.username && (
            <Text style={styles.error}>{errorMessage.username}</Text>
          )}
        </View>

        <View style={styles.inputView}>
          <Text style={styles.placeholder}>Password</Text>
          <TextInput
            secureTextEntry
            style={[
              styles.inputText,
              { backgroundColor: isFocused2 ? focus : fondo },
              { color: isFocused2 ? fondo : texto1 },
            ]}
            value={password}
            onChangeText={(text) => setPassword(text)}
            onFocus={() => setIsFocused2(true)}
            onBlur={() => setIsFocused2(false)}
          />

          {errorMessage.password && (
            <Text style={styles.error}>{errorMessage.password}</Text>
          )}
        </View>

        <TouchableOpacity style={styles.terms}>
          <View style={{ flexDirection: "row", gap: 6 }}>
            <Text style={{ color: "#2C74F6" }}>Olvidé mi contraseña</Text>
          </View>
        </TouchableOpacity>
        <PrimaryButton text="INGRESAR" handler={(e) => handleSubmit(e)} />

        <View
          style={{ flexDirection: "row", alignItems: "center", width: "80%" }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
          <View>
            <Text style={{ width: 50, textAlign: "center" }}>o</Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        </View>
        <TouchableOpacity style={styles.btn3}>
          <Image
            source={require("../components/assets/google.png")}
            style={styles.img}
          />
          <View style={styles.txtbtn}>
            <Text>Continuar con Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn3}>
          <Image
            source={require("../components/assets/facebook.png")}
            style={styles.img}
          />
          <View style={styles.txtbtn}>
            <Text>Continuar con Facebook</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  capo: { backgroundColor: "transparent" },
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 0,
    top: 200,
    borderWidth: 1.3,
    borderColor: "black",
    height: "100%",
    padding: 20,
  },
  title: {
    alignSelf: "flex-start",
    padding: 10,
    fontWeight: "600",
    fontSize: 20,
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
  },
  inputView: {
    width: "100%",
    height: 50,
    marginBottom: 20,
  },
  inputText: {
    height: 50,
    paddingLeft: 10,
    borderColor: texto1,
    borderWidth: 1,
    fontWeight: "600",
  },
  placeholder: {
    backgroundColor: fondo,
    position: "absolute",
    top: -10,
    left: 10,
    paddingHorizontal: 4,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "400",
    zIndex: 10,
    borderRadius: 5,
  },
  error: {
    width: "100%",
    color: error,
    textAlign: "right",
    top: -20,
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  terms: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    paddingBottom: 4,
  },

  loginBtn: {
    width: "90%",
    backgroundColor: "#fb5b5a",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "black",
  },
  btn3: {
    display: "flex",
    flexDirection: "row",
    width: "95%",
    height: 40,
    alignItems: "center",
    borderRadius: 60,
    margin: 10,
    borderWidth: 1,
  },
  img: {
    marginHorizontal: 15,
  },
  txtbtn: {
    display: "flex",
    alignItems: "center",
    width: "72%",
    textAlign: "center",
  },
});

export default Login;
