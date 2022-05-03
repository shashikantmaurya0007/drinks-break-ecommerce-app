import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [{
        _id: 1,
        title: "Strong Beer(650ml)",
        brand: "KingFisher",
        price: 240,
        img: "	https://cdn.dotpe.in/item/1461526/DRINKSPUNE_10-06-21_32.jpg",
        discountPercent: 20,
        finalPrice: 192,
        category: "beer",
        offer: "New",
        rating: 2,
    },
    {
        _id: uuid(),
        title: "Carlsberg Elephant(650ml)",
        brand: "Carlsberg",
        price: 240,
        img: "	https://cdn.dotpe.in/item/1474432/carlsberg_qt.jpg",
        discountPercent: 20,
        finalPrice: 192,
        category: "beer",
        offer: "Trending",
        rating: 3,
    },
    {
        _id: uuid(),
        title: "Budweiser Magnum (650ml)",
        brand: "Budweiser",
        price: 280,
        img: "https://cdn.dotpe.in/item/1474434/bud_mag_650.jpg",
        discountPercent: 30,
        finalPrice: 196,
        category: "beer",
        offer: "",
        rating: 4,
    },
    {
        _id: uuid(),
        title: "KingFisher Ultra Mild(650ml)",
        brand: "KingFisher",
        price: 210,
        img: "	https://cdn.dotpe.in/item/1461515/DRINKSPUNE_10-06-21_38.jpg",
        discountPercent: 24,
        finalPrice: 159.6,
        category: "beer",
        offer: "",
        rating: 3.2,
    },
    {
        _id: uuid(),
        title: "Budweiser Mild(650ml)",
        brand: "Budweiser",
        price: 210,
        img: "https://cdn.dotpe.in/item/1461542/DRINKSPUNE_10-06-21_40.jpg",
        discountPercent: 16,
        finalPrice: 176.4,
        category: "beer",
        offer: "",
        rating: 4,
    },
    {
        _id: uuid(),
        title: "Kingfisher Ultra Max(650ml)",
        brand: "KingFisher",
        price: 210,
        img: "https://cdn.dotpe.in/item/1474431/kingfisher_max_qt.jpg",
        discountPercent: 10,
        finalPrice: 189,
        category: "beer",
        offer: "Trending",
        rating: 5,
    },
    {
        _id: uuid(),
        title: "Kingfisher Ultra Max(650ml)",
        brand: "KingFisher",
        price: 210,
        img: "https://cdn.dotpe.in/item/1474431/kingfisher_max_qt.jpg",
        discountPercent: 10,
        finalPrice: 189,
        category: "beer",
        offer: "Trending",
        rating: 3,
    },
    {
        _id: uuid(),
        title: "Kingfisher Strong(500ml)",
        brand: "KingFisher",
        price: 160,
        img: "	https://cdn.dotpe.in/item/1461558/DRINKSPUNE_10-06-21_33.jpg",
        discountPercent: 0,
        finalPrice: 160,
        category: "beer",
        offer: "",
        rating: 3.9,
    },
    {
        _id: uuid(),
        title: "Budweiser Mild(500ml)",
        brand: "Budweiser",
        price: 190,
        img: "		https://cdn.dotpe.in/item/1461507/DRINKSPUNE_10-06-21_41.jpg",
        discountPercent: 10,
        finalPrice: 160,
        category: "beer",
        offer: "Trending",
        rating: 4,
    },
    {
        _id: uuid(),
        title: "Carlsberg Smooth(500ml)",
        brand: "Carlsberg",
        price: 198,
        img: "		https://cdn.dotpe.in/item/1976909/carlsberysmooth500.jpg",
        discountPercent: 9,
        finalPrice: 180.18,
        category: "beer",
        offer: "outOfStock",
        rating: 5,
    },
    {
        _id: uuid(),
        title: "Budweiser Magnum(500ml)",
        brand: "Budweiser",
        price: 185,
        img: "		https://cdn.dotpe.in/item/1474433/carlsberg_500.jpg",
        discountPercent: 0,
        finalPrice: 185,
        category: "beer",
        offer: "",
        rating: 4,
    },
    {
        _id: uuid(),
        title: "Sula Satori(750ml)",
        brand: "Sula",
        price: 825,
        img: "	https://cdn.dotpe.in/item/1461508/DRINKSPUNE_10-06-21_46.jpg",
        discountPercent: 12,
        finalPrice: 726,
        category: "wine",
        offer: "New",
        rating: 4,
    },
    {
        _id: uuid(),
        title: "Sula Zinfandel(750ml)",
        brand: "Sula",
        price: 775,
        img: "https://cdn.dotpe.in/item/1461561/DRINKSPUNE_10-06-21_50.jpg",
        discountPercent: 8,
        finalPrice: 713,
        category: "wine",
        offer: "",
        rating: 2,
    },
    {
        _id: uuid(),
        title: "Sula Chenin Blanc White(750ml)",
        brand: "Sula",
        price: 700,
        img: "https://cdn.dotpe.in/item/1461547/DRINKSPUNE_10-06-21_55.jpg ",
        discountPercent: 6,
        finalPrice: 658,
        category: "wine",
        offer: "outOfStock",
        rating: 4.3,
    },
];