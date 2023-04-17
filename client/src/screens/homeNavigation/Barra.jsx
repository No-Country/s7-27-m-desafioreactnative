import React from 'react';
import { View } from 'react-native';

const ProgressBar = ({ percentage }) => {
  return (
    <View>
        <View style={{ 
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#000000",
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        width: 125,
        height: 28,
        top: 5,
        right: 13,
    }}>
        </View>
      <View style={{
        width: `${percentage}`,
        height: 20,
        backgroundColor: "#F5AFB4",
        height: 24.5,
        top: 7,
        right: 150,
      }}>
      </View>
    
    </View>
    
  );
}

export default ProgressBar;