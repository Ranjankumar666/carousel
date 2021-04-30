import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { useSelector } from "react-redux";

export const MyCalender = ({ navigation }) => {
    const { markedDates } = useSelector((state) => state.main);

    return (
        <CalendarList
            // dayComponent={DayComponent}
            onDayPress={(day) => {
                console.log(day);
                if (markedDates[day.dateString]) {
                    navigation.navigate("Carousel", {
                        date: day.dateString,
                    });
                }
            }}
            markedDates={markedDates}
        />
    );
};
