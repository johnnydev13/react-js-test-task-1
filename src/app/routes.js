import Home from "../components/home/Home";
import ProductsListContainer from "../components/products/ProductsListContainer";
import ProductShowContainer from "../components/products/productsShow/ProductShowContainer";

export default [
    { path: "/",                    name: "Home",         Component: Home },
    { path: "/products",            name: "ProductsList", Component: ProductsListContainer },
    { path: "/products/:productId", name: "Show Product", Component: ProductShowContainer },
];
