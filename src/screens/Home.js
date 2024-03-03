import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Background from "../components/Background";
import Gap from "../components/Gap";

export default function Home() {
    return (
        <View style={styles.container}>
            <Background />
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.topHeader}>
                    <TouchableOpacity>
                        <Icon style={{ transform: [{ rotate: "180deg" }] }}
                            name="logout"
                            color="black"
                            size={35} />
                    </TouchableOpacity>
                    <Gap width={20} />
                    <Text style={{ ...styles.teks, fontSize: 20 }}>CheckInEase</Text>
                </View>
                <Gap height={20} />
                <Text style={{ ...styles.teks, fontWeight: "normal", fontStyle: "italic" }}>Selamat datang,</Text>
                <Gap height={10} />
                <View style={styles.profileHeader}>
                    <Icon
                        name="account-circle"
                        color="black"
                        size={55} />
                    <Gap width={15} />
                    <View style={styles.profile}>
                        <Text style={{ ...styles.teks, fontSize: 22 }}>Nama</Text>
                        <Text style={{ ...styles.teks, fontWeight: "normal", fontStyle: "italic" }}>Email</Text>
                    </View>
                </View>
            </View>
            {/* Header */}
        </View>
    )
}

const styles = StyleSheet.create({
    profileHeader: {
        flexDirection: "row",
        alignItems: "center"
    },
    teks: {
        color: "black",
        fontWeight: "bold"
    },
    topHeader: {
        flexDirection: "row",
        alignItems: "center"
    },
    header: {
        marginTop: StatusBar.currentHeight + 20,
        marginHorizontal: 20
    },
    container: {
        flex: 1
    }
})