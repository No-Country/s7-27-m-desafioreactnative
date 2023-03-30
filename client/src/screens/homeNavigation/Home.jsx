import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Constants from "expo-constants";

const Home = () => {
  return (
    <View style={styles.containerPrincipal}>
      {/* Inicio */}
      <View style={styles.containerStart}>
        <Text style={styles.textName}> POU </Text>
        <TouchableOpacity style={styles.buttonPersonaje}>
          <Image source={require("./personajes.png")} />
        </TouchableOpacity>
      </View>

      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {/* Menu Level - Coins */}
          <View style={{ alignItems: "flex-start", margin: 13 }}>
            <View style={styles.level}>
              <Text style={styles.textLevel}>10</Text>
              <Image source={require("./level.png")} style={{ zIndex: 100 }} />
              <View style={styles.carga}></View>
              <View style={styles.carga2}></View>
            </View>
            <View style={styles.level}>
              <Image source={require("./cerdo.png")} style={{ zIndex: 130, top:11, left:26}} />
              <Image source={require("./coins.png")} style={{ zIndex: 100, top:7, }} />
              <Text style={styles.textCoins}>100</Text>
              <View style={styles.carga3}></View>
            </View>
          </View>
          {/* Menu Shopp - Setting */}
          <View style={styles.containerMenu}>
            <TouchableOpacity style={styles.buttonMenu}>
              <Image
                source={require("./shopping-bag.png")}
                style={{ justifyContent: "center", alignItems: "center" }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonMenu}>
              <Image
                source={require("./settings.png")}
                style={{ justifyContent: "center", alignItems: "center" }}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Personaje */}
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Image
            source={require("../authNavigation/pou.png")}
            style={{ width: 255, height: 313, top: 80 }}
          />
        </View>
      </View>

      {/* Menu Acciones */}
      <View style={styles.containerEnd}>
        <View style={styles.containerActions}>
          <TouchableOpacity style={styles.buttonAction}>
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
          <TouchableOpacity style={styles.buttonAction}>
            <View>
              <Image source={require("./jugar.png")} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Inicio
  containerPrincipal: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fff",
    height: 800,
    width: "auto",
  },
  containerStart: {
    backgroundColor: "#D9D9D9",
    height: 58,
    paddingVertical: 10,
    paddingEnd: 16,
    gap: 120,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  textName: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 14,
    paddingVertical: 10,
  },
  buttonPersonaje: {
    backgroundColor: "#FFFFFF",
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  //Level - Coins
  level: {
    flexDirection: "row",
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
    backgroundColor: "#D9D9D9",
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
    left:55,
  },
  coins: {},

  //Shopp-Settings
  containerMenu: {
    alignItems: "flex-end",
    margin: 13,
  },
  buttonMenu: {
    marginVertical: 5,
    backgroundColor: "#DADADA",
    borderRadius: 12,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  containerEnd: {
    top: 180,
    backgroundColor: "#D9D9D9",
    height: 58,
  },
  containerActions: {
    bottom: 25,
    gap: 12,
    flexDirection: "row",
    justifyContent: "center",
    zIndex: 999,
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
