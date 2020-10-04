import * as React from 'react';
import { Button, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Product from '../Pages/Product';
import Detail from '../Pages/Detail';
import Login from '../Pages/Login';

const Stack = createStackNavigator();


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Product')}
        title="상품페이지"
      />
      <Button
        onPress={() => navigation.navigate('Detail')}
        title="상세페이지"
      />
      <Button
        onPress={() => navigation.navigate('Detail')}
        title="로그인페이지"
      />
    </View>
    );
}


export default function Router() {
return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} /> 
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}