import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from '../Pages/Main/Main';
import Product from '../Pages/Product/Product';
import SlideProd from '../Pages/SlideProd/SlideProd';
import ProductDetail from '../Pages/ProductDetail/ProductDetail';

const ProductContainer = createStackNavigator(
  {
    Main,
    Product,
    SlideProd,
    ProductDetail
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(ProductContainer);

