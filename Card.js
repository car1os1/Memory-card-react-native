import React from "react";
import { Pressable, Text, StyleSheet } from 'react-native';



export default function Card({ onPress, isTurnedOver, children }) {
    return (

        <Pressable 
        onPress={onPress}
        style={isTurnedOver ? styles.cardUp : styles.cardDown}>
            {isTurnedOver ? (
                <Text style={styles.title}>{children}</Text>
            ) : (
                <Text style={styles.title}>?</Text>
            )
            }
        </Pressable>
    )
}


const styles = StyleSheet.create({
    cardUp: {
        width: 100,
        height: 100,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: "#1e293b",
    },
    cardDown: {
        width: 100,
        height: 100,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        borderWidth: 8,
        borderColor: '#334155',
        backgroundColor: "#1e293b",
    },
    title: {
        fontSize: 30,
        color: 'white'
    }
}
)