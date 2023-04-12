import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import Settings from "../components/Settings";

import Mood from "../components/Mood";

const Home = () => {
  const route = useRoute();
  const { nombre, imagenSeleccionada1, imagenSeleccionada2, imagenOpcional } =
    route.params;
  const [modalSetActive, setModalSetActive] = useState(false);

  const navigation = useNavigation();

  let imagenSeleccionada = null;
  if (imagenSeleccionada1) {
    imagenSeleccionada = require("../assets/gato_normal.png");
  } else if (imagenSeleccionada2) {
    imagenSeleccionada = require("../assets/perro.png");
  } else {
    imagenSeleccionada = imagenOpcional;
  }

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
              <View style={styles.carga2}></View>
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
        <View style={styles.containerscroll}>
        <ScrollView
        horizontal={true}
        pagingEnabled={true}
        maximumZoomScale={2}
        minimumZoomScale={1}
      >
      <Image
          style={styles.image}
          source={require('./fondo1.png')}
      />
        </ScrollView>

        </View>
        <Image
          source={imagenSeleccionada}
          style={{ width: 250, height: 305, bottom: "-15%", left: "18%" }}
        />
      </View>

      {/* Menu Acciones */}
      <View style={styles.containerEnd}>
        <View style={styles.containerActions}>
          <Mood/>

          {/* <TouchableOpacity style={styles.buttonAction}>
            <View>
              <Image source={require("./comer.png")} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAction}>
            <View>
              <Image source={require("./bañar.png")} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAction}>
            <View>
              <Image source={require("./curar.png")} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAction}>
            <View>
              <Image source={require("./dormir.png")} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonAction}
            onPress={() => navigation.navigate("Play")}
          >
            <View>
              <Image source={require("./jugar.png")} />
            </View>
          </TouchableOpacity> */}
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
    height: 560,
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
    width: 110,
    height: 24.5,
    top: 7,
    right: 150,
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
    height: 60,
    width: 400,
    position: "absolute",
    top: "91%",
    right: "0%",
  },
  containerActions: {
    bottom: 23,
    gap: 12,
    flexDirection: "row",
    justifyContent: "center",
    zIndex: 999,
    position: 'relative'
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
