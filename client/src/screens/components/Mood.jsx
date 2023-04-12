import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import ProgressCircle from "./ProgressCircle";
import { PetAction } from "../../redux/actions/petActions";



const Mood = () => {
  const [edad, setEdad] = useState(1); // nivel de edad inicial
  const [sueno, setSueno] = useState(50); // nivel de sueño inicial
  const [energia, setEnergia] = useState(50); // nivel de hambre inicial
  const [salud, setSalud] = useState(50); // nivel de salud inicial
  const [felicidad, setFelicidad] = useState(50); // nivel de felicidad inicial
  const [higiene, setHigiene] = useState(50); // nivel de higiene inicial
  const [isSleeping, setIsSleeping] = useState(false); // esta durmiendo

  useEffect(() => {
    const interval = setInterval(() => {
      
      setSueno((sueno) => {
        if (sueno < 0) clearInterval(interval);
        if (sueno === 0) return sueno;
        else return sueno - Math.random();
      });
      setEnergia((energia) => {
        if (energia < 0) clearInterval(interval);
        if (energia === 0) return energia;
        else return energia - Math.random();
      });
      setFelicidad((felicidad) => {
        if (felicidad < 0) clearInterval(interval);
        if (felicidad === 0) return felicidad;
        else return felicidad - Math.random();
      });
      setHigiene((higiene) => {
        if (higiene < 0) clearInterval(interval);
        if (higiene === 0) return higiene;
        else return higiene - Math.random();
      });
      setSalud((salud) => {
        if (salud < 0) clearInterval(interval);
        if (salud === 0) return salud;
        else return salud - Math.random();
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

      /* *** Acciones *** */

  //state= estado inicial (de redux)
  const pet = useSelector((state) => state.pet.pet);

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const dormir = () => {
    setIsSleeping(() => !isSleeping);
    setSueno((sueno) => Math.min(sueno + 10, 100));
    dispatch(PetAction(pet?._id, { sueno }));
    
    navigation.navigate("Home", { imagenOpcional: isSleeping ? require("../assets/gatodurmiendo.png"): require("../assets/gato_normal.png") })
  };

  const alimentar = () => {
    setEnergia((energia) => Math.min(energia + 10, 100));
    dispatch(PetAction(pet?._id, { energia }));
  };

  const jugar = () => {
    setFelicidad((felicidad) => Math.min(felicidad + 10, 100));
    dispatch(PetAction(pet?._id, { felicidad }));
  };

  const lavar = () => {
    setHigiene((higiene) => Math.min(higiene + 10, 100));
    dispatch(PetAction(pet?._id, { higiene }));
  };

  const curar = () => {
    setSalud((salud) => Math.min(salud + 10, 100));
    dispatch(PetAction(pet?._id, { salud }));
  };


  //  isSleeping ? require("../../../assets/dormir.png"): require("../../../assets/despertar.png") 
  let imgDormir = require("../../../assets/dormir.png");
  let imgComer = require("../../../assets/comer.png");
  let imgJugar = require("../../../assets/jugar.png");
  let imgLavar = require("../../../assets/bañar.png");
  let imgCurar = require("../../../assets/curar.png");

  return (
      <View style={styles.levels}>
        <TouchableOpacity onPress={dormir}>
          <ProgressCircle progress={sueno} img={imgDormir} />
        </TouchableOpacity>

        <TouchableOpacity  onPress={alimentar}>     
          <ProgressCircle progress={energia} img={imgComer} />
        </TouchableOpacity>  

        <TouchableOpacity  onPress={jugar}>
          <ProgressCircle progress={felicidad} img={imgJugar} />
        </TouchableOpacity>

        <TouchableOpacity  onPress={lavar}>
          <ProgressCircle progress={higiene} img={imgLavar} />
        </TouchableOpacity>

        <TouchableOpacity  onPress={curar}>
          <ProgressCircle progress={salud} img={imgCurar} />
        </TouchableOpacity>
      </View>
    
  );
};

const styles = StyleSheet.create({
  
  levels: {
    flexDirection: "row",
    position: "relative",
    left: 74,
    gap:-25
  }
});

export default Mood;