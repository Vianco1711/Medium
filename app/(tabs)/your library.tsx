import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

const tabs = [
  "Your lists",
  "Saved lists",
  "Digest",
  "Highlights",
  "Reading history",
];

const LibraryScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Your lists");

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your library</Text>
        <TouchableOpacity style={styles.newListButton}>
          <Text style={styles.newListText}>New list</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabs}
      >
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[styles.tabItem, activeTab === tab && styles.activeTab]}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Red Banner */}
      <View style={styles.banner}>
        <View style={{ flex: 1 }}>
          <Text style={styles.bannerTitle}>
            Organize and share stores effortlessly with a curated list.
          </Text>
          <TouchableOpacity style={styles.bannerButton}>
            <Text style={styles.bannerButtonText}>Start a list</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.bookmarkIcon}>🔖</Text>
      </View>

      {/* User List */}
      <View style={styles.userList}>
        <View style={styles.userHeader}>
          <Image
            source={{ uri: "https://via.placeholder.com/30x30.png?text=👤" }}
            style={styles.avatar}
          />
          <Text style={styles.username}>Amanipongkelvin</Text>
        </View>

        <Text style={styles.listTitle}>Reading list</Text>
        <Text style={styles.emptyText}>No stories 🔒</Text>

        {/* Action row */}
        <View style={styles.actionRow}>
          <Text style={styles.icon}>⬇️</Text>
          <Text style={styles.icon}>⋯</Text>
        </View>

        {/* Placeholder tiles */}
        <View style={styles.tiles}>
          <View style={styles.tile} />
          <View style={styles.tile} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LibraryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  newListButton: {
    backgroundColor: "#FF0000", // Changed from green to red
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  newListText: {
    color: "#fff",
    fontWeight: "bold",
  },
  tabs: {
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  tabItem: {
    marginRight: 20,
    paddingVertical: 12,
  },
  tabText: {
    fontSize: 16,
    color: "#999",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
  activeTabText: {
    color: "#000",
    fontWeight: "bold",
  },
  banner: {
    backgroundColor: "#FF0000", // Changed from green to red
    margin: 16,
    padding: 16,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  bannerTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  bannerButton: {
    backgroundColor: "#000",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  bannerButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  bookmarkIcon: {
    fontSize: 30,
    marginLeft: 12,
    color: "#fff",
  },
  userList: {
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: "#fafafa",
    borderRadius: 10,
    marginBottom: 40,
  },
  userHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 24,
    height: 24,
    marginRight: 8,
    borderRadius: 12,
  },
  username: {
    fontSize: 14,
    color: "#444",
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  emptyText: {
    fontSize: 14,
    color: "#888",
    marginBottom: 12,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  icon: {
    fontSize: 18,
    marginLeft: 16,
  },
  tiles: {
    flexDirection: "row",
    gap: 8,
  },
  tile: {
    flex: 1,
    height: 100,
    backgroundColor: "#eaeaea",
    borderRadius: 8,
  },
});
