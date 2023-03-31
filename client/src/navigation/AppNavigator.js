import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./authNavigation/AuthNavigation";
import React, { useState } from "react";
import HomeNavigation from "./homeNavigation/HomeNavigation";
import { useSelector } from "react-redux";

const AppNavigator = () => {
  const id = useSelector((state) => state.user);
  return (
    <NavigationContainer>
      {!id ? <AuthNavigation /> : <HomeNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigator;
