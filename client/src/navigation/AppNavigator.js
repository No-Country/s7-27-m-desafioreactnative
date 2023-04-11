import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./authNavigation/AuthNavigation";
import React from "react";
import HomeNavigation from "./homeNavigation/HomeNavigation";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUserData } from "../redux/actions/authActions";
import { useState } from "react";

const AppNavigator = () => {
  const [sessionActive, setSessionActive] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem("userData").then((user) => {
      console.log("user es:");
      console.log(user);
      if (user && user.userData) {
        const userData = JSON.parse(cookie.userData);
        if (userData && userData.usuario) {
          setSessionActive(true);
        }
      }
    });
  }, []);
  return (
    <NavigationContainer>
      {sessionActive ? <HomeNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigator;
