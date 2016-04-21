import React, {
  Component,
  StyleSheet,
  Text,
  Dimensions,
  View,
} from 'react-native';

class ShoppingCartPage extends Component {

  render() {
    return(
      <View style={{flex:1, backgroundColor:'#ccc', alignItems:'center', justifyContent:'center'}}>
        <Text style={{fontSize:22}}>This is ShoppingCart page.</Text>
      </View>
    );
  }

}

module.exports = ShoppingCartPage;