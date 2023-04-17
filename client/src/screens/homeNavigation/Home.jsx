import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Settings from "../components/Settings";
import Mood from "./Mood";
import { useNavigation } from "@react-navigation/native";


const Home = () => {
  const navigation=useNavigation();
  const route = useRoute();
  const { nombre, imagenSeleccionada1, imagenSeleccionada2, imagenOpcional, isNight} = route.params;
  const [modalSetActive, setModalSetActive] = useState(false);
  // const navigation = useNavigation();

  // const [datoActualizado, setDatoActualizado] = useState(coin);

  // useEffect(() => {
  //   const intervalo = setInterval(() => {
  //     // Aquí puedes actualizar el dato como desees
  //     setDatoActualizado(datoActualizado + 1);
  //   }, 1000);

  //   return () => clearInterval(intervalo);
  // }, [datoActualizado]);

  let imagenSeleccionada = null;
if (imagenSeleccionada1) {
  imagenSeleccionada = require('../assets/cat_rest.gif');
} else if (imagenSeleccionada2) {
  imagenSeleccionada = require('../assets/perro.png');
} else {
  imagenSeleccionada = imagenOpcional
}
const handleOpacity = () => {
  console.log(isNight);
  return isNight && { opacity: 0.5, backgroundColor: 'blue' };
};
const cantidad = 100;
const [cargas, setCargas] = useState(cantidad/2.76); // el 2.76 es lo que se tiene que dividir para que se muestre bien la barra
// solo se ve exacto con el 100 con los demas numeros no pero que mas da xd
  return (
    <View style={styles.containerPrincipal}>
      {/* Inicio */}
      <View style={styles.containerStart}>
        <Text style={styles.textName}> {nombre} </Text>
      </View>
      <TouchableOpacity
        style={styles.buttonPersonaje}
        onPress={() => navigation.navigate("SwapPet")}
      >
        <Image source={require("../../../assets/personajes.png")} />
      </TouchableOpacity>

      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            zIndex: 10,
          }}
        >
          {/* Menu Level - Coins */}
          <View style={{ alignItems: "flex-start", marginTop: 13 }}>
            <View style={styles.level}>
              <Text style={styles.textLevel}>10</Text>
              <Image
                source={require("../../../assets/level.png")}
                style={{ zIndex: 100 }}
              />
              <View style={styles.carga}></View>
              <View style={[styles.carga2, { width: `${cargas}%` }]}></View>
            </View>
            <View style={styles.level1}>
              <Image
                source={require("../../../assets/coin.png")}
                style={{ zIndex: 100, top: 7 }}
              />
              <Text style={styles.textCoins}>100</Text>
              <View style={styles.carga3}></View>
            </View>
          </View>
          {/* Menu Shopp - Setting */}
          <View style={styles.containerMenu}>
            <TouchableOpacity
              style={styles.buttonMenu}
              onPress={() => navigation.navigate("TiendaInventario")}
            >
              <Image
                source={require("../../../assets/shopping-bag.png")}
                style={{ justifyContent: "center", alignItems: "center" }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonMenu}
              onPress={() => setModalSetActive(true)}
            >
              <Image
                source={require("../../../assets/settings.png")}
                style={{ justifyContent: "center", alignItems: "center" }}
              />
            </TouchableOpacity>
            {/* Modal Settings */}
            <Modal
              visible={modalSetActive}
              animationType="slide"
              transparent={true}
            >
              <Settings setModalSetActive={setModalSetActive} />
            </Modal>
          </View>
        </View>
        {/* Personaje */}
        <View style={[styles.containerscroll,handleOpacity() ]}>
        <ScrollView
        horizontal={true}
        pagingEnabled={true}
        maximumZoomScale={2}
        minimumZoomScale={1}
      >
      <Image style={styles.image} source={require("./fondo1.png")}/>
        </ScrollView>

        </View>
        <Image
          source={imagenSeleccionada}
          style={{ width: 250, height: 305, bottom: "-30%", left: "18%" }}
        />
      </View>
      {/* </View> */}

      {/* Menu Acciones */}
      <View style={styles.containerEnd}>
        <View style={styles.containerActions}>
          <Mood nombre={nombre} imagenSeleccionada={imagenSeleccionada} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //cambio hecho por ray
  containerscroll: {
    position: "absolute",
  },
  image: {
    width: 1500,
    height: 650,
  },
  // Inicio
  containerPrincipal: {
    // marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fff",
    height: 800,
    width: "auto",
  },
  containerStart: {
    backgroundColor: "#EF7F79",
    height: 58,
    paddingVertical: 10,
    paddingEnd: 16,
    gap: 120,
    justifyContent: "center",
  },
  textName: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 24,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: 0.15,
    marginTop: 4,
    color: "#FFFFFF",
  },
  buttonPersonaje: {
    backgroundColor: "#FFFFFF",
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "1.5%",
    right: "3.5%",
  },
  //Level - Coins
  level: {
    flexDirection: "row",
  },
  level1: {
    flexDirection: "row",
    marginLeft: 20,
  },
  textLevel: {
    zIndex: 150,
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: 500,
    top: 6.5,
    left: 26,
  },
  carga: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000000",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    width: 125,
    height: 28,
    top: 5,
    right: 13,
  },
  carga2: {
    backgroundColor: "#F5AFB4",
    height: 24.5,
    top: 7,
    right: 130,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  carga3: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000000",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    width: 108,
    height: 30,
    top: 7,
    right: 43,
  },
  textCoins: {
    zIndex: 150,
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: 500,
    top: 11,
    left: 55,
  },
  coins: {},

  //Shopp-Settings
  containerMenu: {
    alignItems: "flex-end",
    margin: 13,
  },
  buttonMenu: {
    marginVertical: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    marginTop: 1,
    marginBottom: 2,
    marginLeft: 0,
    marginRight: 0,
  },
  containerEnd: {
    backgroundColor: "#F5AFB4",
    height: 70,
    width: "100%",
    position: "absolute",
    top: "91%",
    width: "100%",
    position: "absolute",
    top: "91%",
  },
  containerActions: {
    bottom: "5%",
    gap: 12,
    flexDirection: "row",
    justifyContent: "center",
    zIndex: 999,
    position: "relative",
  },
  buttonAction: {
    backgroundColor: "#FFFFFF",
    width: 55,
    height: 55,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});
export default Home;
