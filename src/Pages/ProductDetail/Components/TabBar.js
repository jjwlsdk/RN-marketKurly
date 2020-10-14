import React from "react";
import ScrollableTabView, {
  DefaultTabBar,
} from "react-native-scrollable-tab-view";
import ProductDesc from "../Components/ProductDesc/ProductDesc";
import ProductImage from "../Components/ProductImage/ProductImage";
import Review from "../Components/Review/Review";

function TabBar() {
  return (
    <ScrollableTabView
      initialPage={0}
      renderTabBar={() => <DefaultTabBar />}
      tabBarActiveTextColor="#5f0080"
      tabBarInactiveTextColor="#666"
      tabBarUnderlineStyle={{ backgroundColor: "#5f0080" }}
    >
      <ProductDesc tabLabel="상품설명" />
      <ProductImage tabLabel="상품이미지" />
      <ProductDesc tabLabel="상세정보" />
      <Review tabLabel="후기" />
      <ProductDesc tabLabel="상품문의" />
    </ScrollableTabView>
  );
}

export default TabBar;
