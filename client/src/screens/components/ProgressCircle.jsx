import React, { useEffect, useRef } from "react";
import { View, Image, Animated, Easing, StyleSheet } from "react-native";
import { Svg, Circle } from "react-native-svg";



const ProgressCircle = ({ progress, img }) => {

      /* Barra de Progreso */
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: progress,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [progress]);

  const radius = 27;
  const circumference = 2 * Math.PI * radius;

  const progressOffset = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [340, 0],
  });
  //const completionStatus = progress === 100 ? "Completed" : "Not completed";
  
  return (
    <View style={styles.container}>
      <Svg height="100" width="100" style={styles.svg}>
        <Circle
          cx="40"
          cy="41"
          r={radius}
          stroke="#798BB2"
          strokeWidth="9"
          fill="#798BB2"
        />
        <AnimatedCircle
          cx="39"
          cy="40"
          r={radius}
          stroke="#FFFFFF"
          strokeWidth="5"
          fill="none"
          strokeDasharray={`${circumference} `}
          strokeDashoffset={progressOffset}
          transform={`rotate(-90, 40, 40)`}
        />
      
               
          <Image style={styles.bar} source={img} />
       

      </Svg>
    </View>
  );
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const styles = StyleSheet.create({
  container: {
    
    position:"relative",
    left: -60,
    top:-20
      },
  svg: {
    position:"relative",
    
  },
  bar: {
    width:46,
    height: 46,
    position:"relative",
    borderColor:"#798BB2",
    top: 17.8,
    left: 11.7,
    marginHorizontal: 5,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default ProgressCircle;
