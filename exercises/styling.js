import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Square = ({ squareNumber, squareColor }) => (
  // combine class and inline style for variable
  <View style={[
    styles.square,
    {
      backgroundColor: squareColor,
    }
  ]}
  >
    <Text>Square {squareNumber}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  square: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    height: 111,
  },
});

export default () => (
  <View
    style={styles.container}
  >
    <Square squareColor="#00ffff" squareNumber="1" />
    <Square squareColor="#ff00ff" squareNumber="2" />
    <Square squareColor="#ffff00" squareNumber="3" />
  </View>
);