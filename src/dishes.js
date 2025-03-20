const dishes = [
    {
        title: "Greek Salad",
        price: "12.99",
        body: " Greek salad or horiatiki salad is a salad in Greek cuisine generally made with pieces of tomatoes, cucumbers, onion, feta cheese, and olives ",
        href: "/",
        image_name: "greekSalad.jpg",
        special: true
    },
    {
        title: "Bruchetta",
        price: "5.99",
        body: " An Italian appetizer (antipasto) consisting of grilled bread topped with garlic, olive oil, and salt ",
        href: "/",
        image_name: "bruchetta.svg",
        special: true
    },
    {
        title: "Lemon Dessert",
        price: "5.00",
        body: " A sweet pastry case filled with a lemon flavoured filling, finished with sugar dusting ",
        href: "/",
        image_name: "lemonDessert.jpg",
        special: true
    },

];

const getDishes = () => {
    return dishes
}

export {getDishes}