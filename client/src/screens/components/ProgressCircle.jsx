import React, { useEffect, useRef } from "react";
import { View, Animated, Easing, StyleSheet } from "react-native";
import { Svg, Circle, Text } from "react-native-svg";

const ProgressCircle = ({ progress }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: progress,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [progress]);

  const radius = 28;
  const circumference = 2 * Math.PI * radius;

  const progressOffset = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [352, 0],
  });

  const completionStatus = progress === 100 ? "Completed" : "Not completed";

  return (
    <View style={styles.container}>
      <Svg height="100" width="100" style={styles.svg}>
        <Circle
          cx="40"
          cy="40"
          r={radius}
          stroke="#FFFFFF"
          strokeWidth="9"
          fill="none"
        />
        <AnimatedCircle
          cx="39"
          cy="40"
          r={radius}
          stroke="#798BB2"
          strokeWidth="7"
          fill="#798BB2"
          strokeDasharray={`${circumference} `}
          strokeDashoffset={progressOffset}
          transform={`rotate(-90, 40, 40)`}
        />
        <View style={styles.bar}>
          <TouchableOpacity  style={styles.buttonAction} onPress={dormir}>
            <View>
              <Image source={isSleeping ? require("../../../assets/dormir.png"): require("../../../assets/despertar.png") } />
            </View>
          </TouchableOpacity>
        </View>
        {/* <Text
          fill="#000"
          fontSize="15"
          fontWeight="bold"
          textAnchor="middle"
          x="40"
          y="46"
        >
          {`${progress}%`}
        </Text> */}
      </Svg>
    </View>
  );
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const styles = StyleSheet.create({
  container: {
    position:"relative",
    left: -140,
      },
  svg: {
    position:"relative",
  
      },
});

export default ProgressCircle;
