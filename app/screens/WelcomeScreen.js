import React from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={{ top: 20, fontSize: 20, fontWeight: "600" }}>
          Sell What You Don't Need
        </Text>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.textBtn}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.textBtn}>Register</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  textBtn: {
    color: "#fff",
    fontSize: 22,
    letterSpacing: 1.5,
    fontWeight: "700",
  },
});

export default WelcomeScreen;
