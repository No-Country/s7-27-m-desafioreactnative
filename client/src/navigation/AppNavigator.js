import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./authNavigation/AuthNavigation";
import React from "react";
import HomeNavigation from "./homeNavigation/HomeNavigation";
import { useSelector } from "react-redux";

const AppNavigator = () => {
  const id = useSelector((state) => state.user);
  console.log(id);
  return (
    <NavigationContainer>
      {!id && <AuthNavigation />}
      {id && <HomeNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigator;
