// Using State and Props

// useState is a hook that is a named export from React.
import React, { useState } from "react";
import { Text, Button, View, Dimensions } from "react-native";

// Dimensions get full height and width of device screen so it can be used as 100vh or 100vw equivalent in styling
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default () => {
  const [count, setCount] = useState(0);
  const btnTitle = "Press Me";
  return (
    <View style={{ alignItems: "center", marginTop: 20, backgroundColor: '#FC4445', width: screenWidth, height: screenHeight }}>
      <Text style={{color: "#3FEEE6"}}>You've pressed the button: {count} time(s)</Text>
      <Button color="#CAFAFE" title={btnTitle} onPress={() => {setCount(count + 1)}} />
    </View>
  );
};
