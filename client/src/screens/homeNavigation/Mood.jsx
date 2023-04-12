import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  feedPet,
  getPet,
  setPetHunger,
  updatePet,
} from "../../redux/actions/petActions";
import { URL_BACK } from "../../config";
import axios from "axios";
import Circulo from "./Circulo";


const Mood = ({nombre}) => {
  const [edad, setEdad] = useState(1); // nivel de edad inicial
  const [sueno, setSueno] = useState(50); // nivel de sueño inicial
  const [energia, setEnergia] = useState(50); // nivel de hambre inicial
  const [salud, setSalud] = useState(50); // nivel de salud inicial
  const [felicidad, setFelicidad] = useState(50); // nivel de felicidad inicial
  const [higiene, setHigiene] = useState(50); // nivel de higiene inicial
  const [isSleeping, setIsSleeping] = useState(false); // esta durmiendo
  const [isEating, setisEating] = useState(false); // esta comiendo
  const [isBathing, setisBathing] = useState(false); // esta banandose
 
  
  useEffect(() => {
    const interval = setInterval(async () => {
      const pets = (await axios.get(`${URL_BACK}`)).data;
      
      console.log(pets);
    
      await axios.get(`${URL_BACK}/mascota/`)
        .then((response) => {
         ( sueno !== 0) && setSueno(response.caracteristicas.sueno - 2);
        })
        .then((response) => {
         ( energia !== 0) && setEnergia(response.data.caracteristicas.energia - 2);
        })
        .then((response) => {
          ( salud !== 0) && setSalud(response.data.caracteristicas.salud - 2);
        })
        .then((response) => {
          ( felicidad !== 0) && setFelicidad(response.data.caracteristicas.felicidad - 2);
        })
        .then((response) => {
          ( higiene !== 0) && setHigiene(response.data.caracteristicas.higiene - 2);
        })
        .catch(error =>error.message);


    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const navigation = useNavigation();
  const alimentar = () => {
    setEnergia((energia) => Math.min(energia + 10, 100));
    setisEating(() => !isEating)

    navigation.navigate("Home", { imagenOpcional: isEating ? require("../assets/gato_hamburguesa.png"): require("../assets/gato_normal.png"), nombre: nombre })
  } 
  const jugar = () => setFelicidad((felicidad) => Math.min(felicidad + 10, 100));
  const dormir = () => {
    setSueno((sueno) => Math.min(sueno + 10, 100))
    setIsSleeping(() => !isSleeping)
    
    navigation.navigate("Home", { imagenOpcional: isSleeping ? require("../assets/gatodurmiendo.png"): require("../assets/gato_normal.png"), nombre: nombre })
  };
  const lavar = () => {
    setHigiene((higiene) => Math.min(higiene + 10, 100));
    setisBathing(() => !isBathing)

    navigation.navigate("Home", { imagenOpcional: isBathing ? require("../assets/gato_bano.png"): require("../assets/gato_normal.png"), nombre: nombre })
  } 
  const curar = () => setSalud((saludenergia) => Math.min(salud + 10, 100));

  const getBarColor = (level) => {
    if (level >= 75) {
      return "blue";
    } else if (level >= 35) {
      return "yellow";
    } else {
      return "red";
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.levels}>
        <View style={styles.containerBar}>
          <View style={[styles.bar]}>
            <Circulo porcentaje={sueno}/>
            <TouchableOpacity  style={styles.buttonAction} onPress={dormir}>
              <View>
                <Image source={isSleeping ? require("../../../assets/dormir.png"): require("../../../assets/despertar.png") } />
              </View>
            </TouchableOpacity>
          </View>
          {/* <Text style={styles.level}>{sueno}</Text> */}
        </View>

        <View style={styles.containerBar}>
          <View style={[styles.bar]}>
          <Circulo porcentaje={energia}/>
            <TouchableOpacity style={styles.buttonAction} onPress={alimentar}>
              <View>
                <Image source={isEating ? require("../../../assets/comer.png"): require("../../../assets/comer.png")} />
              </View>
            </TouchableOpacity>
          </View>
          {/* <Text style={styles.level}>{energia}</Text> */}
        </View>

        <View style={styles.containerBar}>
          <View style={[styles.bar]}>
          <Circulo porcentaje={felicidad}/>
            <TouchableOpacity style={styles.buttonAction} onPress={jugar}>
              <View>
                <Image source={require("../../../assets/jugar.png")} />
              </View>
            </TouchableOpacity>
          </View>
          {/* <Text style={styles.level}>{felicidad}</Text> */}
        </View>

        <View style={styles.containerBar}>
          <View style={[styles.bar]}>
          <Circulo porcentaje={higiene}/>
            <TouchableOpacity style={styles.buttonAction} onPress={lavar}>
              <View>
                <Image source={isBathing ?  require("../../../assets/bañar.png") : require("../../../assets/bañar.png")} />
              </View>
            </TouchableOpacity>
          </View>
          {/* <Text style={styles.level}>{higiene}</Text> */}
        </View>

        <View style={styles.containerBar}>
          <View style={[styles.bar]}>
          <Circulo porcentaje={salud}/>
            <TouchableOpacity style={styles.buttonAction} onPress={curar}>
              <View>
                <Image source={require("../../../assets/curar.png")} />
              </View>
            </TouchableOpacity>
          </View>
          {/* <Text style={styles.level}>{salud}</Text> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  levels: {
    flexDirection: "row",
    marginBottom: 20,
  },
  containerBar: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  },
  bar: {
    width: 65,
    height: 65,
   marginHorizontal: 5,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.29,
    // shadowRadius: 4.65,
    // elevation: 7,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  level: {
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonAction: {
    backgroundColor: "#FFFFFF",
    width: 53,
    height: 53,
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

export default Mood;
