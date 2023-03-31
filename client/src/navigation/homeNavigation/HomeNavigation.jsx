import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/homeNavigation/Home";
import Play from "../../screens/homeNavigation/Play";

const HomeNavigation = ({ navigation }) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Play" component={Play} />
    </Stack.Navigator>
  );
};
export default HomeNavigation;
