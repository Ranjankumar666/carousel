import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MyCalender } from "../screens/Calender.component";
import { MyCarousel } from "../screens/Carousals.component";

const { Navigator, Screen } = createStackNavigator();

const MainNavigator = () => {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="Calender" component={MyCalender} />
            <Screen name="Carousel" component={MyCarousel} />
        </Navigator>
    );
};

export default MainNavigator;
