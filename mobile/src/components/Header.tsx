import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Header(){
    return (
        <View style={styles.container}>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: "#f9f4fc",
        borderBottomWidth: 1,
        borderColor: "#dde3f0",
        paddingTop: 44,

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
})