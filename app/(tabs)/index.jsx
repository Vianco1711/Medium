import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Story from "@/components/stories";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  const [activeTab, setActiveTab] = React.useState("For you");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
      </View>

      {/* Tab Navigation */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabContainer}
      >
        {["For you", "Following", "Featured", "Math"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            ></Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Stories Feed */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.feedContainer}
      >
        <Story
          username={"Nana Yaw"}
          profile_image={require("@/assets/images/WhatsApp Image 2025-04-24 at 23.04.32_066652fd.jpg")}
          title={"Nana Yaw Asamoah was available"}
          image={require("@/assets/images/favicon.png")}
          body={"ijkcsd sdjbndsoibj sdcucbowddobdccbojdnjdsbdbss"}
          date={"3 days ago"}
          likes={"265"}
          comments={"400"}
        />
        <Story
          username={"Solomon"}
          profile_image={require("@/assets/images/WhatsApp Image 2025-04-24 at 23.04.32_066652fd.jpg")}
          title={"Solo was the project Manager"}
          image={require("@/assets/images/favicon.png")}
          body={"ijkcsd sdjbndsoibj sdcucbowddobdccbojdnjdsbdbss"}
          date={"5 days ago"}
          likes={"22"}
          comments={"14"}
        />
        <Story
          username={"Joel"}
          profile_image={require("@/assets/images/WhatsApp Image 2025-04-24 at 23.04.32_066652fd.jpg")}
          title={"Joel was at the place"}
          image={require("@/assets/images/favicon.png")}
          body={"ijkcsd sdjbndsoibj sdcucbowddobdccbojdnjdsbdbss"}
          date={"5 days ago"}
          likes={"22"}
          comments={"13"}
        />
        <Story
          username={"Adusi"}
          profile_image={require("@/assets/images/WhatsApp Image 2025-04-24 at 23.04.32_066652fd.jpg")}
          title={"Emmanuel"}
          image={require("@/assets/images/favicon.png")}
          body={"ijkcsd sdjbndsoibj sdcucbowddobdccbojdnjdsbdbss"}
          date={"5 days ago"}
          likes={"22"}
          comments={"13"}
        />
        <Story
          username={"Joel"}
          profile_image={require("@/assets/images/WhatsApp Image 2025-04-24 at 23.04.32_066652fd.jpg")}
          title={"Rehearse your presentation"}
          image={require("@/assets/images/favicon.png")}
          body={
            "The deadline for both biometric and course registration for second of the 2024/2025 academic year at Knust is Friday, june 20th, 2025."
          }
          date={"5 days ago"}
          likes={"22"}
          comments={"13"}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  tabContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 20,
    marginBottom: 30,
  },
  activeTab: {
    backgroundColor: "#0000FF",
  },
  tabText: {
    fontSize: 20,
    color: "#666",
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "bold",
  },
  feedContainer: {
    paddingHorizontal: 16,
  },
});

export default HomeScreen;
