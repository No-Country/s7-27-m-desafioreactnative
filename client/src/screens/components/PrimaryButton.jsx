import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const PrimaryButton = ({ text, handler }) => {
  return (
    <TouchableOpacity style={styles.boton} onPress={handler}>
      <Text style={{ color: "white", fontWeight: "500" }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
const styles = StyleSheet.create({
  boton: {
    display: "flex",
    backgroundColor: "#A8A8A8",
    width: 283,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    margin:10
  },
});
