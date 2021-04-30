import Carousel from "react-native-snap-carousel";
import React from "react";
import {
    View,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Heading, Italic, Regular } from "../components/Typography";

const Item = ({ item }) => {
    return (
        <View style={styles.card}>
            <View style={styles.cover}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.coverImage}
                    resizeMode="cover"
                />
            </View>
            <View style={[styles.details]}>
                <Heading style={styles.headingStyle}>{item.title}</Heading>

                <Italic style={styles.textStyle}>{item.content}</Italic>
                <Italic style={[styles.textStyle, styles.date]}>
                    {item.date}
                </Italic>
            </View>
            <TouchableOpacity>
                <Regular style={styles.textStyle}>View Post</Regular>
            </TouchableOpacity>
        </View>
    );
};

export const MyCarousel = ({ navigation, route }) => {
    const { date } = route.params;

    const { events, markedDates } = useSelector((state) => state.main);

    const { id } = React.useMemo(() => markedDates[date], []);
    console.log(id);

    const list = React.useRef();

    return (
        <View style={{ flex: 1 }}>
            <StatusBar style="light" />
            <LinearGradient
                colors={["#200122", "#6f0000"]}
                style={[
                    StyleSheet.absoluteFill,
                    {
                        flex: 1,
                    },
                ]}
            />
            {/* <ImageBackground
                source={{
                    uri:
                        "https://cdn.pixabay.com/photo/2017/06/06/15/41/frosted-glass-2377574_960_720.jpg",
                }}
                style={[StyleSheet.absoluteFill, { flex: 1 }]}
                blurRadius={0.4}
            /> */}
            <Carousel
                layout="tinder"
                hasParallaxImages={true}
                style={{
                    flex: 1,
                }}
                firstItem={+id - 1}
                contentContainerCustomStyle={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
                enableSnap={true}
                data={events}
                renderItem={({ item }) => <Item item={item} />}
                sliderWidth={400}
                itemWidth={350}
                layoutCardOffset={18}
                // loop={true}
                inactiveSlideOpacity={0.6}
                inactiveSlideScale={0.8}
                ref={list}
            />
        </View>

        // </ImageBackground>
    );
};

const styles = StyleSheet.create({
    card: {
        position: "relative",
        height: 500,
        // flex: 1,
        marginVertical: 60,
        backgroundColor: "#200122",
        elevation: 2,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            height: 2,
            width: 0,
        },
        shadowRadius: 2,
        shadowOpacity: 0.3,
        alignItems: "center",
        borderRadius: 5,
        overflow: "hidden",
    },
    cover: {
        width: "100%",
        height: "75%",
        overflow: "hidden",
        // padding: 5,
    },
    coverImage: {
        width: "100%",
        height: "100%",
        // borderRadius: 10,
    },
    headingStyle: {
        fontSize: 20,
        color: "#9CA3AF",
        // fontWeight: "bold",
        marginBottom: 5,
        // maxWidth: 150,
    },
    textStyle: {
        color: "#9CA3AF",
        fontSize: 12,
        // fontStyle: "italic",
    },
    date: {
        alignSelf: "flex-end",
        fontSize: 16,
        // fontWeight: "bold",
    },
    details: {
        width: "100%",
        height: "20%",
        paddingVertical: 25,
        paddingHorizontal: 15,
        // left: 0,
        // top: "60%",
    },
});
