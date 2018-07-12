import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default class App extends React.Component {
  state = {
    placeName: ""
  };

  placeNameChangedHolder = val => {
   this.setState({
     placeName: val
   });
  };
  
  render() {
    return (
      <View style={styles.container}>
      <Text>Fuc</Text>
      <TextInput 
      placeholder="An Awesome Place"
      style={{width: 300,}}
      value={this.state.placeName} 
      onChangeText={this.placeNameChangedHolder}
      />
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
