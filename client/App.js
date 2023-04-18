import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Text, View } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar statusBarStyle="light-content" />
        <AppNavigator />
      </Provider>
    </>
  );
}
