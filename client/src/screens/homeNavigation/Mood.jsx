import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";


const Mood = () => {
  const [hambre, setHambre] = useState(50); // nivel de hambre inicial
  const [sueno, setSueno] = useState(50); // nivel de sueño inicial
  const [felicidad, setFelicidad] = useState(50); // nivel de felicidad inicial

  useEffect(() => {
    const interval = setInterval(() => {
      setHambre(hambre => {
        if (hambre === 0) clearInterval(interval);
        else return hambre - 1;
      });
      setSueno(sueno => {
        if (sueno === 0) clearInterval(interval);
        else return sueno - 1;
      });
      setFelicidad(felicidad => {
        if (felicidad === 0) clearInterval(interval);
        else return felicidad - 1;
      })
    }, 2000);
    return () => clearInterval(interval);
  }, []);

    // Alimentar
    const alimentar = () => setHambre((hambre) => Math.min(hambre + 10, 100));
    // Jugar
    const jugar = () => setFelicidad((felicidad) => Math.min(felicidad + 10, 100));
    //Dormir
    const dormir = () => setSueno((sueno) => Math.min(sueno + 10, 100));

    
    const getBarColor = (level) => {
        if (level >= 75) {
            return 'green';
          } else if (level >= 35) {
              return 'yellow';
            } else {
                return 'red';
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
              <View style={[styles.bar, { backgroundColor: getBarColor(hambre) }]}>
                <TouchableOpacity style={styles.buttonAction} onPress={alimentar}>
                  <View>
                    <Image source={require("./comer.png")} />
                  </View>
                </TouchableOpacity>
              </View>
              <Text style={styles.level}>{hambre}</Text>
            </View>
            
            <View style={styles.containerBar}>
              <View style={[styles.bar, { backgroundColor: getBarColor(felicidad) }]}>
                <TouchableOpacity style={styles.buttonAction} onPress={jugar}>
                  <View>
                    <Image source={require("./jugar.png")} />
                  </View>
                </TouchableOpacity>
              </View>
              <Text style={styles.level}>{felicidad}</Text>
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
        flexDirection: 'row',
      marginBottom: 20,
    },
    containerBar:{
      display:'flex',
      textAlign:'center',    
      alignItems: "center",
      
    },
    bar: {
      width: 75,
      height: 75,
      marginRight: 20,
      borderRadius:50,
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
        fontWeight: 'bold',
        marginBottom: 10,
      },
      level: {
          fontSize: 24,
          fontWeight: 'bold',
    },
    buttonAction:{
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


export default Mood;