import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FF0000", // Changed to red
        tabBarInactiveTintColor: "#808080", // Optional: set inactive color
        tabBarStyle: {
          backgroundColor: "#FFFFFF", // Optional: set tab bar background
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home", // Optional: add title
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search", // Optional: add title
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <FontAwesome name="search" size={24} color={color} />
            ) : (
              <EvilIcons name="search" size={30} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Library", // Optional: add title
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <FontAwesome name="bookmark" size={24} color={color} />
            ) : (
              <Feather name="bookmark" size={24} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile", // Optional: add title
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person-circle-sharp" : "person-circle-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
