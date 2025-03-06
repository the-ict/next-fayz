export interface ProductItem {
    name: string;
    description?: string;
    properties: object;
    colors?: string[];
    overNumber?: number,
    price: number,
    image: string,
    id: number
}

export const products: ProductItem[] = [
    {
        name: "Ноутбук Apple Macbook Pro 16 M4 Pro",
        description: "M4 Pro/12/16/48/512 GB Space Black",
        image: "/product1.png",
        colors: ["green", "red", "blue"],
        properties: { Nomi: 'Ноутбук Apple Macbook Pro 16 M4 Pro', Ogirligi: "4kh" },
        price: 10000000,
        id: 1
    },
    {
        name: "Ноутбук Apple Macbook Pro 13 M2 Pro",
        description: "M4 Pro/12/16/48/512 GB Space Black",
        image: "/product1.png",
        colors: ["green", "red", "blue"],
        properties: { Nomi: 'Ноутбук Apple Macbook Pro 16 M4 Pro', Ogirligi: "3kh" },
        price: 12000000,
        id: 2
    },
    {
        name: "Ноутбук Apple Macbook Pro 12 M1 Pro",
        description: "M4 Pro/12/16/48/512 GB Space Black",
        image: "/product1.png",
        colors: ["green", "red"],
        properties: { Nomi: 'Ноутбук Apple Macbook Pro 16 M4 Pro', Ogirligi: "2kh" },
        price: 12000000,
        id: 3
    },
];
