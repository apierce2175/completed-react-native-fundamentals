import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

const CustomButton = ({ onPress, text, customButtonStyle }) => (
  <TouchableOpacity
    onPress={onPress}
    style={customButtonStyle}
  >
    <Text>{text}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  customButtonPrimary: {
    backgroundColor: '#C38D9E',
    color: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 4,
  },
  customButtonSecondary: {
    backgroundColor: '#E27D60',
    color: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#85DCBC',
  },
});

export default () => (
  <View
    style={styles.container}
  >
    <CustomButton text="This is the primary btn" customButtonStyle={styles.customButtonPrimary} onPress={() => alert("Pressed btn 1")} />
    <CustomButton text="secondary" customButtonStyle={styles.customButtonSecondary} onPress={() => alert("Pressed btn 2")} />
  </View>
);