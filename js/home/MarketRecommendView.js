import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

import ViewPager from 'react-native-viewpager'; 

const MARKET_RECOMMEND_IMG_URIS = [
  'https://dn-kdt-img.qbox.me/upload_files/2015/11/25/FvBI92OV8gsr186uDCEa_HlHRK9e.jpg?imageView2/2/w/320/h/0/q/75/format/webp',
  'https://dn-kdt-img.qbox.me/upload_files/2015/11/04/FmcFNmdwvBJ5vyNEamy2X71bhh7P.jpg?imageView2/2/w/320/h/0/q/75/format/webp',
  'https://dn-kdt-img.qbox.me/upload_files/2015/09/21/FnHNsQGA7LAIMiKAuWHqsGsiipRT.jpg?imageView2/2/w/320/h/0/q/75/format/webp'
]

var MarketRecommendView = React.createClass({
  getInitialState: function() {
    return {
      MARKET_RECOMMEND_IMG_URIS
    };
  },

  render: function() {
    return (
      <View>
        <Text style={styles.ads_title}>优店推荐</Text>
        <View style={styles.ads_container}>
          <Image style={styles.ads_item_side} source={{uri: this.state.MARKET_RECOMMEND_IMG_URIS[0]}} />
          <Image style={styles.ads_item_middle} source={{uri: this.state.MARKET_RECOMMEND_IMG_URIS[1]}} />
          <Image style={styles.ads_item_side} source={{uri: this.state.MARKET_RECOMMEND_IMG_URIS[2]}} />
        </View>
      </View>
    );
  }

});

const styles = StyleSheet.create ({
  ads_title: {
    fontSize: 12,
    color: '#999999',
    marginTop: 12,
    marginLeft: 8,
  },
  ads_container: {
    flex:1,
    height: 180,
    marginTop: 4,
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

module.exports = MarketRecommendView;