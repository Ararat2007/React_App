import React from "react";
import 'react-native-gesture-handler';
import { View, Dimensions, ImageBackground } from "react-native";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

const ShowImage = props => {
  return (
    <View>
      <ImageBackground
        source={{ uri: props.route.params.url }}
        style={{ height: deviceHeight, width: deviceWidth }}
      />
    </View>
  );
};

export default ShowImage;
