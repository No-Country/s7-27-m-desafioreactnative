import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BgAudio from 'react-native-background-audio'
 
export default class App extends React.Component {
  render() {
    return (
      <BgAudio options={audio_options}></BgAudio>
    );
  }
}
const audio_options = {
  source:{local: require('./music.mp3')}  //ex. require('./music/sample.mp3')
}
s