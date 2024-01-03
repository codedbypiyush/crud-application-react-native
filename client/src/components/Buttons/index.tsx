//import Packages
import { ActivityIndicator, Text, TouchableHighlight } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Fontisto from "@expo/vector-icons/Fontisto";
import Foundation from "@expo/vector-icons/Foundation";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
// import type Props from "./Props";
import styles from "./styles";
import { RFValue } from "react-native-responsive-fontsize";

const Buttons = (props) => {
  return (
    <TouchableHighlight
      underlayColor="transprent"
      onPress={props.onPress}
      style={[props.containerStyles, styles.container]}
    >
      {props.isLoading === true ? (
        <ActivityIndicator size={props.loaderSize} color={props.loadercolor} />
      ) : (
        <>
          {props.type === "vector Icon" ? (
            <>
              { props.fontFamily === "FontAwesome5" ? (
                <FontAwesome5
                  size={RFValue(props.iconSize ? props.iconSize : 20)}
                  color={props.iconcolor}
                  name={props.iconName}
                />
              )    : (
                <Ionicons
                  size={RFValue(props.iconSize ? props.iconSize : 20)}
                  color={props.iconcolor}
                  name={props.iconName}
                />
              )}
            </>
          ) : props.type === "Text" ? (
            <Text style={props.textStyle}>{props.title}</Text>
          ) : (
            props.type === "SVG" && props.children
          )}
        </>
      )}
    </TouchableHighlight>
  );
};

export default Buttons;
