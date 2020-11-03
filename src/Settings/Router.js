import * as React from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Main from "../Pages/Main/Main";
import Product from "../Pages/Product/Product";
import SlideProd from "../Pages/SlideProd/SlideProd";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import Header from "../Pages/ProductDetail/Components/Header/Header";
import Close from "../Pages/ProductDetail/Components/Header/Components/Close";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Mypage from "../Pages/Mypage/Mypage";
import Cart from "../Pages/Cart/CartScreen";
import ReviewDetail from "../Pages/ProductDetail/Components/Review/Components/ReviewDetail";
import ReviewDetailHeader from "../Pages/ProductDetail/Components/Review/Components/ReviewDetailHeader";
import ReviewModal from "../Pages/ProductDetail/Components/ReviewModal/ReviewModal";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() =>
          navigation.navigate("Main", {
            sub_category_id: "1",
            itemId: "이것은 아이디 입니다.",
            otherParam: "이것은 파람스입니다.",
          })
        }
        title="메인페이지"
      />
      <Button
        onPress={() =>
          navigation.navigate("Product", {
            sort_by_category: "알뜰쇼핑",
            sort_by_filter: "혜택순",
            navigation: navigation,
          })
        }
        title="상품페이지"
      />
      <Button
        onPress={() => navigation.navigate("SignIn")}
        title="로그인페이지"
      />
      <Button
        onPress={() => navigation.navigate("SignUp")}
        title="회원가입페이지"
      />
      <Button onPress={() => navigation.navigate("Mypage")} title="마이컬리" />
      <Button onPress={() => navigation.navigate("Cart")} title="장바구니" />
    </View>
  );
}

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="SlideProd" component={SlideProd} />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{
            headerBackImage: () => <Close />,
            headerBackTitleVisible: false,
            headerTitle: () => <Header />,
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: "로그인" }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: "회원가입" }}
        />
        <Stack.Screen
          name="Mypage"
          component={Mypage}
          options={{ title: "마이컬리" }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ title: "장바구니" }}
        />
        <Stack.Screen
          name="ReviewDetail"
          component={ReviewDetail}
          options={{
            headerBackImage: () => <Close />,
            headerBackTitleVisible: false,
            headerTitle: () => <ReviewDetailHeader />,
          }}
        />
        <Stack.Screen name="ReviewModal" component={ReviewModal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
