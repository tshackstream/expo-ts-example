import React from 'react';
import { StyleSheet, View } from 'react-native';
import MyComponent from "components/MyComponent";

export default class Root extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <MyComponent/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});