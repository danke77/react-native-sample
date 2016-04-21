import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  Platform,
} from 'react-native';

var SearchHeader = React.createClass({

  render: function() {
    return (  
      <View style={styles.container}>   
        <View style={styles.searchBox}>  
          <Image source={require('../../images/search.png')} style={styles.searchIcon}/>  
          <TextInput  
            keyboardType='web-search'  
            placeholder='搜索商品/店铺'  
            style={styles.inputText}/>  
          <Image source={require('../../images/voice.png')} style={styles.voiceIcon}/>  
        </View>  
        <Image source={require('../../images/scan.png')} style={styles.scanIcon}/>  
      </View>  
    ) 
  }

});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 8,  
    paddingRight: 8,  
    paddingTop: Platform.OS === 'android' ? 0 : 20, 
    height: Platform.OS === 'android' ? 48 : 68, 
    backgroundColor: '#ff5050',  
    alignItems: 'center' // 元素垂直居中排布, 当flexDirection为column时, 为水平居中
  },
  searchBox: {  
    height: 30,  
    flexDirection: 'row',  
    flex: 1,  // 类似于android中的layout_weight,设置为1即自动拉伸填充  
    borderRadius: 4,  // 设置圆角边  
    backgroundColor: 'white',  
    alignItems: 'center',  
    marginLeft: 4,  
    marginRight: 12  
  }, 
  searchIcon: {  
    marginLeft: 6,  
    marginRight: 6,  
    width: 18,  
    height: 18,  
    resizeMode: 'stretch'  
  },  
  inputText: {  
    flex: 1,  
    backgroundColor: 'transparent',  
    fontSize: 14  
  },
  voiceIcon: {  
    marginLeft: 5,  
    marginRight: 8,  
    width: 15,  
    height: 20,  
    resizeMode: 'stretch'  
  }, 
  scanIcon: {  
    height: 28,  
    width: 28,  
    resizeMode: 'stretch'  
  },    
});

module.exports = SearchHeader;