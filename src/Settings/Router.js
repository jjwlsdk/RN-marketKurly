import * as React from 'react';
import { Button, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from '../Pages/Main/Main';
import Product from '../Pages/Product/Product';
import SlideProd from '../Pages/SlideProd/SlideProd';
import Login from '../Pages/Login';
import ProductDetail from "../Pages/ProductDetail/ProductDetail";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("ProductDetail")}
        title="상세페이지"
      />
      <Button
        onPress={() => navigation.navigate('Main', {
          sub_category_id: "1",
          itemId: "이것은 아이디 입니다.",
          otherParam: "이것은 파람스입니다."
        })}
        title="메인페이지"
      />
      <Button
        onPress={() => navigation.navigate('Product', {
          sub_category_id: "2",
          itemId: "이것은 아이디 입니다.",
          otherParam: "이것은 파람스입니다."
        })}
        title="상품페이지"
      />
    </View>
  );
}

export default function Router() {
return (
  <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen name="Home" component={HomeScreen} /> 
      <Stack.Screen name="Main" component={Main} /> 
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="SlideProd" component={SlideProd} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
