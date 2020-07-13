import ProductsListContainer from "../components/products/ProductsListContainer";
import ProductShowContainer from "../components/products/productsShow/ProductShowContainer";

export default [
    { path: "/products",            name: "ProductsList", Component: ProductsListContainer },
    { path: "/products/:productId", name: "Show Product", Component: ProductShowContainer },
];
