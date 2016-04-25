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
    itemMainImg: "https://dn-kdt-img.qbox.me/upload_files/2016/04/22/FgpJLAwjdbQsCMNZoo5pdChuyS0S.png?imageView2/2/w/600/h/0/q/75/format/webp",
    itemImgs: [
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp"
    ]
  },
  {
    itemTitle: "周日",
    itemMainImg: "https://dn-kdt-img.qbox.me/upload_files/2016/04/22/FifvBymr_gFWbsKsawKKxlP0kPku.png?imageView2/2/w/600/h/0/q/75/format/webp",
    itemImgs: [
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp"
    ]
  },
  {
    itemTitle: "周六",
    itemMainImg: "https://dn-kdt-img.qbox.me/upload_files/2016/04/22/Fogzf-DnG0ppjPYDWdI2Sc8r_QWY.png?imageView2/2/w/600/h/0/q/75/format/webp",
    itemImgs: [
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp"
    ]
  },
  {
    itemTitle: "周五",
    itemMainImg: "https://dn-kdt-img.qbox.me/upload_files/2016/04/20/Fi0lVs6IaLocxc65IPD2G4dRasIL.png?imageView2/2/w/600/h/0/q/75/format/webp",
    itemImgs: [
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp"
    ]
  },
  {
    itemTitle: "周四",
    itemMainImg: "https://dn-kdt-img.qbox.me/upload_files/2016/04/09/FgEcqBKt-ejvnP74ZMWPvjcFEPih.png?imageView2/2/w/600/h/0/q/75/format/webp",
    itemImgs: [
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp"
    ]
  },
  {
    itemTitle: "周三",
    itemMainImg: "https://dn-kdt-img.qbox.me/upload_files/2016/04/11/FqtG_b7lqDGhnMlh0hkoh2vqo3vk.png?imageView2/2/w/600/h/0/q/75/format/webp",
    itemImgs: [
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp"
    ]
  },
  {
    itemTitle: "周二",
    itemMainImg: "https://dn-kdt-img.qbox.me/upload_files/2016/04/22/FnFv6gaU5A96z1P1Aw28yRR969jN.png?imageView2/2/w/600/h/0/q/75/format/webp",
    itemImgs: [
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp",
      "https://dn-kdt-img.qbox.me/upload_files/2015/06/23/FtP45tyP5MQ7mc5nUjfVZaS9fKU7.jpg?imageView2/2/w/280/h/0/q/75/format/webp"
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