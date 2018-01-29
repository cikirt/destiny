import Expo from 'expo'
import React, { Component } from 'react'

import colors from 'HSColors'
import {
  Text,
  View,
  Image,
  ActivityIndicator,
  ScrollView,
  VirtualizedList,
  Dimensions,
  PanResponder,
  Animated,
  Easing,
  StyleSheet
} from 'react-native'

import { Card, ListItem, Button } from 'react-native-elements'
const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height
let DATA = [
  1,
  2,
  3
]

class Test extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      refreshIndicatorWidth: new Animated.Value(0)
    }

    // this.onScroll = evt => this._scrollPos = evt.nativeEvent.contentOffset.x;
    this.onPullToRefresh = dist =>
      Animated.timing(this.state.refreshIndicatorWidth, {
        toValue: dist,
        duration: 0,
        easing: Easing.linear
      }).start()
    this.resetRefreshStatus = () => {
      Animated.timing(this.state.refreshIndicatorWidth, {
        toValue: 0
      }).start()
    }

    const shouldRespondPan = ({ dx, dy }) => true //(this._scrollPos||0) < 50 && Math.abs(dx) > Math.abs(dy);
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => {
        return shouldRespondPan(gestureState)
      },
      onStartShouldSetPanResponderCapture: (evt, gestureState) => {
        return shouldRespondPan(gestureState)
      },
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return shouldRespondPan(gestureState)
      },
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
        return shouldRespondPan(gestureState)
      },
      onPanResponderGrant: (evt, gestureState) => {
        // 会触发
        // console.warn('----pull-Grant: ' + JSON.stringify(gestureState))
      },
      onPanResponderReject: (e, gestureState) => {
        // 不触发
        // console.warn('----pull-Reject: ' + JSON.stringify(gestureState))
      },
      onPanResponderStart: (e, gestureState) => {
        // 不触发
        // console.warn('----pull-Start: ' + JSON.stringify(gestureState))
      },
      onPanResponderEnd: (e, gestureState) => {
        // 会触发
        // console.warn('----pull-End: ' + JSON.stringify(Object.keys(e)))
        this.resetRefreshStatus()
      },
      onPanResponderMove: (evt, gestureState) => {
        // 会触发，但只触发一次就直接触发on end了
        // console.warn('----pull-Move: ' + JSON.stringify(gestureState))
        this.onPullToRefresh(gestureState.dx)
      },
      onPanResponderTerminationRequest: () => {
        // 不触发
        // console.warn(
        //   '----pull-TerminationRequest: ' + JSON.stringify(gestureState)
        // )
        return false
      },
      onPanResponderRelease: (evt, gestureState) => {
        // 不触发
        // console.warn('----pull-Release: ' + JSON.stringify(gestureState))
        this.resetRefreshStatus()
      },
      onPanResponderTerminate: () => {
        // 不触发
        // console.warn('----pull-Terminate: ' + JSON.stringify(gestureState))
        this.resetRefreshStatus()
      },
      onShouldBlockNativeResponder: (e, gestureState) => {
        // 会触发，但返回true和false结果一样
        // console.warn('----pull-BlockNative')
        return false
      }
    })

    this.renderRow = this.renderRow.bind(this)
    this.goDetail = this.goDetail.bind(this)
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    // console.warn('----updated: ' + JSON.stringify(this.props))
    this.resetRefreshStatus()
  }
  goDetail(){
    this.props.navigation.navigate('BooksDetail')
  }
  renderRow({ item, index }) {
    
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: Dimensions.get('window').width,
          height: '100%'
        }}
      >
        <Card
          title={item + '《多情剑客无情剑》'}
          image={require('../../assets//images/bg_screen1.jpg')}
        >
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>

          <View style={{ flexDirection: 'row' }}>
          <Button
                    buttonStyle={styles.loginButton}
                    containerStyle={{ marginTop: 32, flex: 4 }}
                    activeOpacity={0.8}
                    text='作品信息'
                    onPress={() =>this.props.navigation.navigate('BooksDetail')}
                    textStyle={styles.loginTextButton}
             
                  />
                   <Button
                    buttonStyle={styles.loginButton}
                    containerStyle={{ marginTop: 32, flex: 4 }}
                    activeOpacity={0.8}
                    text='灵感素材'
                    onPress={() =>this.props.navigation.navigate('BooksScene')}
                    textStyle={styles.loginTextButton}
             
                  />
                </View>
         
           
                <View style={{ flexDirection: 'row' }}>
          <Button
                    buttonStyle={styles.loginButton}
                    containerStyle={{ marginTop: 32, flex: 4 }}
                    activeOpacity={0.8}
                    text='全局设定'
                    onPress={() =>this.props.navigation.navigate('BooksGlobal')}
                    textStyle={styles.loginTextButton}
             
                  />
                   <Button
                    buttonStyle={styles.loginButton}
                    containerStyle={{ marginTop: 32, flex: 4 }}
                    activeOpacity={0.8}
                    text='章节编写'
                    onPress={() =>this.props.navigation.navigate('BooksChapter')}
                    textStyle={styles.loginTextButton}
             
                  />
                </View>
        </Card>
      </View>
    )
  }

  render() {
    
    /******* Test with a VirtualizedList *******/
    return (
      <VirtualizedList
        // {...this._panResponder.panHandlers}
        data={DATA}
        ListEmptyComponent={<View />}
        getItem={getItem}
        getItemCount={getItemCount}
        keyExtractor={keyExtractor}
        renderItem={this.renderRow}
        getItemLayout={(data, index) => ({
          length: Dimensions.get('window').width,
          offset: Dimensions.get('window').width * index,
          index
        })}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        // ListHeaderComponent={
        //   <Animated.View
        //     style={{
        //       flex: 1,
        //       height: '100%',
        //       width: this.state.refreshIndicatorWidth,
        //       justifyContent: 'center',
        //       alignItems: 'center',
        //       backgroundColor: 'white'
        //     }}
        //   >
        //     <ActivityIndicator size="large" />
        //   </Animated.View>
        // }
        onScroll={this.onScroll}
      />
    )
    /******* Test with a ScrollView *******/
    // return (
    //   <View style={{ height: Dimensions.get('window').height }}>
    //     <ScrollView {...this._panResponder.panHandlers} horizontal={true}>
    //       <View
    //         style={{
    //           width: Dimensions.get('window').width * 0.8,
    //           // height: 100,
    //           backgroundColor: 'green'
    //         }}
    //       >
    //         <Card title="《多情剑客无情剑》">
    //           <Text style={{ marginBottom: 10 }}>
    //             The idea with React Native Elements is more about component
    //             structure than actual design.
    //           </Text>
    //           <Button
    //             icon={{ name: 'edit' }}
    //             backgroundColor="#03A9F4"
    //             buttonStyle={{
    //               borderRadius: 0,
    //               marginLeft: 0,
    //               marginRight: 0,
    //               marginBottom: 0
    //             }}
    //             title="编辑"
    //           />
    //         </Card>
    //       </View>
    //       <View
    //         style={{
    //           width: Dimensions.get('window').width * 0.8,
    //           // height: 100,
    //           backgroundColor: 'green'
    //         }}
    //       >
    //         <Card title="《红楼梦》">
    //           <Text style={{ marginBottom: 10 }}>
    //             The idea with React Native Elements is more about component
    //             structure than actual design.
    //           </Text>
    //           <Button
    //             icon={{ name: 'edit' }}
    //             backgroundColor="#03A9F4"
    //             buttonStyle={{
    //               borderRadius: 0,
    //               marginLeft: 0,
    //               marginRight: 0,
    //               marginBottom: 0
    //             }}
    //             title="编辑"
    //           />
    //         </Card>
    //       </View>
    //       <View
    //         style={{
    //           width: Dimensions.get('window').width * 0.8,
    //           // height: 100,
    //           backgroundColor: 'green'
    //         }}
    //       >
    //         <Card title="《红楼梦》">
    //           <Text style={{ marginBottom: 10 }}>
    //             The idea with React Native Elements is more about component
    //             structure than actual design.
    //           </Text>
    //           <Button
    //             icon={{ name: 'edit' }}
    //             backgroundColor="#03A9F4"
    //             buttonStyle={{
    //               borderRadius: 0,
    //               marginLeft: 0,
    //               marginRight: 0,
    //               marginBottom: 0
    //             }}
    //             title="编辑"
    //           />
    //         </Card>
    //       </View>
    //       <View
    //         style={{
    //           width: Dimensions.get('window').width * 0.8,
    //           // height: 100,
    //           backgroundColor: 'green'
    //         }}
    //       >
    //         <Card title="《红楼梦》">
    //           <Text style={{ marginBottom: 10 }}>
    //             The idea with React Native Elements is more about component
    //             structure than actual design.
    //           </Text>
    //           <Button
    //             icon={{ name: 'edit' }}
    //             backgroundColor="#03A9F4"
    //             buttonStyle={{
    //               borderRadius: 0,
    //               marginLeft: 0,
    //               marginRight: 0,
    //               marginBottom: 0
    //             }}
    //             title="编辑"
    //           />
    //         </Card>
    //       </View>
    //       <View
    //         style={{
    //           width: Dimensions.get('window').width * 0.8,
    //           // height: 100,
    //           backgroundColor: 'green'
    //         }}
    //       >
    //         <Card title="《红楼梦》">
    //           <Text style={{ marginBottom: 10 }}>
    //             The idea with React Native Elements is more about component
    //             structure than actual design.
    //           </Text>
    //           <Button
    //             icon={{ name: 'edit' }}
    //             backgroundColor="#03A9F4"
    //             buttonStyle={{
    //               borderRadius: 0,
    //               marginLeft: 0,
    //               marginRight: 0,
    //               marginBottom: 0
    //             }}
    //             title="编辑"
    //           />
    //         </Card>
    //       </View>
    //       <View
    //         style={{
    //           width: Dimensions.get('window').width * 0.8,
    //           // height: 100,
    //           backgroundColor: 'green'
    //         }}
    //       >
    //         <Card title="《红楼梦》">
    //           <Text style={{ marginBottom: 10 }}>
    //             The idea with React Native Elements is more about component
    //             structure than actual design.
    //           </Text>
    //           <Button
    //             icon={{ name: 'edit' }}
    //             backgroundColor="#03A9F4"
    //             buttonStyle={{
    //               borderRadius: 0,
    //               marginLeft: 0,
    //               marginRight: 0,
    //               marginBottom: 0
    //             }}
    //             title="编辑"
    //           />
    //         </Card>
    //       </View>
    //     </ScrollView>
    //   </View>
    // )
  }
}

const getItem = (data, index) => data[index]
const getItemCount = data => data.length
const keyExtractor = (item, index) => 'R' + index

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowSelector: {
    height: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  selectorContainer: {
    flex: 1,
    alignItems: 'center'
  },
  selected: {
    position: 'absolute',
    borderRadius: 50,
    height: 0,
    width: 0,
    top: -5,
    borderRightWidth: 70,
    borderBottomWidth: 70,
    borderColor: 'white',
    backgroundColor: 'white'
  },
  loginContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginTextButton: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  },
  loginButton: {
    backgroundColor: 'rgba(232, 147, 142, 1)',
    borderRadius: 10
    // height: 50,
    // width: 100
  },
  titleContainer: {
    height: 150,
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  formContainer: {
    backgroundColor: 'white',
    width: SCREEN_WIDTH - 30,
    borderRadius: 10,
    paddingTop: 32,
    paddingBottom: 32,
    alignItems: 'center'
  },
  loginText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    fontFamily: 'light',
    backgroundColor: 'transparent',
    opacity: 0.54
  },
  selectedCategoryText: {
    opacity: 1
  },
  titleText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'regular'
  },
  titleText2: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'regular'
  },
  helpContainer: {
    height: 64,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Test
