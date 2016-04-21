import React, {
  Component,
  StyleSheet,
  Image,
  Dimensions,
  View,
  Platform,
  ToastAndroid,
  AlertIOS,
} from 'react-native';

import ViewPager from 'react-native-viewpager'; 

var deviceWidth = Dimensions.get('window').width;

const TOP_BANNER_IMG_URIS = [
  'https://dn-kdt-img.qbox.me/upload_files/2016/04/20/FtRlZuhZsKKfR9vb9M6abrlpV9l8.png?imageView2/2/w/600/h/0/q/75/format/webp',
  'https://dn-kdt-img.qbox.me/upload_files/2016/04/11/FomW8kzqNAIh5TJ4kUuWKc_LUwrJ.png?imageView2/2/w/600/h/0/q/75/format/webp',
  'https://dn-kdt-img.qbox.me/upload_files/2016/04/13/FugNmSuKK42eXI_6XIlE02ZrgDRw.png?imageView2/2/w/600/h/0/q/75/format/webp',
  'https://dn-kdt-img.qbox.me/upload_files/2016/04/12/FkQanDPzz1x64Ce-HrKLEKi7tWjf.png?imageView2/2/w/600/h/0/q/75/format/webp'
]

function notifyMessage(msg: string) {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT)
  } else {
    AlertIOS.alert(msg);
  }
}

var TopBanner = React.createClass({
  getInitialState: function() {
    var dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    });

    return {
      dataSource: dataSource.cloneWithPages(TOP_BANNER_IMG_URIS),
    };
  },

  render: function() {
    return (
      <ViewPager
        style={this.props.style}
        dataSource={this.state.dataSource}
        renderPage={this._renderPage}
        onChangePage={this._onChangePage}
        autoPlay={true}
        isLoop={true}
        locked={false}/>
    );
  },

  _renderPage: function(
    data: Object, 
    pageID: number | string,) {
    return (
      <Image
        source={{uri: data}}
        style={styles.banner_img} />
    );
  },

  _onChangePage: function(
    page: number | string) {
    notifyMessage('current page: ' + page);
  },
});

const styles = StyleSheet.create ({
  banner_img: {
    height: 160,
    width: deviceWidth,
  },
});

module.exports = TopBanner;