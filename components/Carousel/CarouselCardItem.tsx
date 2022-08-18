import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import colors from "../../constants/colors";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

export type CarouselCardItemProps = {
  item: {
    imgUrl: string;
    title: string;
    body: string;
  };
  index: number;
};

const CarouselCardItem = ({ item, index }: CarouselCardItemProps) => {
  return (
    <View style={styles.container} key={index}>
      {index % 2 !== 0 ? (
        <View style={styles.imageWrapper}>
          <Image source={{ uri: item.imgUrl }} style={styles.image} />
        </View>
      ) : null}
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
      {index % 2 === 0 ? (
        <View style={styles.imageWrapper}>
          <Image source={{ uri: item.imgUrl }} style={styles.image} />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 20,
  },
  imageWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: ITEM_WIDTH,
    height: 200,
    borderRadius: 8,
  },
  header: {
    color: colors.darkColor,
    fontSize: 28,
    paddingLeft: 20,
    fontFamily: "Inter_900Black",
    marginTop: 10,
  },
  body: {
    color: colors.darkColor,
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "Inter_500Medium",
  },
});

export default CarouselCardItem;
