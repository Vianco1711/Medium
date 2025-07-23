import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const LoginScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <ScrollView contentContainerStyle={styles.inner}>
        {/* Logo */}
        <Text style={styles.logo}>Premium Press</Text>

        {/* Headings */}
        <View style={styles.heading}>
          <Text style={styles.h1}>Human</Text>
          <Text style={styles.h1}>stories and</Text>
          <Text style={styles.h1}>ideas.</Text>
        </View>

        {/* Subtext */}
        <Text style={styles.subheading}>
          Broaden your views to achieve a deeper understanding.
        </Text>

        {/* Sign Up Buttons */}
        <View style={styles.buttonGroup}>
          <LoginButton
            icon="https://www.svgrepo.com/show/475656/google-color.svg"
            text="Sign up with Google"
          />
          <LoginButton
            icon="https://www.svgrepo.com/show/494305/mail.svg"
            text="Sign up with Email"
          />
        </View>

        {/* Sign in link */}
        <Text style={styles.footer}>
          Already have an account? <Text style={styles.link}>Sign in.</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

type LoginButtonProps = {
  icon: string;
  text: string;
};

const LoginButton: React.FC<LoginButtonProps> = ({ icon, text }) => (
  <TouchableOpacity style={styles.button}>
    <Image source={{ uri: icon }} style={styles.icon} />
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inner: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    paddingTop: 60,
  },
  logo: {
    fontSize: 24,
    fontFamily: "serif",
    color: "#000",
    marginBottom: 30,
  },
  heading: {
    alignItems: "center",
    marginBottom: 16,
  },
  h1: {
    fontSize: 40,
    fontWeight: "300",
    fontFamily: "serif",
    color: "#000",
    lineHeight: 45,
  },
  subheading: {
    color: "#666",
    fontSize: 14,
    textAlign: "center",
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  buttonGroup: {
    width: "100%",
    marginTop: 10,
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 8,
    justifyContent: "center",
  },
  buttonText: {
    color: "#000",
    marginLeft: 10,
    fontSize: 16,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  footer: {
    color: "#666",
    fontSize: 14,
    marginTop: 10,
  },
  link: {
    color: "#22c55e",
  },
});
