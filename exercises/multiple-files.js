import React from "react";
import { View } from "react-native";
import { CustomButton } from './custom-btn.component';


export default () => (
  <View style={{ marginTop: 20 }}>
    <CustomButton text="Say hello" onPress={() => alert("Importing Custom Btn from external file worked!")} />
  </View>
);
