import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import HomePage from '../business/HomePage';
import CategoryPage from '../business/CategoryPage';
import ShoppingCartPage from '../business/ShoppingCartPage';
import MinePage from '../business/MinePage';

const HOME = '主页';
const ICON_HOME_SELECTED = require('../../images/tabs/home_selected.png');
const ICON_HOME_UNSELECTED = require('../../images/tabs/home_unselected.png');

const CATEGORY = '分类';
const ICON_CATEGORY_SELECTED = require('../../images/tabs/search_selected.png');
const ICON_CATEGORY_UNSELECTED = require('../../images/tabs/search_unselected.png');

const SHOPPING_CART = '购物车';
const ICON_SHOPPING_CART_SELECTED = require('../../images/tabs/shopping_cart_selected.png');
const ICON_SHOPPING_CART_UNSELECTED = require('../../images/tabs/shopping_cart_unselected.png');

const MINE = '我';
const ICON_MINE_SELECTED = require('../../images/tabs/mine_selected.png');
const ICON_MINE_UNSELECTED = require('../../images/tabs/mine_unselected.png');

class MainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {selectedTab: HOME, isShowTabBar: true};
    this._renderTabItem = this._renderTabItem.bind(this);
  }

  _renderTabItem(icon, selectedIcon, tag, childView) {

    var isSelected = tag === this.state.selectedTab;
    var tabTitle = tag;
    var tabIcon = () => <Image style={styles.tabIcon} source={icon}/>;
    var tabSelectedIcon = () => <Image style={styles.tabIcon} source={selectedIcon}/>;
    var tabPressListener = () => this.setState({ selectedTab: tag });

    return (
      <TabNavigator.Item
        selected={isSelected}
        title={tabTitle}
        renderIcon={tabIcon}
        renderSelectedIcon={tabSelectedIcon}
        onPress={tabPressListener}>
        {childView}
      </TabNavigator.Item>
    );

  }

  static _createSimpleChildView(tag) {
    return (
      <View style={{flex:1, backgroundColor:'#ccc', alignItems:'center', justifyContent:'center'}}>
        <Text style={{fontSize:22}}>{tag}</Text>
      </View>
    );
  }

  _createChildView(tag) {
    let renderView;
    switch(tag) {
      case HOME:
        renderView = <HomePage/>;
        break;
      case CATEGORY:
        renderView = <CategoryPage/>;
        break;
      case SHOPPING_CART:
        renderView = <ShoppingCartPage/>;
        break;
      case MINE:
        renderView = <MinePage/>;
        break;
    }

    return (
      <View style={styles.container}>
        {renderView}
      </View>
    );
  }

  render() {
    let {isShowTabBar} = this.state;
    return (
      <View style={{flex: 1}}>
        <TabNavigator 
          hidesTabTouch={true} 
          tabBarStyle={isShowTabBar ? styles.tab : styles.tabHide}
          sceneStyle={{ paddingBottom: 0}}>

          {this._renderTabItem(ICON_HOME_UNSELECTED, ICON_HOME_SELECTED, HOME, MainPage._createSimpleChildView(HOME))}
          {this._renderTabItem(ICON_CATEGORY_UNSELECTED, ICON_CATEGORY_SELECTED, CATEGORY, MainPage._createSimpleChildView(CATEGORY))}
          {this._renderTabItem(ICON_SHOPPING_CART_UNSELECTED, ICON_SHOPPING_CART_SELECTED, SHOPPING_CART, MainPage._createSimpleChildView(SHOPPING_CART))}
          {this._renderTabItem(ICON_MINE_UNSELECTED, ICON_MINE_SELECTED, MINE, MainPage._createSimpleChildView(MINE))}
        </TabNavigator>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tab: {
    height: 56,
    backgroundColor: '#FFF',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: '#E8E8E8',
  },
  tabHide: {
    height: 0,
    position: 'absolute',
    top: Dimensions.get('window').height,
    overflow: 'hidden',
  },
  tabIcon: {
    width: 28,
    height: 28,
    resizeMode: 'stretch',
    marginTop: 8,
  },
});

module.exports = MainPage;
