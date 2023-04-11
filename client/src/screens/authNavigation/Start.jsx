import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  ImageBackground,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
import PrimaryButton from "../components/PrimaryButton";
import LogIn from "./LogIn";
import Register from "./Register";
import fondoinicio from "../assets/fondoinicio.png";
import arbder from "../assets/arbustoder.png";
import arbizq from "../assets/arbustoizq.png";
import nube1 from "../assets/nube1.png";
import nube2 from "../assets/nube2.png";
import nube3 from "../assets/nube3.png";
import nube4 from "../assets/nube4.png";
import nube5 from "../assets/nube5.png";
import nube6 from "../assets/nube6.png";
import nube7 from "../assets/nube7.png";
import nube8 from "../assets/nube8.png";
import casa from "../assets/casa.png";
import pawsitive from "../assets/pawsitive.png";

const Start = () => {
  const [modalLoginVisible, setModalLoginVisible] = useState(false);
  const [modalRegisterVisible, setModalRegisterVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={fondoinicio} style={styles.fondoinicio} />
      <Image source={pawsitive} style={styles.pawsitive} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalLoginVisible}
        onRequestClose={() => {
          setModalLoginVisible(!modalLoginVisible);
        }}
      >
        <LogIn setModalLoginVisible={setModalLoginVisible} />
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalRegisterVisible}
        onRequestClose={() => {
          setModalRegisterVisible(!modalRegisterVisible);
        }}
      >
        <Register setModalRegisterVisible={setModalRegisterVisible} />
      </Modal>
      <View style={styles.nubes}>
        <Image source={nube1} style={styles.n1} />
        <Image source={nube2} style={styles.n2} />
        <Image source={nube3} style={styles.n3} />
        <Animatable.Image
          animation="shake"
          iterationCount="infinite"
          duration={50000}
          source={nube4}
          style={styles.n4}
        />
        <Animatable.Image
          animation="shake"
          iterationCount="infinite"
          duration={60000}
          delay={2000}
          source={nube5}
          style={styles.n5}
        />
        <Animatable.Image
          animation="shake"
          iterationCount="infinite"
          duration={50000}
          source={nube6}
          style={styles.n6}
        />
        <Animatable.Image
          animation="shake"
          iterationCount="infinite"
          duration={60000}
          source={nube7}
          style={styles.n7}
        />
        <Animatable.Image
          animation="shake"
          iterationCount="infinite"
          duration={50000}
          source={nube8}
          style={styles.n8}
        />
      </View>
      <View style={styles.casacont}>
        <Image source={casa} style={styles.casa} />
      </View>
      <View style={styles.arbustos}>
        <Image source={arbder} style={styles.arbder} />
        <Image source={arbizq} style={styles.arbizq} />
      </View>
      <View style={styles.btncontainer}>
        <PrimaryButton
          handler={() => setModalRegisterVisible(true)}
          text="REGISTRARSE"
        ></PrimaryButton>
        <PrimaryButton
          handler={() => setModalLoginVisible(true)}
          secondary={true}
          text="INGRESAR"
        ></PrimaryButton>
      </View>
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    justifyContent: "flex-end",
  },
  fondoinicio: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  pawsitive: {
    position: "absolute",
    bottom: 430,
    zIndex: 2,
  },
  casacont: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    zIndex: 1,
  },
  casa: {
    position: "absolute",
    top: 300,
    zIndex: 100,
  },
  nubes: {
    position: "absolute",
    height: "100%",
    width: "100%",
    display: "flex",
  },
  arbustos: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "90%",
  },
  arbder: {
    position: "absolute",
    right: 0,
    bottom: 180,
    zIndex: 10,
  },
  arbizq: {
    position: "absolute",
    left: 0,
    bottom: 180,
    zIndex: 0,
  },
  btncontainer: {
    width: "90%",
    bottom: 60,
  },

  n1: {
    top: 0,
  },
  n2: {
    right: 0,
    alignSelf: "flex-end",
    top: 40,
  },
  n3: {
    left: 0,
    top: -50,
  },
  n4: {
    alignSelf: "flex-end",
    top: -240,
    right: 30,
  },
  n5: {
    top: -130,
    left: 30,
  },
  n6: {
    alignSelf: "flex-end",
    zIndex: -1,
    top: -120,
    right: 40,
  },
  n7: {
    top: -430,
    left: 30,
  },
  n8: {
    alignSelf: "flex-end",
    top: -400,
    right: 60,
  },
});
