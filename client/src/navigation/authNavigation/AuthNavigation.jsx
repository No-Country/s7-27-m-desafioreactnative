import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Start from "../../screens/authNavigation/Start";
import LogIn from "../../screens/authNavigation/LogIn";
import Register from "../../screens/authNavigation/Register";

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
      {/* <Stack.Screen name="Onboarding1" component={Onboarding1} /> */}
      {/* <Stack.Screen name="Onboarding2" component={Onboarding2} /> */}
      {/* <Stack.Screen name="Onboarding3" component={Onboarding3} /> */}
      {/* <Stack.Screen name="Onboarding4" component={Onboarding4} /> */}
    </Stack.Navigator>
  );
};
export default AuthNavigation;
