import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import Story from "@/components/stories";

const Index = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Story
          username={"Nana Yaw"}
          profile_image={require("@/assets/images/WhatsApp Image 2025-04-24 at 23.04.32_066652fd.jpg")}
          title={"Nana Yaw Asamoah was available"}
          image={require("@/assets/images/favicon.png")}
          body={"ijkcsd sdjbndsoibj sdcucbowddobdccbojdnjdsbdbss"}
          date={" 3 days ago"}
          likes={"265"}
          comments={"400"}
        />
        <Story
          username={"Solomon"}
          profile_image={require("@/assets/images/WhatsApp Image 2025-04-24 at 23.04.32_066652fd.jpg")}
          title={"Solo was then project Manager"}
          image={require("@/assets/images/favicon.png")}
          body={"ijkcsd sdjbndsoibj sdcucbowddobdccbojdnjdsbdbss"}
          date={"5 days ago"}
          likes={"22"}
          comments={"13"}
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
          title={"fuck you vianco"}
          image={require("@/assets/images/favicon.png")}
          body={"ijkcsd sdjbndsoibj sdcucbowddobdccbojdnjdsbdbss"}
          date={"5 days ago"}
          likes={"22"}
          comments={"13"}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({});
