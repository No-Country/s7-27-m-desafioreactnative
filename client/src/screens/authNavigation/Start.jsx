import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const Start = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.whitebox}>
          <Text style={{ color: "lightgray" }}>
            Acá iría una imagen o logo me imagino
          </Text>
        </View>
      </View>
      <View>
        <PrimaryButton
          text="INGRESAR"
          handler={() => {
            navigation.navigate("LogIn");
          }}
        />
        <PrimaryButton
          text="REGISTRARSE"
          handler={() => {
            navigation.navigate("Register");
          }}
        />
      </View>
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    height: "100%",
  },
  whitebox: {
    backgroundColor: "white",
    height: 260,
    width: 260,
    marginBottom: 50,
    marginTop: -40,
  },
});
