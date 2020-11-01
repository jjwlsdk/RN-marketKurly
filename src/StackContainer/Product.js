import { createStackNavigator, createAppContainer } from "react-navigation";
import MyTabs from '../Pages/Main/Home/Home';
import Kurly from '../Pages/Main/Home/Kurly';
import Product from '../Pages/Product/Product';
import SlideProd from '../Pages/SlideProd/SlideProd';
import ProductDetail from '../Pages/ProductDetail/ProductDetail';
import Search from '../Pages/Search/Search';

const ProductContainer = createStackNavigator(
  {
    MyTabs,
    Kurly,
    Product,
    SlideProd,
    ProductDetail,
    Search
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(ProductContainer);

