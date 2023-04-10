import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  feedPet,
  getPet,
  setPetHunger,
  updatePet,
} from "../../redux/actions/petActions";
import { URL_BACK } from "../../config";
import axios from "axios";


const Mood = () => {
  const [edad, setEdad] = useState(1); // nivel de edad inicial
  const [sueno, setSueno] = useState(50); // nivel de sueño inicial
  const [energia, setEnergia] = useState(50); // nivel de hambre inicial
  const [salud, setSalud] = useState(50); // nivel de salud inicial
  const [felicidad, setFelicidad] = useState(50); // nivel de felicidad inicial
  const [higiene, setHigiene] = useState(50); // nivel de higiene inicial

 
  
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

      // setEnergia(energia => {
      //   if (energia === 0) clearInterval(interval);
      //   else return energia - 5;
      // });
      // setSueno(sueno => {
      //   if (sueno === 0) clearInterval(interval);
      //   else return sueno - 1;
      // });
      // setFelicidad(felicidad => {
      //   if (felicidad === 0) clearInterval(interval);
      //   else return felicidad - 1;
      // })
      // setHigiene(higiene => {
      //   if (higiene === 0) clearInterval(interval);
      //   else return higiene - 1;
      // })
      // setSalud(salud => {
      //   if (salud === 0) clearInterval(interval);
      //   else return salud - 1;
      // })
    }, 2000);
    return () => clearInterval(interval);
  }, []);

 
  const alimentar = () => setEnergia((energia) => Math.min(energia + 10, 100));
  const jugar = () => setFelicidad((felicidad) => Math.min(felicidad + 10, 100));
  const dormir = () => setSueno((sueno) => Math.min(sueno + 10, 100));
  const lavar = () => setHigiene((higiene) => Math.min(higiene + 10, 100));
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
          <View style={[styles.bar, { backgroundColor: getBarColor(sueno) }]}>
            <TouchableOpacity style={styles.buttonAction} onPress={dormir}>
              <View>
                <Image source={require("./dormir.png")} />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.level}>{sueno}</Text>
        </View>

        <View style={styles.containerBar}>
          <View style={[styles.bar, { backgroundColor: getBarColor(energia) }]}>
            <TouchableOpacity style={styles.buttonAction} onPress={alimentar}>
              <View>
                <Image source={require("./comer.png")} />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.level}>{energia}</Text>
        </View>

        <View style={styles.containerBar}>
          <View
            style={[styles.bar, { backgroundColor: getBarColor(felicidad) }]}
          >
            <TouchableOpacity style={styles.buttonAction} onPress={jugar}>
              <View>
                <Image source={require("./jugar.png")} />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.level}>{felicidad}</Text>
        </View>

        <View style={styles.containerBar}>
          <View style={[styles.bar, { backgroundColor: getBarColor(higiene) }]}>
            <TouchableOpacity style={styles.buttonAction} onPress={lavar}>
              <View>
                <Image source={require("./bañar.png")} />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.level}>{higiene}</Text>
        </View>

        <View style={styles.containerBar}>
          <View style={[styles.bar, { backgroundColor: getBarColor(salud) }]}>
            <TouchableOpacity style={styles.buttonAction} onPress={curar}>
              <View>
                <Image source={require("./curar.png")} />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.level}>{salud}</Text>
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
    marginRight: 20,
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
    width: 50,
    height: 50,
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
