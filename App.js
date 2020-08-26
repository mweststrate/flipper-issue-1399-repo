/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, Button, Alert} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Button
          onPress={() => {
            Alert.alert(
              'Alert Title',
              'My Alert Msg',
              [{text: 'OK', onPress: () => console.log('OK Pressed')}],
              {cancelable: false},
            );
          }}
          title="Trigger alert"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
