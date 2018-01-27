import Expo from 'expo'
import React, { Component } from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableHighlight,
  ListView
} from 'react-native'

import {
  Text,
  Card,
  ButtonGroup,
  Tile,
  Col,
  Row,
  Icon,
  List,
  ListItem,
  Avatar
} from 'react-native-elements'

import colors from 'HSColors'

const log = () => console.log('this is an example method')

const list2 = [
  {
    icon: 'message',
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: '帮你写小说，同意下呗。',
    time: '10:19'
  },
  {
    icon: 'message',
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
    time: '2018-01-04'
  },
  {
    icon: 'message',
    name: 'Amanda Martin',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    subtitle: 'CEO',
    time: '2018-01-04'
  },
  {
    icon: 'message',
    name: 'Christy Thomas',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
    subtitle: 'Lead Developer',
    time: '2018-01-04'
  },
  {
    icon: 'message',
    name: 'Melissa Jones',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/nuraika/128.jpg',
    subtitle: 'CTO',
    time: '2018-01-04'
  },
  {
    icon: 'message',
    name: 'Melissa Jones',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/nuraika/128.jpg',
    subtitle: 'CTO',
    time: '2018-01-04'
  },
  {
    icon: 'message',
    name: 'Melissa Jones',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/nuraika/128.jpg',
    subtitle: 'CTO',
    time: '2018-01-04'
  },
  {
    icon: 'message',
    name: 'Melissa Jones',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/nuraika/128.jpg',
    subtitle: 'CTO',
    time: '2018-01-04'
  },
  {
    icon: 'message',
    name: 'Melissa Jones',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/nuraika/128.jpg',
    subtitle: 'CTO',
    time: '2018-01-04'
  },
  {
    icon: 'message',
    name: 'Melissa Jones',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/nuraika/128.jpg',
    subtitle: 'CTO',
    time: '2018-01-04'
  }
]

class Icons extends Component {
  constructor() {
    super()
    this.state = {
      value: 0.5
    }
  }

  render() {
    const { navigation } = this.props
    const buttons = ['Button1', 'Button2']
    console.log('show')
    return (
      <ScrollView padding={0} layout_margin={0}>
        <View style={styles.headerContainer}>
          <Icon color="white" name="invert-colors" size={31} />
          <Text style={styles.heading}>消息通知</Text>
        </View>

        <List>
          {list2.map((l, i) => (
            <ListItem
              onPress={() => {
                console.log('clock')
                navigation.navigate('MessageDetail', { param: 'Brent' })
              }}
              key={i}
              leftIcon={{
                name: l.icon,
                type: 'aterial-community',
                style: { color: 'blue' }
              }}
              title={l.name}
              titleStyle={{ color: 'red' }}
              subtitle={
                <View style={styles.subtitleView}>
                  <Text style={styles.ratingText}>{l.subtitle}</Text>
                </View>
              }
              rightTitle={l.time}
              rightTitleStyle={{ color: 'green' }}
            />
          ))}
        </List>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.secondary
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  },
  fonts: {
    marginBottom: 8
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  name: {
    fontSize: 16,
    marginTop: 5
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  subtitleView: {
    flexDirection: 'row',
    // paddingLeft: 10,
    paddingTop: 5,
    overflow: 'hidden',
    flexWrap: 'nowrap'
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    // paddingLeft: 10,
    color: 'grey'
  }
})

export default Icons
