import * as React from 'react';
import { Button, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from '../Pages/Main/Main';
import Product from '../Pages/Product/Product';
import SlideProd from '../Pages/SlideProd/SlideProd';
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
          sort_by_category: "알뜰쇼핑",
          sort_by_filter: "혜택순",
          navigation: navigation
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
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}