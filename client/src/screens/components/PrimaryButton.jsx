import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { fondo, primario } from "../../config/constants";

const PrimaryButton = ({ text, handler, secondary = false }) => {
  return (
    <TouchableOpacity
      style={[
        styles.boton,
        secondary ? { backgroundColor: fondo } : { backgroundColor: primario },
      ]}
      onPress={handler}
    >
      <Text
        style={[
          styles.text,
          secondary ? { color: "#A8A8A8" } : { color: "white" },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
const styles = StyleSheet.create({
  boton: {
    display: "flex",
    width: "95%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60,
    margin: 10,
  },
  text: {
    fontWeight: "500",
  },
});
