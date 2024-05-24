import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

import { FontAwesome } from "@expo/vector-icons"

const Task = ({ data, deleteItem }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={deleteItem}>
                <FontAwesome name='trash' size={20} color="#f26868" />
            </TouchableOpacity>
            <Text style={styles.title}>{data.item}</Text>
        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#30475e",
        marginTop: 12,
        padding: 12,
        borderRadius: 4,
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
        color: "#f5f5f5"
    },
    button: {
        marginRight: 8,
    }
})