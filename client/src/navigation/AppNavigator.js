import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./authNavigation/AuthNavigation";
import React from "react";
import HomeNavigation from "./homeNavigation/HomeNavigation";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      {/* si no está registrado -> */} <AuthNavigation />
      {/* si ya tiene cuenta -> */} <HomeNavigation />
    </NavigationContainer>
  );
};

export default AppNavigator;
