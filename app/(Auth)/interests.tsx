import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Alert,
} from "react-native";

const INTERESTS = [
  "Programming",
  "Data Science",
  "Technology",
  "Self Improvement",
  "Writing",
  "Relationships",
  "Machine Learning",
  "Productivity",
  "Politics",
  "Cryptocurrency",
  "Psychology",
  "Money",
  "Business",
  "Python",
  "Health",
  "Science",
  "Mental Health",
  "Life",
  "Software Development",
  "Startup",
  "Design",
  "JavaScript",
  "Artificial Intelligence",
  "Culture",
  "Software Engineering",
  "Blockchain",
  "Coding",
  "Entrepreneurship",
  "React",
  "UX",
];

const InterestSelectionScreen = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleInterest = (item: string) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleNext = () => {
    if (selected.length >= 3) {
      Alert.alert("Interests Selected", selected.join(", "));
    } else {
      Alert.alert("Select at least 3 interests");
    }
  };

  const renderItem = ({ item }: { item: string }) => {
    const isSelected = selected.includes(item);
    return (
      <TouchableOpacity
        onPress={() => toggleInterest(item)}
        style={[styles.chip, isSelected && styles.chipSelected]}
      >
        <Text style={[styles.chipText, isSelected && styles.chipTextSelected]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Text style={styles.title}>Welcome to Medium</Text>
      <Text style={styles.subtitle}>What are you interested in?</Text>
      <Text style={styles.description}>Choose three or more.</Text>

      <FlatList
        data={INTERESTS}
        keyExtractor={(item) => item}
        renderItem={renderItem}
        numColumns={3}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default InterestSelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 4,
    color: "#000",
  },
  description: {
    textAlign: "center",
    color: "#888",
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 30,
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 12,
  },
  chip: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 8,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  chipSelected: {
    backgroundColor: "#D32F2F", // Red
    borderColor: "#D32F2F",
  },
  chipText: {
    fontSize: 13,
    color: "#333",
  },
  chipTextSelected: {
    color: "#fff",
  },
  nextButton: {
    marginTop: "auto",
    backgroundColor: "#D32F2F", // Red
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
