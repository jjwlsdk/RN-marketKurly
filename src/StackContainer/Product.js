import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from '../Pages/Main/Main';
import SlideProd from '../Pages/SlideProd/SlideProd';
import Product from '../Pages/Product/Product';
const ProductContainer = createStackNavigator(
  {
    Main,
    SlideProd,
    Product
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(ProductContainer);