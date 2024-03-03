import React, { useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import Background from "../components/Background";
import Gap from "../components/Gap";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import { Picker } from "@react-native-picker/picker";
import DropdownPicker from "../components/DropdownPicker";

export default function Register() {
    const genderData = ["Pria", "Wanita"]
    const [selectedLanguage, setSelectedLanguage] = useState()
    return (
        <View style={styles.container}>
            <Background />
            <View style={styles.wrapper}>
                <View>
                    <ScrollView>
                        <Text style={styles.title}>Register</Text>
                        <Gap height={20} />
                        <FormInput
                            label={"Nama Lengkap"}
                            placeholder="contoh@email.com"
                            iconName="account-circle" />
                        <DropdownPicker
                            label="Pilih Gender"
                            iconName="human-male-female"
                            listOption={genderData}
                            selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)
                            }
                        />
                        <FormInput
                            label={"Nomor Telepon"}
                            placeholder="08xxxxxxxxxx"
                            iconName="phone" />
                        <FormInput
                            label={"Email"}
                            placeholder="contoh@email.com"
                            iconName="email" />
                        <FormInput
                            label={"Password"}
                            placeholder="Kata sandi..."
                            iconName="lock" />
                        <DropdownPicker
                            label="Pilih Divisi"
                            iconName="office-building"
                            listOption={genderData}
                            selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)
                            }
                        />
                        <DropdownPicker
                            label="Pilih Departemen"
                            iconName="domain"
                            listOption={genderData}
                            selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)
                            }
                        />
                        <DropdownPicker
                            label="Pilih Cabang"
                            iconName="source-branch"
                            listOption={genderData}
                            selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)
                            }
                        />
                        <DropdownPicker
                            label="Pilih Jabatan"
                            iconName="account-group"
                            listOption={genderData}
                            selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)
                            }
                        />
                        <Button
                            title="Daftar"
                            bgColor="#D4CB00" />
                        <Gap height={10} />
                        <Button
                            title="Kembali"
                            width={150} />
                    </ScrollView>
                </View>
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
    wrapper: {
        // backgroundColor: "blue",
        flex: 1,
        justifyContent: "center",
        width: 300,
        maxWidth: 480,
        alignSelf: "center",
        marginTop: StatusBar.currentHeight + 20,
        marginBottom: StatusBar.currentHeight + 20,
    },
    container: {
        flex: 1
    },
})