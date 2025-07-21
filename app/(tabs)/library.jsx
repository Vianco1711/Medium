import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { startMapper } from "react-native-reanimated";

const LibraryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your library</Text>

      <Text style={styles.subtitle}>
        Create a list to easily curate and share stories
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start a list</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <Text style={styles.sectionTitle}>Reading list</Text>
      <Text style={styles.emptyState}>No stories</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignSelf: "flex-start",
    marginBottom: 30,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    backgroundColor: "#e1e1e1",
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  emptyState: {
    color: "#999",
  },
});
