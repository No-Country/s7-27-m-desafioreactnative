import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./authNavigation/AuthNavigation";
import React from "react";
import HomeNavigation from "./homeNavigation/HomeNavigation";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const AppNavigator = () => {
  const [sessionActive, setSessionActive] = useState(false);

  useEffect(() => {
    CookieManager.get("userData").then((cookie) => {
      if (cookie && cookie.userData) {
        const userData = JSON.parse(cookie.userData);
        if (userData && userData.sessionActive) {
          setSessionActive(true);
        }
      }
    });
  }, []);

  return (
    <NavigationContainer>
      sessionActive ? <HomeNavigation /> : <AuthNavigation />
    </NavigationContainer>
  );
};

export default AppNavigator;
