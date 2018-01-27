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
  Easing
} from 'react-native'

import { Card, ListItem, Button } from 'react-native-elements'

let DATA = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20
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
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    // console.warn('----updated: ' + JSON.stringify(this.props))
    this.resetRefreshStatus()
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
        <Text>{item}</Text>
      </View>
    )
  }

  render() {
    /******* Test with a VirtualizedList *******/
    // return (
    //   <VirtualizedList
    //     {...this._panResponder.panHandlers}
    //     data={DATA}
    //     ListEmptyComponent={<View />}
    //     getItem={getItem}
    //     getItemCount={getItemCount}
    //     keyExtractor={keyExtractor}
    //     renderItem={this.renderRow}
    //     horizontal={true}
    //     pagingEnabled={true}
    //     showsHorizontalScrollIndicator={false}
    //     ListHeaderComponent={
    //       <Animated.View
    //         style={{
    //           flex: 1,
    //           height: '100%',
    //           width: this.state.refreshIndicatorWidth,
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //           backgroundColor: 'white'
    //         }}
    //       >
    //         <ActivityIndicator size="large" />
    //       </Animated.View>
    //     }
    //     onScroll={this.onScroll}
    //   />
    // )
    /******* Test with a ScrollView *******/
    return (
      <View style={{ height: Dimensions.get('window').height }}>
        <ScrollView {...this._panResponder.panHandlers} horizontal={false}>
          <View
            style={{
              width: Dimensions.get('window').width,
              // height: 100,
              backgroundColor: 'green'
            }}
          >
            <Card title="《多情剑客无情剑》">
              <Text style={{ marginBottom: 10 }}>
                The idea with React Native Elements is more about component
                structure than actual design.
              </Text>
              <Button
                // icon={{ name: 'edit' }}
                backgroundColor="#03A9F4"
                buttonStyle={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0
                }}
                title="编辑"
              />
            </Card>
          </View>
          <View
            style={{
              width: Dimensions.get('window').width,
              // height: 100,
              backgroundColor: 'green'
            }}
          >
            <Card title="《红楼梦》">
              <Text style={{ marginBottom: 10 }}>
                The idea with React Native Elements is more about component
                structure than actual design.
              </Text>
              <Button
                // icon={{ name: 'edit' }}
                backgroundColor="#03A9F4"
                buttonStyle={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0
                }}
                title="帮他编辑"
              />
            </Card>
          </View>
          <View
            style={{
              width: Dimensions.get('window').width,
              // height: 100,
              backgroundColor: 'green'
            }}
          >
            <Card title="《红楼梦》">
              <Text style={{ marginBottom: 10 }}>
                The idea with React Native Elements is more about component
                structure than actual design.
              </Text>
              <Button
                // icon={{ name: 'edit' }}
                backgroundColor="#03A9F4"
                buttonStyle={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0
                }}
                title="帮他编辑"
              />
            </Card>
          </View>
          <View
            style={{
              width: Dimensions.get('window').width,
              // height: 100,
              backgroundColor: 'green'
            }}
          >
            <Card title="《红楼梦》">
              <Text style={{ marginBottom: 10 }}>
                The idea with React Native Elements is more about component
                structure than actual design.
              </Text>
              <Button
                // icon={{ name: 'edit' }}
                backgroundColor="#03A9F4"
                buttonStyle={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0
                }}
                title="编辑"
              />
            </Card>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const getItem = (data, index) => data[index]
const getItemCount = data => data.length
const keyExtractor = (item, index) => 'R' + index

export default Test
