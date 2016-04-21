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

import TopBanner from './TopBanner';
import MarketRecommend from './MarketRecommend';

class HomePage extends Component {

  render() {
    return(
      <ScrollView style={{flex: 1, marginBottom: 56}}>
        <TopBanner />
        <MarketRecommend />
        <DailyRecomendView />
        <DailyRecomendView />
      </ScrollView>
    );
  }
}

var DailyRecomendView = React.createClass ({
  getInitialState: function() {
    return {
      itemTitle: '',
      itemTitleIcon: '',
      itemMainImg: '',
      itemImages: []
    };
  },

  render: function() {
    return (
      <View style={styles.daily_item_container}>
        <View style={styles.daily_title_layout}>
          <Image style={styles.daily_title_icon} source={require('../../images/calendar.png')} />
          <Text style={styles.daily_title_title}>Today</Text>
          <Text style={styles.daily_more}>更多 ></Text>
        </View>
        <View style={styles.daily_main_layout}>
          <Image style={styles.daily_main_img} source={{uri: 'http://img.zcool.cn/community/031fecd5714db870000013f400112f3.jpg@500w_376h_1c_1e_1l_2o'}} />
        </View>
        <ScrollView horizontal={true} style={styles.daily_scroll_layout}>
          <Image style={styles.daily_scroll_img} source={{uri: 'http://img.zcool.cn/community/031921357159db80000013f40178a85.jpg@500w_376h_1c_1e_1l_2o'}} />
          <Image style={styles.daily_scroll_img} source={{uri: 'http://img.zcool.cn/community/031921357159db80000013f40178a85.jpg@500w_376h_1c_1e_1l_2o'}} />
          <Image style={styles.daily_scroll_img} source={{uri: 'http://img.zcool.cn/community/031921357159db80000013f40178a85.jpg@500w_376h_1c_1e_1l_2o'}} />
          <Image style={styles.daily_scroll_img} source={{uri: 'http://img.zcool.cn/community/031921357159db80000013f40178a85.jpg@500w_376h_1c_1e_1l_2o'}} />
          <Image style={styles.daily_scroll_img} source={{uri: 'http://img.zcool.cn/community/031921357159db80000013f40178a85.jpg@500w_376h_1c_1e_1l_2o'}} />
          <Image style={styles.daily_scroll_img} source={{uri: 'http://img.zcool.cn/community/031921357159db80000013f40178a85.jpg@500w_376h_1c_1e_1l_2o'}} />
        </ScrollView>
      </View>
    );
  }

});

const styles = StyleSheet.create ({
  banner_img: {
    height: 140
  },
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
    marginLeft: 4,
    marginRight: 4,
    backgroundColor: '#888888',
    margin: 1
  },
  daily_item_container: {
    flex: 1,
    flexDirection: 'column',
    overflow: 'hidden',
    marginBottom: 8
  },
  daily_title_layout: {
    height: 32,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  daily_title_icon: {
    marginLeft: 8,
    height: 24,
    width: 24,
    marginRight: 4
  },
  daily_title_title: {
    flex:1,
    fontSize: 12
  },
  daily_more: {
    fontSize: 12,
    color: '#999999',
    marginRight: 8
  },
  daily_main_layout: {
    flex: 1
  },
  daily_main_img: {
    height: 220
  },
  daily_scroll_layout: {
    height: 125
  },
  daily_scroll_img: {
    height: 120,
    width: 120,
    borderWidth: 1,
    borderColor: '#cccccc',
    margin: 2
  }
});

module.exports = HomePage;