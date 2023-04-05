import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Start from "../../screens/authNavigation/Start";
import LogIn from "../../screens/authNavigation/LogIn";
import Register from "../../screens/authNavigation/Register";
import Onboarding1 from "../../screens/authNavigation/Onboarding1";
import Onboarding3 from "../../screens/authNavigation/Onboarding3";
import Onboarding4 from "../../screens/authNavigation/Onboarding4";
import Onboarding2 from "../../screens/authNavigation/Onboarding2";
import Home from "../../screens/homeNavigation/Home";
import TiendaInventario from "../../screens/homeNavigation/TiendaInventario/TiendaInventario";
import SwapPet from "../../screens/homeNavigation/SwapPet";
import Play from "../../screens/homeNavigation/Play";

const AuthNavigation = ({ navigation }) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Onboarding1" component={Onboarding1} />
      <Stack.Screen name="Onboarding2" component={Onboarding2} />
      <Stack.Screen name="Onboarding3" component={Onboarding3} />
      <Stack.Screen name="Onboarding4" component={Onboarding4} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TiendaInventario" component={TiendaInventario} />
      <Stack.Screen name="SwapPet" component={SwapPet} />
      <Stack.Screen name="Play" component={Play} />
    </Stack.Navigator>
  );
};
export default AuthNavigation;
