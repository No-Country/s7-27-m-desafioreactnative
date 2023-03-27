import { StyleSheet, Text, View } from "react-native";

const Play = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <View style={styles.circlesleft}>
          <Text>Circulitos y $</Text>
        </View>
        <View>
          <Text>Cerdito 100</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.gamecontainer}></View>
      </View>
    </View>
  );
};

export default Play;

const styles = StyleSheet.create({
  container: {},
  topbar: {},
  circlesleft: {},
  body: {},
  gamecontainer: {},
});
