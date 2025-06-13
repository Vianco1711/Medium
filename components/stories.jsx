import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";

const Story = ({
  username,
  profile_image,
  title,
  image,
  body,
  date,
  likes,
  comments,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image style={styles.profileImage} source={profile_image} />
        <Text style={styles.username}>{username}</Text>
      </View>
      <View style={styles.view2}>
        <View style={styles.titleView}>
          <Text style={styles.title}>{title}</Text>
          <Image style={styles.mainImage} source={image} />
        </View>
        <View style={styles.bodyView}>
          <Text>{body}</Text>
        </View>
      </View>

      <View style={styles.view3}>
        <View style={styles.tabsView}>
          <View style={styles.subview}>
            <MaterialCommunityIcons
              name="cards-diamond"
              size={15}
              color="gold"
            />
            <Text style={styles.date}>{date}</Text>
          </View>
          <View style={styles.subview}>
            <FontAwesome6 name="hands-clapping" size={15} color="black" />
            <Text style={styles.likes}>{likes}</Text>
          </View>
          <View style={styles.subview}>
            <FontAwesome name="comment" size={15} color="black" />
            <Text>{comments}</Text>
          </View>
        </View>

        <View style={styles.btnView}>
          <Pressable>
            <Ionicons name="remove-circle-outline" size={20} color="black" />
          </Pressable>
          <Pressable>
            <Entypo name="dots-three-horizontal" size={20} color="black" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  container: {
    height: "auto",
    padding: 25,
    gap: 7,
    borderBlockEndColor: "2px solid #333",
    borderBottomWidth: 1,
  },
  mainImage: {
    width: 50,
    height: 50,
  },
  profileImage: {
    width: 20,
    height: 20,
    borderRadius: 15,
  },
  view1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 5,
  },
  view2: {
    justifyContent: "flex-start",
  },
  titleView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
  },
  bodyView: {
    width: "80%",
  },
  view3: {
    flexDirection: "row",
    marginBlock: 10,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  subview: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    marginInlineEnd: 15,
  },
  tabsView: {
    flexDirection: "row",
  },
  btnView: {
    flexDirection: "row",
    gap: 9,
  },
});
