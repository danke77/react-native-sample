import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  View,
  ScrollView,
} from 'react-native';

import ViewPager from 'react-native-viewpager'; 

var MarketRecomendView = React.createClass({
  getInitialState: function() {
    return {
      marketImgUri0: 'http://img.zcool.cn/community/0314bb75715ac060000011e0154f4dd.jpg@500w_376h_1c_1e_1l_2o',
      marketImgUri1: 'http://img.zcool.cn/community/03180ff5714a69c0000011e01abac3c.jpg@500w_376h_1c_1e_1l_2o',
      marketImgUri2: 'http://img.zcool.cn/community/031591f5714976c000001ba12400d86.jpg@500w_376h_1c_1e_1l_2o'
    };
  },

  render: function() {
    return (
      <View>
        <Text style={styles.ads_title}>优店推荐</Text>
        <View style={styles.ads_container}>
          <Image style={styles.ads_item_side} source={{uri: this.state.marketImgUri0}} />
          <Image style={styles.ads_item_middle} source={{uri: this.state.marketImgUri1}} />
          <Image style={styles.ads_item_side} source={{uri: this.state.marketImgUri2}} />
        </View>
      </View>
    );
  }

});


const styles = StyleSheet.create ({
  ads_title: {
    fontSize: 12,
    color: '#999999',
    marginTop: 8,
    marginLeft: 8
  },
  ads_container: {
    flex:1,
    height: 180,
    justifyContent: 'center',
    flexDirection: 'row',
    overflow: 'hidden'
  },
  ads_item_side: {
    flex: 1,
    backgroundColor: '#888888',
    margin: 1
  },
  ads_item_middle: {
    flex: 1,
    margin: 1,
    marginLeft: 4,
    marginRight: 4,
    backgroundColor: '#888888',
  }
});

module.exports = MarketRecomendView;