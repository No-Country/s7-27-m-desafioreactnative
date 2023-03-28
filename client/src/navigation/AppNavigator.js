import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./authNavigation/AuthNavigation";
import React from "react";
import HomeNavigation from "./homeNavigation/HomeNavigation";

const AppNavigator = () => {
  const token = false;
  return (
    <NavigationContainer>
      {!token ? <AuthNavigation /> : <HomeNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigator;
