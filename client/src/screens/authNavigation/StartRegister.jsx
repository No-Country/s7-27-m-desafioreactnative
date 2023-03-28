import { useState } from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const LogIn = () => {
  return (
    <View style={styles.container}>
      

      <Image
        source={{ uri: "https://imgs.search.brave.com/Mqlc0-eSuyScoKA-_o0Ign8AMwt290QjPDrSUbV6Fqo/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9pczIt/c3NsLm16c3RhdGlj/LmNvbS9pbWFnZS90/aHVtYi9QdXJwbGU2/Mi92NC82Ny8wMS9k/Yy82NzAxZGMzOC0x/YmQ3LTI1NjUtZWYx/Yi1iYzM4MjE2MDJi/YTIvc291cmNlLzUx/Mng1MTJiYi5qcGc" }}
        style={{ width: 400, height: 400, borderRadius: 25 }}
        />
      

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>INGRESAR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>REGISTRARSE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#f8a",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  loginBtn: {
    width: "90%",
    backgroundColor: "#fb5b5a",
    // borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "black",
  },
});

export default LogIn;
