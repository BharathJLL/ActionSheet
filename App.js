/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight} from 'react-native';

import ActionSheet from './src/component/ActionSheet';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        titles: [
            {title: 'Save Draft', imgUrl: require('./assets/icons/save-draft.png'),actionStyle: 'default', action: () => {console.log('Save Draft');}},
            {title: 'Copmlete', imgUrl: require('./assets/icons/complete.png'), actionStyle: 'default', action: () => {console.log('Copmlete');}},
            {title: 'Copmlete & Share', imgUrl: require('./assets/icons/share.png'), actionStyle: 'default', action: () => {console.log('Copmlete & Share');}},
            {title: 'Cancel',  actionStyle: 'cancel', action: () => {console.log('click Cancel');}}
            ]
    };
}
  render() {
    const { titles } = this.state;

    return (
      <View style={styles.container}>
          <ActionSheet
              ref="actionSheet"
              titles={titles}
              separateHeight={3}
              separateColor="#BCBBC1"
              backgroundColor="rgba(0, 0, 0, 0.25)"
              containerStyle={{margin: 10, borderRadius: 13}}
              onClose={(obj) => {console.log('action sheet closed! clicked:' + JSON.stringify(obj));}}
          />
  
          <TouchableHighlight underlayColor='#FFF' onPress={() => {this.refs.actionSheet.show();}}>
              <Text style={styles.welcome}>Click</Text>
          </TouchableHighlight>
      </View>
  )
    
  }

}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF'
  },
  welcome: {
      fontSize: 25,
      textAlign: 'center',
      margin: 10,
      color:'#000'
  }
});
