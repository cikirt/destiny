import { DrawerNavigator, DrawerItems } from 'react-navigation'
import React from 'react'
import {
  Text,
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Image,
  Dimensions
} from 'react-native'
import Expo, { AppLoading, Asset, Font } from 'expo'
import { Ionicons } from '@expo/vector-icons'

// 一级菜单具体页面
import Login from './src/drawer/login'
import Components from './src/drawer/components'
// import Ratings from './src/drawer/ratings'
// import Pricing from './src/drawer/pricing'
// import Profile from './src/drawer/profile'
// import Lists from './src/drawer/lists'

// 获取屏幕大小
const SCREEN_WIDTH = Dimensions.get('window').width

// 一级菜单样式自定义
const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor: '#43484d' }}>
    <View
      style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}
    >
      {/* <Image
        source={require('./src/images/logo.png')}
        style={{ width: SCREEN_WIDTH * 0.57 }}
        resizeMode="contain"
      /> */}
    </View>
    <View style={{ marginLeft: 10 }}>
      <DrawerItems {...props} />
    </View>
  </View>
)
// 一级菜单配置
const RootNavigation = DrawerNavigator(
  {
    Login: {
      path: '/login',
      screen: Login
    },
    Components: {
      path: '/components',
      screen: Components
    }
    // Profile: {
    //   path: '/profile',
    //   screen: Profile
    // },
    // Lists: {
    //   path: '/lists',
    //   screen: Lists
    // },

    // Ratings: {
    //   path: '/ratings',
    //   screen: Ratings,
    // },
    // Pricing: {
    //   path: '/pricing',
    //   screen: Pricing,
    // }
  },
  {
    // 初始化跳转功能界面
    initialRouteName: 'Login',
    contentOptions: {
      activeTintColor: '#b2ff59',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: '#757575',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 15,
        marginLeft: 0
      }
    },
    drawerWidth: SCREEN_WIDTH * 0.5,
    contentComponent: CustomDrawerContentComponent,
    //三个函数控制菜单显示
    drawerOpenRoute: 'openLeftNavigation',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  }
)

// react 样式处理方式
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)'
  }
})

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && (
            <StatusBar
              animated={true}
              hidden={false}
              backgroundColor={'red'}
              translucent={true}
              barStyle="default"
            />
          )}
          <RootNavigation />
        </View>
      )
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/bg_screen1.jpg'),
        require('./assets/images/bg_screen2.jpg'),
        require('./assets/images/splash.png')
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        // light: require('./assets/fonts/Ubuntu-Light.ttf'),
        // bold: require('./assets/fonts/Ubuntu-Bold.ttf'),
        lightitalic: require('./assets/fonts/Ubuntu-Light-Italic.ttf'),
        georgia: require('./assets/fonts/Georgia.ttf'),
        regular: require('./assets/fonts/Montserrat-Regular.ttf'),
        light: require('./assets/fonts/Montserrat-Light.ttf'),
        bold: require('./assets/fonts/Montserrat-Bold.ttf'),
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')
      })
    ])
  }

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error)
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }
}
