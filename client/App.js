import { StatusBar, View } from "react-native";
import React, { Fragment } from "react";
import Routes from "./src/routes";
import colors from "./src/components/constants/colors";

const App = () => {
  return (
    <View style={{flex:1}}>
      <StatusBar backgroundColor={colors.bgColor} barStyle="dark-content" />
      <Routes />
    </View>
  );
};



export default App;




