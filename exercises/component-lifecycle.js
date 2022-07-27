import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

export default () => {
  const [updateCount, setUpdateCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setUpdateCount(seconds => seconds + 1);
      console.log(updateCount);
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log("unsubscribed");
    }
  }, );

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>The listener has updated {updateCount} time(s).</Text>
    </View>
  );
};




// BELOW EXAMPLE UPDATES ONCE AFTER 3 SECONDS POST LOAD

// import React, { useState, useEffect } from "react";
// import { View, Text } from "react-native";

// export default () => {
//   const [updateCount, setUpdateCount] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setUpdateCount('3 seconds');
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>The listener has updated {updateCount} time(s).</Text>
//     </View>
//   );
// };
