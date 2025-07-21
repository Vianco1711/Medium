import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PremiumHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.premiumText}>PREMIUM</Text>
      <Text style={styles.pressText}>PRESS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  premiumText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0000FF",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8, // Space between the two lines
  },
  pressText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#FF0000",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
});

export default PremiumHeader;
