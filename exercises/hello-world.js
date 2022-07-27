import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

export default () => {
  const [time, setTime] = useState(new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>The time in LA is: {time}</Text>
    </View>
  );
}