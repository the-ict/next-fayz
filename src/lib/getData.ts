import { products, ProductItem } from "./data";

export const getAllProducts = (): ProductItem[] => {
    return products;
};

export const searchProductsByName = (query: string): ProductItem[] => {
    return products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );
};

export const getProductById = (id: number): ProductItem | undefined => {
    return products.find(product => product.id === id);
};
