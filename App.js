import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import MainNavigator from "./navigation/Navigator";
import { Provider as StoreProvider } from "react-redux";
import { combineReducers, createStore } from "redux";
import reducer from "./store/reducer";
import * as Font from "expo-font";
import Apploading from "expo-app-loading";

const reducers = combineReducers({
    main: reducer,
});

const store = createStore(reducers);

export default function App() {
    const [fontLoaded, setFontLoaded] = React.useState(false);

    React.useEffect(() => {
        (async () => {
            await Font.loadAsync({
                Lato: require("./assets/Lato-Regular.ttf"),
                Lato_Bold: require("./assets/Lato-Bold.ttf"),
                Lato_Italic: require("./assets/Lato-Italic.ttf"),
            });

            setFontLoaded(true);
        })();
    });

    if (!fontLoaded) {
        return <Apploading />;
    }
    return (
        <StoreProvider store={store}>
            <NavigationContainer>
                <MainNavigator />
            </NavigationContainer>
        </StoreProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
