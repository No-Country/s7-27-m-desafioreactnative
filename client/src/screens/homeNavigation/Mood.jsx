import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import Circulo from "./Circulo";
import { PetAction, petPlay } from "../../redux/actions/petActions";

const Mood = ({ nombre, }) => {
  const [edad, setEdad] = useState(1); // nivel de edad inicial
  const [sueno, setSueno] = useState(50); // nivel de sueño inicial
  const [energia, setEnergia] = useState(50); // nivel de hambre inicial
  const [salud, setSalud] = useState(50); // nivel de salud inicial
  const [felicidad, setFelicidad] = useState(50); // nivel de felicidad inicial
  const [higiene, setHigiene] = useState(50); // nivel de higiene inicial
  const [isSleeping, setIsSleeping] = useState(true); // esta durmiendo
  const [isEating, setisEating] = useState(true); // esta comiendo
  const [isBathing, setisBathing] = useState(true); // esta banandose
  const [isHealing, setisHealing] = useState(true); // esta curandose
  const [coins, setCoins] = useState(1000);
 const [fondo, setfondo] = useState(require("./fondo1.png"))
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCoins((coins) => {
        coins + 1;
      });
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  /* * Acciones * */

  //state= estado inicial (de redux)
  const pet = useSelector((state) => state.pet.pet);

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const dormir = () => {
    setIsSleeping((prevIsSleeping) => !prevIsSleeping);
    setSueno(() => Math.min(sueno + 10, 100));
    dispatch(PetAction(pet?._id, { sueno }));
    // setIsSleeping(() => !isSleeping)
    navigation.navigate("Home", {
      imagenOpcional: isSleeping
        ? require("../assets/cat_sleep.gif")
        : require("../assets/cat_rest.gif"),
      nombre: nombre,
      isNight: isSleeping,
      fondo: isSleeping
      ? require("./fondo1B.gif")
      : require("./fondo1.png"),

    });

    // establecer un temporizador de 2 segundos antes de realizar la segunda navegación
    setTimeout(() => {
      setIsSleeping(() => true);
      navigation.navigate("Home", {
        imagenOpcional: require("../assets/cat_rest.gif"),
        nombre: nombre,
        isNight: false,
        fondo: require("./fondo1.png"),
      });
    }, 2000);
  };

  const alimentar = () => {
    setEnergia(() => Math.min(energia + 10, 100));
    dispatch(PetAction(pet?._id, { energia }));
    setisEating(() => !isEating);
    navigation.navigate("Home", {
      imagenOpcional: isEating
        ? require("../assets/cat_eat.gif")
        : require("../assets/cat_rest.gif"),
      nombre: nombre,
    });
    setTimeout(() => {
      setisEating(() => true);
      navigation.navigate("Home", {
        imagenOpcional: require("../assets/cat_rest.gif"),
        nombre: nombre,
      });
    }, 1500);
  };

  const jugar = () => {
    setFelicidad(() => Math.min(felicidad + 10, 100));
    // dispatch(PetAction(pet?._id, { felicidad }));
    setCoins(coins + 300);
    // dispatch(petPlay(pet?._id, { coins }));
    navigation.navigate("Play",  coins= coins, setCoins= setCoins );
  };

  const lavar = () => {
    setHigiene(() => Math.min(higiene + 10, 100));
    dispatch(PetAction(pet?._id, { higiene }));
    setisBathing(() => !isBathing);
    navigation.navigate("Home", {
      imagenOpcional: isBathing
        ? require("../assets/cat_bath.gif")
        : require("../assets/cat_rest.gif"),
      nombre: nombre,
    });
    setTimeout(() => {
      setisBathing(() => true);
      navigation.navigate("Home", {
        imagenOpcional: require("../assets/cat_rest.gif"),
        nombre: nombre,
      });
    }, 2000);
  };

  const curar = () => {
    setSalud(() => Math.min(salud + 10, 100));
    dispatch(PetAction(pet?._id, { salud }));

    setisHealing(() => !isHealing);
    navigation.navigate("Home", {
      imagenOpcional: isHealing
        ? require("../assets/cat_sick2.gif")
        : require("../assets/cat_rest.gif"),
      nombre: nombre,
    });
    setTimeout(() => {
      setisHealing(() => true);
      navigation.navigate("Home", {
        imagenOpcional: require("../assets/cat_rest.gif"),
        nombre: nombre,
      });
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.levels}>
        <View style={styles.containerBar}>
          <View style={[styles.bar]}>
            <Circulo porcentaje={energia} />
            <TouchableOpacity style={styles.buttonAction} onPress={alimentar}>
              <View>
                <Image
                  style={{ width: 30, height: 25 }}
                  source={
                    isEating
                      ? require("../../../assets/eat.png")
                      : require("../../../assets/eat.png")
                  }
                />
              </View>
            </TouchableOpacity>
          </View>
          {/* <Text style={styles.level}>{energia}</Text> */}
        </View>
        <View style={styles.containerBar}>
          <View style={[styles.bar]}>
            <Circulo porcentaje={higiene} />
            <TouchableOpacity style={styles.buttonAction} onPress={lavar}>
              <View>
                <Image
                  style={{ width: 30, height: 28 }}
                  source={
                    isBathing
                      ? require("../../../assets/soap.png")
                      : require("../../../assets/soap.png")
                  }
                />
              </View>
            </TouchableOpacity>
          </View>
          {/* <Text style={styles.level}>{higiene}</Text> */}
        </View>
        <View style={styles.containerBar}>
          <View style={[styles.bar]}>
            <Circulo porcentaje={sueno} />
            <TouchableOpacity style={styles.buttonAction} onPress={dormir}>
              <View>
                <Image
                  source={
                    isSleeping
                      ? require("../../../assets/dormir.png")
                      : require("../../../assets/despertar.png")
                  }
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.containerBar}>
          <View style={[styles.bar]}>
            <Circulo porcentaje={salud} />
            <TouchableOpacity style={styles.buttonAction} onPress={curar}>
              <View>
                <Image
                  style={{ width: 30, height: 28 }}
                  source={require("../../../assets/heal.png")}
                />
              </View>
            </TouchableOpacity>
          </View>
          {/* <Text style={styles.level}>{salud}</Text> */}
        </View>
        <View style={styles.containerBar}>
          <View style={[styles.bar]}>
            <Circulo porcentaje={felicidad} />
            <TouchableOpacity style={styles.buttonAction} onPress={jugar}>
              <View>
                <Image
                  style={{ width: 30, height: 28 }}
                  source={require("../../../assets/joystick.png")}
                />
              </View>
            </TouchableOpacity>
          </View>
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
