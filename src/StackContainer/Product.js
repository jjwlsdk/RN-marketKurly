import { createStackNavigator, createAppContainer } from "react-navigation";
import MyTabs from '../Pages/Main/Home/Home';
import Kurly from '../Pages/Main/Home/Kurly';
import Product from '../Pages/Product/Product';
import SlideProd from '../Pages/SlideProd/SlideProd';
import ProductDetail from '../Pages/ProductDetail/ProductDetail';

const ProductContainer = createStackNavigator(
  {
    MyTabs,
    Kurly,
    Product,
    SlideProd,
    ProductDetail
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(ProductContainer);

