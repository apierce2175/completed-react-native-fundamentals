import React, { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet, SafeAreaView } from "react-native";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  name: {
    fontSize: 16,
  },
  separator: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: 1,
  },
});

export default () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://randomuser.me/api/?results=100&inc=name")
      .then((response) => response.json())
      .then((response) => {
        setData(response.results);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Error:", error);
      })
      .finally(() => {
        setIsLoading(false)
      });
  }, []);

  if (isLoading) {
    return (
      <View>
        <Text>Please wait for data to load</Text>
      </View>
    );
  }
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.name}>
                {item.name.first} {item.name.last}
              </Text>
            </View>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};
