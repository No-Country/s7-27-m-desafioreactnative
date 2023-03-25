import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./authNavigation/AuthNavigation";
import React from "react";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
};

export default AppNavigator;
