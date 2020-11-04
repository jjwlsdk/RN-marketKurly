import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { store } from "./src/Redux/store";
import { ThemeProvider } from "styled-components";
import Main from "./src/Pages/Main/Main";
import SignIn from "./src/Pages/SignIn/SignIn";
import SignUp from "./src/Pages/SignUp/SignUp";
import SlideProd from "./src/Pages/SlideProd/SlideProd";
import ProductDetail from "./src/Pages/ProductDetail/ProductDetail";
import Header from "./src/Pages/ProductDetail/Components/Header/Header";
import Close from "./src/Pages/ProductDetail/Components/Header/Components/Close";
import WriteReview from "./src/Pages/ProductDetail/Components/WriteReview/WriteReview";
import ReviewDetail from "./src/Pages/ProductDetail/Components/Review/Components/ReviewDetail";
import ReviewDetailHeader from "./src/Pages/ProductDetail/Components/Review/Components/ReviewDetailHeader";
import CartScreen from "./src/Pages/Cart/CartScreen";
import Theme from "./src/Styles/Theme";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen
              name="Main"
              component={Main}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{
                title: "로그인",
                headerBackImage: () => <Close />,
                headerBackTitleVisible: false,
              }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{
                title: "회원가입",
                headerBackImage: () => <Close />,
                headerBackTitleVisible: false,
              }}
            />
            <Stack.Screen
              name="SlideProduct"
              options={{ headerShown: false }}
              component={SlideProd}
            />
            <Stack.Screen
              name="ProductDetail"
              options={{
                headerBackImage: () => <Close />,
                headerBackTitleVisible: false,
                headerTitle: () => <Header />,
              }}
              component={ProductDetail}
            />
            <Stack.Screen
              name="WriteReview"
              options={{
                headerBackImage: () => <Close />,
                headerBackTitleVisible: false,
                headerTitle: "후기 쓰기",
              }}
              component={WriteReview}
            />
            <Stack.Screen
              name="ReviewDetail"
              options={{
                headerBackImage: () => <Close />,
                headerBackTitleVisible: false,
                headerTitle: () => <ReviewDetailHeader />,
              }}
              component={ReviewDetail}
            />
            <Stack.Screen
              name="CartScreen"
              options={{
                headerBackImage: () => <Close />,
                headerBackTitleVisible: false,
                headerTitle: "장바구니",
              }}
              component={CartScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
