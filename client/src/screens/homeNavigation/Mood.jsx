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


const Mood = () => {
  const [edad, setEdad] = useState(1); // nivel de edad inicial
  const [sueno, setSueno] = useState(50); // nivel de sueño inicial
  const [energia, setEnergia] = useState(50); // nivel de hambre inicial
  const [salud, setSalud] = useState(50); // nivel de salud inicial
  const [felicidad, setFelicidad] = useState(50); // nivel de felicidad inicial
  const [higiene, setHigiene] = useState(50); // nivel de higiene inicial

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergia((energia) => {
        if (energia < 0) clearInterval(interval);
        if (energia === 0) return energia;
        else return energia - Math.random();
      });
      setSueno((sueno) => {
        if (sueno < 0) clearInterval(interval);
        if (sueno === 0) return sueno;
        else return sueno - 5;
      });
      setFelicidad((felicidad) => {
        if (felicidad < 0) clearInterval(interval);
        if (felicidad === 0) return felicidad;
        else return felicidad - 5;
      });
      setHigiene((higiene) => {
        if (higiene < 0) clearInterval(interval);
        if (higiene === 0) return higiene;
        else return higiene - 5;
      });
      setSalud((salud) => {
        if (salud < 0) clearInterval(interval);
        if (salud === 0) return salud;
        else return salud - 5;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  //state= estado inicial (de redux)
  const pet = useSelector((state) => state.pet.pet);

  const dispatch = useDispatch();

  const alimentar = () => {
    setEnergia((energia) => Math.min(energia + 10, 100));
    dispatch(PetAction(pet?._id, { energia }));
  };

  const jugar = () => {
    setFelicidad((felicidad) => Math.min(felicidad + 10, 100));
    dispatch(PetAction(pet?._id, { felicidad }));
  };
  const dormir = () => {
    setSueno((sueno) => Math.min(sueno + 10, 100));
    dispatch(PetAction(pet?._id, { sueno }));
  };
  const lavar = () => {
    setHigiene((higiene) => Math.min(higiene + 10, 100));
    dispatch(PetAction(pet?._id, { higiene }));
  };
  const curar = () => {
    setSalud((salud) => Math.min(salud + 10, 100));
    dispatch(PetAction(pet?._id, { salud }));
  };


  return (
    <View style={styles.container}>
      <View style={styles.levels}>
        <View style={styles.containerBar}>
          <View style={[styles.bar, { backgroundColor: getBarColor(sueno) }]}>
            <TouchableOpacity  style={styles.buttonAction} onPress={dormir}>
              <View>
                <Image source={isSleeping ? require("../../../assets/dormir.png"): require("../../../assets/despertar.png") } />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.level}>{sueno}</Text>
        </View>

        <View style={styles.containerBar}>
          <View style={[styles.bar, { backgroundColor: getBarColor(energia) }]}>
            <TouchableOpacity style={styles.buttonAction} onPress={alimentar}>
              <View>
                <Image source={require("../../../assets/comer.png")} />
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
                <Image source={require("../../../assets/jugar.png")} />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.level}>{felicidad}</Text>
        </View>

        <View style={styles.containerBar}>
          <View style={[styles.bar, { backgroundColor: getBarColor(higiene) }]}>
            <TouchableOpacity style={styles.buttonAction} onPress={lavar}>
              <View>
                <Image source={require("../../../assets/bañar.png")} />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.level}>{higiene}</Text>
        </View>

        <View style={styles.containerBar}>
          <View style={[styles.bar, { backgroundColor: getBarColor(salud) }]}>
            <TouchableOpacity style={styles.buttonAction} onPress={curar}>
              <View>
                <Image source={require("../../../assets/curar.png")} />
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
