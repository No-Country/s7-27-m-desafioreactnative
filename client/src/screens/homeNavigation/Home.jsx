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
        {/* Menu Money */}
        <View>
          <View></View>
          <View></View>
        </View>
        {/* Menu Shopp */}
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
        {/* Personaje */}
        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../authNavigation/pou.png')}
          style={{width:255, height: 313, top:80 }}
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
    backgroundColor: '#FFFFFF',
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent:'center',
    alignItems: 'center',
  },

//Settings
  containerMenu: {
    alignItems: "flex-end",
    margin: 12,
  },
  buttonMenu: {
    marginVertical:5,
    backgroundColor: '#DADADA',
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
  containerActions:{
    bottom:25,
    gap: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    zIndex:999
  }, 
  buttonAction:{
    backgroundColor: '#FFFFFF',
    width: 55,
    height: 55,
    borderRadius: 50,
    justifyContent:'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  }

});
export default Home;
