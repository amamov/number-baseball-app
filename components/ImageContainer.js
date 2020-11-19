import React from "react";
import PropTypes from "prop-types";
import { ImageBackground, StyleSheet, View } from "react-native";

const ImageContainer = ({ children, src }) => (
  <View style={styles.container}>
    <ImageBackground source={src} style={styles.image}>
      {children}
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "stretch",
    justifyContent: "flex-start",
    paddingTop: 40,
  },
});

ImageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  src: PropTypes.number.isRequired,
};

export default ImageContainer;
