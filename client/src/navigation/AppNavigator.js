import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./authNavigation/AuthNavigation";
import React, { useState } from "react";
import HomeNavigation from "./homeNavigation/HomeNavigation";
import { useSelector } from "react-redux";

const AppNavigator = () => {
  const token = useSelector((state) => state.user);
  return (
    <NavigationContainer>
      {!token ? <AuthNavigation /> : <HomeNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigator;
