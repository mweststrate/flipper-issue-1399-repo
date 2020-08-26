/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,Button, Alert
} from 'react-native';
import Modal from 'react-native-modal'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const ANIMATION_MSEC = 100;

const App: () => React$Node = (() => {
  return (
    <>
            <Modal
            animationInTiming={ANIMATION_MSEC}
            animationOutTiming={ANIMATION_MSEC}
            backdropTransitionOutTiming={ANIMATION_MSEC}
            backdropTransitionInTiming={ANIMATION_MSEC}
            animationIn={'slideInUp'}
            animationOut={'slideOutDown'}
            backdropColor={'blue'}
            backdropOpacity={0.5}
            onBackButtonPress={function() {}}
            onBackdropPress={function() {}}
            propagateSwipe={true}
            isVisible={true}>
            <SafeAreaView >
                <ScrollView >
                    <Text>Test in modal</Text>
                    <Button onPress={() => {
                      Alert.alert(
  'Alert Title',
  'My Alert Msg',
  [
    {
      text: 'Ask me later',
      onPress: () => console.log('Ask me later pressed')
    },
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel'
    },
    { text: 'OK', onPress: () => console.log('OK Pressed') }
  ],
  { cancelable: false }
);
                    }} title="Trigger alert"></Button>
                </ScrollView>
                                  </SafeAreaView>
                                  </Modal>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <Text style={styles.sectionTitle}>Base screen</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
});

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

Modal.defaultProps = Modal.defaultProps || {}
Modal.defaultProps.useNativeDriver = true
Modal.defaultProps.hideModalContentWhileAnimating = true

export default App;
