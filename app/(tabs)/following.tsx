import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const tabs = ["Following", "Featured", "Math", "Media", "Photography"];

const articles = [
  {
    id: "1",
    author: "Medium Staff",
    category: "The Medium Handbook",
    title: "Editor Newsletter: A big update to publications",
    subtitle:
      "Plus Medium Day 2025, SEO tips for your writers, and a request for your…",
    time: "6d ago",
    views: "295",
    comments: "6",
    image: "https://via.placeholder.com/80x60.png?text=Editor",
  },
  {
    id: "2",
    author: "Medium Staff",
    category: "The Medium Handbook",
    title:
      "Writer Newsletter: Want to speak at Medium Day 2025? Here’s what you should know",
    subtitle: "Plus SEO settings and Friend of Medium membership breakdown",
    time: "6d ago",
    views: "226",
    comments: "4",
    image: "https://via.placeholder.com/80x60.png?text=Writer",
  },
  {
    id: "3",
    author: "Medium Staff",
    category: "The Medium Blog",
    title: "It happened on Medium: Highlights from the week",
    subtitle: "Our roundup of popular stories and insights from our team",
    time: "5d ago",
    views: "310",
    comments: "8",
    image: "https://via.placeholder.com/80x60.png?text=Medium",
  },
];

const FollowingScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Following");

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{activeTab}</Text>
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

      {/* Article Feed */}
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.feed}
        renderItem={({ item }) => (
          <View style={styles.article}>
            <Text style={styles.metaLine}>
              In <Text style={styles.metaBold}>{item.category}</Text> by{" "}
              {item.author}
            </Text>

            <View style={styles.contentRow}>
              <View style={{ flex: 1, paddingRight: 10 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>

                <View style={styles.metaInfo}>
                  <Text style={styles.metaSmall}>{item.time}</Text>
                  <Text style={styles.metaSmall}>👁 {item.views}</Text>
                  <Text style={styles.metaSmall}>💬 {item.comments}</Text>
                </View>
              </View>

              <Image source={{ uri: item.image }} style={styles.thumbnail} />
            </View>

            <View style={styles.actionRow}>
              <Text style={styles.icon}>🔖</Text>
              <Text style={styles.icon}>⋯</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default FollowingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  tabs: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingHorizontal: 10,
  },
  tabItem: {
    marginRight: 20,
    paddingVertical: 12,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
  tabText: {
    fontSize: 16,
    color: "#888",
  },
  activeTabText: {
    color: "#000",
    fontWeight: "bold",
  },
  feed: {
    padding: 16,
  },
  article: {
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 16,
  },
  metaLine: {
    fontSize: 12,
    color: "#555",
    marginBottom: 6,
  },
  metaBold: {
    fontWeight: "600",
  },
  contentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  metaInfo: {
    flexDirection: "row",
    gap: 12,
  },
  metaSmall: {
    fontSize: 12,
    color: "#999",
    marginRight: 10,
  },
  thumbnail: {
    width: 80,
    height: 60,
    borderRadius: 4,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 6,
  },
  icon: {
    fontSize: 18,
    marginLeft: 20,
  },
});
