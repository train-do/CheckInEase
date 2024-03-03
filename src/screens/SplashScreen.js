import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Background from "../components/Background";

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <Background />
            <Image source={require("../images/Logo_QR.png")}
                style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center' },
    image: { alignSelf: "center" }
})