import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
// import { CheckBox } from "@react-native-elements/checkbox";

const SearchScreen = () => {
  const [isMediumSearch, setIsMediumSearch] = React.useState(false);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.header}>Explore</Text>

      <View style={styles.searchOption}>
        {/* <CheckBox
          checked={isMediumSearch}
          onPress={() => setIsMediumSearch(!isMediumSearch)}
          checkedColor="#000"
          uncheckedColor="#888"
          containerStyle={styles.checkboxContainer}
          wrapperStyle={styles.checkboxWrapper}
        /> */}
        <Text style={styles.searchText}>Search</Text>
      </View>

      <View style={styles.tagsContainer}>
        {[
          "Data Engineering",
          "Film",
          "Angular",
          "React",
          "JavaScript",
          "UX Design",
        ].map((tag, index) => (
          <TouchableOpacity key={index} style={styles.tagButton}>
            <Text style={styles.tagText}>{tag}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.divider} />

      <Text style={styles.sectionHeader}>Trending on Premium </Text>

      {trendingItems.map((item, index) => (
        <TouchableOpacity key={index} style={styles.trendingItem}>
          <Text style={styles.starIcon}>🌟</Text>
          <View style={styles.trendingContent}>
            <Text style={styles.author}>{item.author}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const trendingItems = [
  {
    author: "Emmanuel Adusei 💬",
    title: "Ukraine Update June 4",
    time: "+ 7 hours ago",
  },
  {
    author: "Nana Yaw Asamoah 💬",
    title:
      "Operation Spider's Web: Ukraine's Drone Strike That Crippled Russia's Nuclear Triad",
    time: "+ Yesterday",
  },
  {
    author: "Amaniampong kelvin 💬",
    title: "How Ultra-Processed Foods Make you Fat 1/2",
    time: "+ 17 hours ago",
  },
  {
    author: "Solomon Amoah",
    title: "Macron Stuns China With Rare, Blunt Nat Security Warning",
    time: "+ 23 hours ago",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#000",
  },
  searchOption: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  checkboxContainer: {
    padding: 0,
    margin: 0,
    marginLeft: 0,
    marginRight: 8,
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  checkboxWrapper: {
    padding: 0,
    margin: 0,
  },
  searchText: {
    fontSize: 16,
    color: "#000",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 24,
    marginLeft: 28,
    gap: 8,
  },
  tagButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: "#f2f2f2",
  },
  tagText: {
    color: "#666",
    fontSize: 14,
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 24,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#000",
  },
  trendingItem: {
    flexDirection: "row",
    marginBottom: 24,
  },
  starIcon: {
    marginRight: 12,
    fontSize: 20,
  },
  trendingContent: {
    flex: 1,
  },
  author: {
    fontWeight: "bold",
    marginBottom: 4,
    color: "#000",
  },
  title: {
    marginBottom: 4,
    color: "#000",
    fontSize: 16,
    lineHeight: 22,
  },
  time: {
    color: "#666",
    fontSize: 12,
  },
});

export default SearchScreen;
