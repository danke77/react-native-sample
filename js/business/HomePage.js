import React, {
  Component,
  StyleSheet,
  Text,
  Dimensions,
  View,
} from 'react-native';

class HomePage extends Component {

  render() {
    return(
      <View style={{flex:1, backgroundColor:'#ccc', alignItems:'center', justifyContent:'center'}}>
        <Text style={{fontSize:22}}>This is Home page.</Text>
      </View>
    );
  }

}

module.exports = HomePage;