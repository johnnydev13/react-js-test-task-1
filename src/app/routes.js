import ProductsContainer from "../components/products/ProductsContainer";
import ProductShowContainer from "../components/products/productsShow/ProductShowContainer";

export default [
    { path: "/products",            name: "Products",     Component: ProductsContainer },
    { path: "/products/:productId", name: "Show Product", Component: ProductShowContainer },
];
