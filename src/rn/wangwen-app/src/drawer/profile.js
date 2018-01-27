import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Profile from '../views/profile';

const ProfileDrawerItem = StackNavigator({
    Playground: { screen: Profile }
  },
  {
    headerMode: 'none'
  }
);

ProfileDrawerItem.navigationOptions = {
  drawerLabel: '个人中心',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="person"
      size={30}
      iconStyle={{
        width: 30,
        height: 30
      }}
      type="material"
      color={tintColor}
    />
  ),
};

export default ProfileDrawerItem;
