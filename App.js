import * as React from "react";
import { Provider } from "react-redux";
import { store } from "./src/Redux/store";
import { ThemeProvider } from "styled-components";
import Theme from "./src/Styles/Theme";
import Main from "./src/Pages/Main/Main";
import SignIn from "./src/Pages/SignIn/SignIn";
import ProductDetail from "./src/Pages/ProductDetail/ProductDetail";
import SlideProd from "./src/Pages/SlideProd/SlideProd";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Header from "./src/Pages/ProductDetail/Components/Header/Header";
import Close from "./src/Pages/ProductDetail/Components/Header/Components/Close";
import SignUp from "./src/Pages/SignUp/SignUp";

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
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
