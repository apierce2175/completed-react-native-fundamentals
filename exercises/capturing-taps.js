import React from 'react';
import { View, Button, Alert, TouchableOpacity, StyleSheet, Text } from 'react-native';


const CapturingTaps = () => (
  <View style={styles.container}>
    <Button
      onPress={() => Alert.alert("User pressed btn 1")}
      title="Button 1"
      accessibilityLabel="Learn about btn 1"
      color='#99738E'
    />
    <Button
      onPress={() => Alert.alert("User pressed btn 2")}
      title="Button 2"
      accessibilityLabel="Learn about btn 2"
      color='#553D67'
    />
    <TouchableOpacity
      onPress={() => Alert.alert("User pressed touchable opacity")}
      style={styles.buttonCustom}
    >
      <Text>Press Here</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
    justifyContent: 'flex-start',
    alignItems: "center",
    backgroundColor: "#242582",
  },
  buttonCustom: {
    backgroundColor: "#553D67",
    borderRadius: 10,
    padding: 10,
  },
});

export default CapturingTaps;