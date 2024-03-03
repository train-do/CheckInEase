import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Background from "../components/Background";
import FormInput from "../components/FormInput";
import Gap from "../components/Gap";
import Button from "../components/Button";

export default function Login() {
    return (
        <View style={styles.container}>
            <Background />
            <View style={styles.formLogin}>
                <Text style={styles.title}>Masuk</Text>
                <Gap height={20} />
                <FormInput
                    label={"Email"}
                    placeholder="contoh@email.com"
                    iconName="email" />
                <Gap height={20} />
                <FormInput
                    label={"Password"}
                    placeholder="Kata sandi..."
                    iconName="lock" />
                <Gap height={20} />
                <Button
                    title="Masuk"
                    bgColor="#D4CB00" />
                <Gap height={10} />
                <Button
                    title="Daftar"
                    width={150} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "center",
        color: "black"
    },
    formLogin: {
        // backgroundColor: "red",
        width: 300,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})