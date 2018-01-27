import Expo from 'expo'
import React from 'react'
import { TabNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'

import ButtonsTab from '../tabs/buttons'
import ListsTab from '../tabs/lists'
import InputTab from '../tabs/input'
import FontsTab from '../tabs/fonts'

import MessageTab from '../tabs/message'
import BooksTab from '../tabs/books'
import BookStoreTab from '../tabs/bookstore'

const Components = TabNavigator(
  {
    ButtonsTab: {
      screen: MessageTab,
      path: '/message',
      navigationOptions: {
        tabBarLabel: '消息',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'message' : 'message'}
            type="material-community"
            color={tintColor}
          />
        )
      }
    },
    BooksTab: {
      screen: BooksTab,
      path: '/books',
      navigationOptions: {
        tabBarLabel: '作品创作',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name="list" type="entypo" color={tintColor} />
        )
      }
    },
    BookStoreTab: {
      screen: BookStoreTab,
      path: '/bookstore',
      navigationOptions: {
        tabBarLabel: '公共作品',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name="wpforms" type="font-awesome" color={tintColor} />
        )
      }
    },
    FontsTab: {
      screen: FontsTab,
      path: '/fonts',
      navigationOptions: {
        tabBarLabel: '我',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'user-o' : 'user-o'}
            type="font-awesome"
            color={tintColor}
          />
        )
      }
    }
  },
  {
    initialRouteName: 'BooksTab',
    animationEnabled: true,
    swipeEnabled: false,
    // Android's default option displays tabBars on top, but iOS is bottom
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showLabel: true,
      activeTintColor: '#b2ff59',
      // Android's default showing of icons is false whereas iOS is true
      showIcon: true,
      indicatorStyle: {
        height: 0 // 如TabBar下面显示有一条线，可以设高度为0后隐藏
      },
      // labelStyle: {
      //   fontSize: 12
      // },
      // tabStyle: {
      //   width: "25%",
      // },
      style: {
        backgroundColor: 'grey',
        paddingBottom: 5
        // height: 55
      }
    }
    //https://www.jianshu.com/p/7d435e199c96
  }
)

Components.navigationOptions = {
  drawerLabel: '工作台',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="settings"
      size={30}
      iconStyle={{
        width: 30,
        height: 30
      }}
      type="material"
      color={tintColor}
    />
  )
}

export default Components
