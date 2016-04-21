import React, {
  Component,
  Text,
  View,
} from 'react-native';

import SearchHeader from './SearchHeader';

class CategoryPage extends Component {

  render() {
    return(
      <View style={{flex: 1}}>
        <SearchHeader />
        <View style={{flex:1, backgroundColor:'#ccc', alignItems:'center', justifyContent:'center'}}>
          <Text style={{fontSize:22}}>This is Category page.</Text>
        </View>
      </View>      
    );
  }
}

module.exports = CategoryPage;