import React, {
  Component,
  Text,
  Image,
  View,
  ScrollView,
} from 'react-native';

import TopBanner from './TopBanner';
import MarketRecommendView from './MarketRecommendView';
import DailyRecommendView from './DailyRecommendView';

const DAILY_RECOMMEND_DATA = [
  {
    itemTitle: "今日",
    itemMainImg: "http://img.zcool.cn/community/031fecd5714db870000013f400112f3.jpg@500w_376h_1c_1e_1l_2o",
    itemImgs: [
      "http://img.zcool.cn/community/031921357159db80000013f40178a85.jpg@500w_376h_1c_1e_1l_2o",
      "http://img.zcool.cn/community/031921357159db80000013f40178a85.jpg@500w_376h_1c_1e_1l_2o",
      "http://img.zcool.cn/community/031921357159db80000013f40178a85.jpg@500w_376h_1c_1e_1l_2o",
      "http://img.zcool.cn/community/031921357159db80000013f40178a85.jpg@500w_376h_1c_1e_1l_2o",
      "http://img.zcool.cn/community/031921357159db80000013f40178a85.jpg@500w_376h_1c_1e_1l_2o",
      "http://img.zcool.cn/community/031921357159db80000013f40178a85.jpg@500w_376h_1c_1e_1l_2o"
    ]
  },
  {
    itemTitle: "昨日",
    itemMainImg: "http://img.zcool.cn/community/031fecd5714db870000013f400112f3.jpg@500w_376h_1c_1e_1l_2o",
    itemImgs: [
      "http://img.zcool.cn/community/031921357159db80000013f40178a85.jpg@500w_376h_1c_1e_1l_2o",
      "http://img.zcool.cn/community/031921357159db80000013f40178a85.jpg@500w_376h_1c_1e_1l_2o",
      "http://img.zcool.cn/community/031921357159db80000013f40178a85.jpg@500w_376h_1c_1e_1l_2o",
      "http://img.zcool.cn/community/031921357159db80000013f40178a85.jpg@500w_376h_1c_1e_1l_2o",
      "http://img.zcool.cn/community/031921357159db80000013f40178a85.jpg@500w_376h_1c_1e_1l_2o",
      "http://img.zcool.cn/community/031921357159db80000013f40178a85.jpg@500w_376h_1c_1e_1l_2o"
    ]
  }
];

class HomePage extends Component {
  render() {
    return(
      <ScrollView style={{flex: 1, marginBottom: 56}}>
        <TopBanner />
        <MarketRecommendView />
        {
          DAILY_RECOMMEND_DATA.map((dailyRecommend, index) =>
            (<DailyRecommendView
              key={index}
              itemTitle={dailyRecommend.itemTitle}
              itemMainImg={dailyRecommend.itemMainImg}
              itemImgs={dailyRecommend.itemImgs} />)
          )
        }
      </ScrollView>
    );
  }
}

module.exports = HomePage;