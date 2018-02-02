import Expo from 'expo';
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Platform } from 'react-native';

import { Text, Button, Icon, Card } from 'react-native-elements';

import colors from 'HSColors';
import socialColors from 'HSSocialColors';
import fonts from 'HSFonts';

class IconsDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
       
    }
    this.someFunction = this.someFunction.bind(this)
  }
  ratingCompleted(rating) {
    console.log('Rating is: ' + rating);
  }
  someFunction(){

  }
  render() {
    const { navigation } = this.props;

    return (
      <Card
        title="jj"
        containerStyle={{ marginTop: 15, marginBottom: 15 }}
      >
   
      </Card>
    


    );
  }
}

export default IconsDetail;
