import React, { useState } from "react";
import { View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import colors from "../../constants/colors";
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
  CarouselCardItemProps,
} from "./CarouselCardItem";

const data = [
  {
    title: "expecting mail?",
    body: "get your mail delivered to a secure hosted address",
    imgUrl: "https://images.unsplash.com/photo-1466096115517-bceecbfb6fde",
  },
  {
    title: "don't pay for a PO box.",
    body: "reserve a mailbud address for a couple of days, a week, as long as you need!",
    imgUrl: "https://images.unsplash.com/photo-1462045504115-6c1d931f07d1",
  },
  {
    title: "looking to host?",
    body: "make some extra cash with your home or business by hosting mailbuds for others.",
    imgUrl: "https://images.unsplash.com/photo-1514108225820-2b602873ac36",
  },
];

const CarouselCards = () => {
  const [index, setIndex] = useState(0);

  const isCarousel = React.useRef(null);

  return (
    <View>
      <Carousel
        layout="default"
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={SLIDER_WIDTH}
        // inactiveSlideShift={0}
        useScrollView={true}
        onSnapToItem={(index) => setIndex(index)}
        style={{
          flex: 1,
          width: "100%",
        }}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: colors.darkColor,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

export default CarouselCards;
