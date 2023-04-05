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
import { registerUser } from "../../redux/actions/authActions";
import { useNavigation } from "@react-navigation/native";
import { error, fondo, primario, texto1 } from "../../config/constants";
import CheckBox from "expo-checkbox";

const Register = () => {
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
  console.log("...........................");
  console.log(auth.userData);
  console.log(auth.error);
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

    dispatch(
      registerUser({
        username: username,
        password: password,
        nombre: "Pepe",
        nacimiento: "1988-09-18",
        telefono: 541234567890,
      })
    );
    navigation.navigate("Onboarding1");


    // AGREGAR COMPROBACIÓN DE REGISTER EXITOSO
    // if ((await auth.userData) !== null) {
    //   navigation.navigate("Onboarding1");
    // } else {
    //   console.log(`Error: ${auth.error}`);
    // }
  };
  return (
    <View style={styles.transparent}>
      <View style={styles.container}>
        <Text style={styles.title}>Registro</Text>
        <View style={styles.inputView}>
          <Text style={styles.placeholder}>Email</Text>

          <TextInput
            style={[
              styles.inputText,
              { backgroundColor: isFocused ? primario : fondo },
              { color: isFocused ? fondo : texto1 },
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
              { backgroundColor: isFocused2 ? primario : fondo },
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
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <View style={{ flexDirection: "row", gap: 6 }}>
            <Text style={styles.loginText}>Acepto los</Text>
            <Text style={{ color: "#2C74F6" }}>términos y condiciones</Text>
          </View>
        </TouchableOpacity>
        <PrimaryButton text="CREAR CUENTA" handler={(e) => handleSubmit(e)} />

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
    // backgroundColor:"red",
    width: "72%",
    textAlign: "center",
  },
});

export default Register;

// const [nombre, setNombre] = useState("");
// const [fecha, setFecha] = useState("");
// const [tel, setTel] = useState("");

// if (nombre === "") {
//   setErrorMessage.nombre("Por favor ingrese su nombre completo");
// }
// if (fecha === "") {
//   setErrorMessage.nacimiento("Por favor ingrese su fecha de nacimiento");
// }
// if (tel === "") {
//   setErrorMessage.telefono("Por favor ingrese su numero de telefono");
// }

// nombre: nombre,
// nacimiento: fecha,
// telefono: tel,

{
  /* <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Nombre completo"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setNombre(text)}
        />
        {errorMessage.nombre && (
          <Text style={{ color: "red" }}>{errorMessage.nombre}</Text>
        )}
      </View> */
}
{
  /* <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Fecha de Nacimiento"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setFecha(text)}
        />
        {errorMessage.nacimiento && (
          <Text style={{ color: "red" }}>{errorMessage.nacimiento}</Text>
        )}
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Telefono"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setTel(text)}
        />
        {errorMessage.telefono && (
          <Text style={{ color: "red" }}>{errorMessage.telefono}</Text>
        )}
      </View> */
}

// ///////////////////////////////////////////////////////

{
  /* <View style={styles.inputView}>
          <Text style={styles.placeholder}>Email</Text>
          <TextInput
            style={styles.inputText}
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setUsername(text)}
          />
          {errorMessage.username && (
            <Text style={{ color: "red" }}>{errorMessage.username}</Text>
          )}
        </View>

        <View style={styles.inputView}>
          <Text style={styles.placeholder}>Password</Text>

          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setPassword(text)}
            onFocus={() => setIsFocused(true)}
          />
          {errorMessage.password && (
            <Text style={{ color: "red" }}>{errorMessage.password}</Text>
          )}
          </View> */
}
