import React from 'react'
import { StyleSheet, Text, View } from "react-native";

export default function Card() {
    return(
        <View>
            <View>
                {props.children}
            </View>
        </View>
    )
}

