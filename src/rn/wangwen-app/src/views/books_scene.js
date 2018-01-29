import Expo from 'expo';
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Platform } from 'react-native';

import { Text, Button, Icon, Card } from 'react-native-elements';

import colors from 'HSColors';
import socialColors from 'HSSocialColors';
import fonts from 'HSFonts';
import { Tree } from "./charts/Tree";

class IconsDetail extends Component {
  ratingCompleted(rating) {
    console.log('Rating is: ' + rating);
  }

  render() {
    const { navigation } = this.props;
    let data = {
      "name": "Root",
      "children": [{
        "name": "Santa Catarina",
        "children": [{
          "name": "Tromp"
        }, {
          "name": "Thompson"
        }, {
          "name": "Ryan"
        }]
      }, {
        "name": "Acre",
        "children": [{
          "name": "Dicki"
        }, {
          "name": "Armstrong"
        }, {
          "name": "Nitzsche"
        }]
      }]
    }
  
    let options = {
      margin: {
        top: 20,
        left: 50,
        right: 80,
        bottom: 20
      },
      width: 200,
      height: 200,
      fill: "#2980B9",
      stroke: "#3E90F0",
      r: 2,
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      label: {
        fontFamily: 'Arial',
        fontSize: 8,
        fontWeight: true,
        fill: '#34495E'
      }
    }

    
    return (
      <View>
      {/* <Tree data={data} options={options}  /> */}
    </View>
      
    );
  }
}

export default IconsDetail;
