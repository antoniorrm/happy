import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

interface headerProps{
    title: string,
    showCancel?: boolean
}
export default function Header({title, showCancel} : headerProps){
    const navigation = useNavigation();

    function handleGoBackToAppHomepage() {
        navigation.navigate("OrphanagesMap")
    }

    return (
        <View style={styles.container}>
            <BorderlessButton onPress={navigation.goBack}>
                <Feather name="arrow-left" size={24} color="#15b6d6" />
            </BorderlessButton>
            <Text style={styles.title}>{title}</Text>
            {showCancel ? 
            <BorderlessButton onPress={handleGoBackToAppHomepage}>
                <Feather name="x" size={24} color="#ff669d" />
            </BorderlessButton> : 
            <View />
            }
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: "#f9fafc",
        borderBottomWidth: 1,
        borderColor: "#dde3f0",
        paddingTop: 44,

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title : {
        fontFamily: "Nunito_600SemiBold",
        color: "#8fa7b5",
        fontSize: 16,
    }
})