import { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { AntDesign } from "react-native-vector-icons";
const Settings = ({ setIsModalVisible }) => {
  const [value, setValue] = useState(20);
  return (
    <SafeAreaView>
      <View>
        <AntDesign name="close" />
      </View>
      <View>
        <AntDesign name="setting" />
        <Text>Ajustes</Text>
      </View>

      <View>
        <View>
          <Text>Sonido</Text>
        </View>
        <View>
          <Text>Musica</Text>
          <Slider
            style={{ marginHorizontal: 16 }}
            minimumValue={0}
            maximumValue={100}
            value={value}
            onValueChange={(newValue) => setValue(newValue)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
