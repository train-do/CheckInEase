import { Picker } from "@react-native-picker/picker";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Gap from "./Gap";

export default function DropdownPicker({
    label = "Select a item",
    iconName = "set-none",
    listOption = ["item 1", "item 2"],
    selectedValue,
    onValueChange,
}) {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.formContainer}>
                    <Icon style={styles.icon}
                        name={iconName} size={27} color={"black"} />
                    <View style={{ flex: 1 }}>
                        <Picker
                            selectedValue={selectedValue}
                            onValueChange={onValueChange}>
                            <Picker.Item label={label} value="" enabled={false} />
                            {listOption.map((el, idx) => {
                                // console.log(el)
                                return (
                                    <Picker.Item label={el} value={el} key={el + idx} />
                                )
                            })}
                        </Picker>
                    </View>
                </View>
            </View>
            <Gap height={20} />
        </>
    )
}

const styles = StyleSheet.create({
    icon: {
        marginHorizontal: 5
    },
    formContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    label: {
        fontWeight: "bold",
        color: "black"
    },
    container: {
        width: "100%",
        borderBottomColor: "#B8BC00",
        borderBottomWidth: 2
    }
})