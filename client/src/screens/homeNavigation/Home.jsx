import { Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";
const Home = () => {
  return (
    <View style={{marginVertical:100, marginHorizontal:100, backgroundColor: 'red'}}> 
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <TouchableOpacity style={{backgroundColor: 'blue', width: 50, height: 50,justifyContent: 'center', alignItems: 'center'}}>
      <Image source={require('./shopping-bag.png')} style={{justifyContent: 'center', alignItems: 'center'}}/>
      </TouchableOpacity>
      
    </View>
  );
};
const styles= StyleSheet.create({ 


})
export default Home;


