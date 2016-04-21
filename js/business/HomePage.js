import React, {
  Component,
  Text,
  Image,
  View,
  ScrollView,
} from 'react-native';

import ViewPager from 'react-native-viewpager'; 

import TopBanner from './TopBanner';
import MarketRecommendView from './MarketRecommendView';
import DailyRecommendView from './DailyRecommendView';

class HomePage extends Component {

  render() {
    return(
      <ScrollView style={{flex: 1, marginBottom: 56}}>
        <TopBanner />
        <MarketRecommendView />
        <DailyRecommendView />
        <DailyRecommendView />
      </ScrollView>
    );
  }
}

module.exports = HomePage;