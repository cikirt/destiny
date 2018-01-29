import Expo from 'expo'
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { StackNavigator } from 'react-navigation'

import ListsHome from '../views/books_home'
import BooksDetail from '../views/books_detail'
import BooksChapter from '../views/books_chapter'
import BooksGlobal from '../views/books_global'
import BooksScene from '../views/books_scene'

const ListsTabView = ({ navigation }) => (
  <ListsHome banner="消息" navigation={navigation} />
)

const ListsDetailTabView = ({ navigation }) => (
  <ListsDetails banner="Lists Detail" navigation={navigation} />
)

const ListsTab = StackNavigator(
  {
    Home: {
      screen: ListsTabView,
      path: '/',
      navigationOptions: () => ({
        title: '书本列表'
      })
    },
    BooksDetail: {
      screen: BooksDetail,
      path: 'books_detail',
      navigationOptions: {
        title: '作品信息',
        cardStack: {
          gesturesEnabled: true
        }
      }
    },
    BooksChapter: {
      screen: BooksChapter,
      path: 'books_chapter',
      navigationOptions: {
        title: '章节编写',
        cardStack: {
          gesturesEnabled: true
        }
      }
    },
    BooksGlobal: {
      screen: BooksGlobal,
      path: 'books_global',
      navigationOptions: {
        title: '全局设定',
        cardStack: {
          gesturesEnabled: true
        }
      }
    },
    BooksScene: {
      screen: BooksScene,
      path: 'books_scene',
      navigationOptions: {
        title: '灵感素材',
        cardStack: {
          gesturesEnabled: true
        }
      }
    }
  },
  {
    initialRouteName: 'Home', // 默认显示界面

    mode: 'card', // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
    navigationOptions: {
      cardStack: {
        gesturesEnabled: true
      }
    }
  }
)

export default ListsTab
