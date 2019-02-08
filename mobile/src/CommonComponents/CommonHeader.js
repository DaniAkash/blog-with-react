import React from 'react';
import {
    Button
} from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';

const navigationOptions = ({navigation, title}) => {
    return {
        title,
        headerLeft: (
            <Button
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
              title="Menu"
              color="tomato"
            />
          ),
    }
};

export default navigationOptions;