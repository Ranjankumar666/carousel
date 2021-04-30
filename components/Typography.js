import React from "react";
import { Text, StyleSheet } from "react-native";

export const Heading = (props) => {
    return <Text style={[styles.heading, props.style]}>{props.children}</Text>;
};
export const Regular = (props) => {
    return <Text style={[styles.text, props.style]}>{props.children}</Text>;
};
export const Italic = (props) => {
    return <Text style={[styles.italic, props.style]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
    heading: {
        fontFamily: "Lato_Bold",
    },
    text: {
        fontFamily: "Lato",
    },
    italic: {
        fontFamily: "Lato_Italic",
    },
});
