import { Category, Menu, Product } from "@/types"

export const menu: Menu[]= [
    {
        label: "inicio",
        icon: "fi fi-rr-home",
        href: "/"
    },
    {
        label: "Menu",
        icon: "fi fi-rr-rectangle-list",
        href: "/menu"
    },
    {
        label: "Ordenes",
        icon: "fi fi-rr-ballot-check",
        href: "/orders"
    },
    {
        label: "Historial",
        icon: "fi fi-rr-time-past",
        href: "/history"
    },
    {
        label: "Facturas",
        icon: "fi fi-rr-file-invoice-dollar",
        href: "/bills"
    }
]

export const categories: Category[] = [
    {
        category: "Hamburguesas"
    },
    {
        category: "Pizzas"
    },
    {
        category: "Tacos"
    },
    {
        category: "Pollos"
    },
    {
        category: "Ensaladas"
    },
    {
        category: "Pastas"
    },
    {
        category: "Lounches"
    },
    {
        category: "Refrescos"
    },
    {
        category: "Combos"
    }
]


export const products: Product[] = [
    {
        name: "Hamburguesa Clásica",
        category: "Hamburguesas",
        image: "https://example.com/images/hamburguesa-clasica.jpg",
        discount: 10,
        stock: 100,
        price: 5.99,
        descripcion: "Deliciosa hamburguesa clásica con carne de res, lechuga, tomate y queso."
    },
    {
        name: "Pizza Margarita",
        category: "Pizzas",
        image: "https://example.com/images/pizza-margarita.jpg",
        discount: 0,
        stock: 50,
        price: 8.99,
        descripcion: "Pizza Margarita con salsa de tomate, queso mozzarella y albahaca fresca."
    },
    {
        name: "Tacos al Pastor",
        category: "Tacos",
        image: "https://example.com/images/tacos-al-pastor.jpg",
        discount: 12,
        stock: 70,
        price: 3.99,
        descripcion: "Tacos al pastor con piña, cebolla y cilantro, servidos con salsa roja."
    },
    {
        name: "Pollo Asado",
        category: "Pollos",
        image: "https://example.com/images/pollo-asado.jpg",
        discount: 0,
        stock: 30,
        price: 7.99,
        descripcion: "Pollo asado marinado con hierbas y especias, cocinado a la perfección."
    },
    {
        name: "Ensalada César",
        category: "Ensaladas",
        image: "https://example.com/images/ensalada-cesar.jpg",
        discount: 5,
        stock: 40,
        price: 4.99,
        descripcion: "Ensalada César con lechuga romana, crutones, queso parmesano y aderezo César."
    },
    {
        name: "Pasta Alfredo",
        category: "Pastas",
        image: "https://example.com/images/pasta-alfredo.jpg",
        discount: 0,
        stock: 60,
        price: 6.99,
        descripcion: "Pasta Alfredo con una cremosa salsa de queso parmesano y ajo."
    },
    {
        name: "Lounche Vegetariano",
        category: "Lounches",
        image: "https://example.com/images/lounche-vegetariano.jpg",
        discount: 0,
        stock: 20,
        price: 5.49,
        descripcion: "Lounche vegetariano con pan integral, hummus, vegetales frescos y queso feta."
    },
    {
        name: "Refresco de Cola",
        category: "Refrescos",
        image: "https://example.com/images/refresco-de-cola.jpg",
        discount: 2,
        stock: 200,
        price: 1.99,
        descripcion: "Refresco de cola clásico, perfecto para acompañar cualquier comida."
    },
    {
        name: "Combo Hamburguesa y Papas",
        category: "Combos",
        image: "https://example.com/images/combo-hamburguesa-papas.jpg",
        discount: 0,
        stock: 90,
        price: 9.99,
        descripcion: "Combo de hamburguesa clásica con papas fritas y bebida."
    },
    {
        name: "Pizza Pepperoni",
        category: "Pizzas",
        image: "https://example.com/images/pizza-pepperoni.jpg",
        discount: 10,
        stock: 60,
        price: 9.99,
        descripcion: "Pizza de pepperoni con queso mozzarella y salsa de tomate."
    },
    {
        name: "Tacos de Carne Asada",
        category: "Tacos",
        image: "https://example.com/images/tacos-carne-asada.jpg",
        discount: 18,
        stock: 50,
        price: 4.99,
        descripcion: "Tacos de carne asada con cebolla, cilantro y salsa verde."
    },
    {
        name: "Pollo Frito",
        category: "Pollos",
        image: "https://example.com/images/pollo-frito.jpg",
        discount: 0,
        stock: 40,
        price: 8.99,
        descripcion: "Pollo frito crujiente y jugoso, servido con una guarnición de puré de papas."
    },
    {
        name: "Ensalada Griega",
        category: "Ensaladas",
        image: "https://example.com/images/ensalada-griega.jpg",
        discount: 7,
        stock: 35,
        price: 5.49,
        descripcion: "Ensalada griega con tomates, pepinos, aceitunas, queso feta y aderezo griego."
    },
    {
        name: "Lasaña de Carne",
        category: "Pastas",
        image: "https://example.com/images/lasana-de-carne.jpg",
        discount: 0,
        stock: 25,
        price: 10.99,
        descripcion: "Lasaña de carne con capas de pasta, salsa de tomate, carne molida y queso."
    },
    {
        name: "Lounche de Pollo",
        category: "Lounches",
        image: "https://example.com/images/lounche-de-pollo.jpg",
        discount: 10,
        stock: 30,
        price: 6.49,
        descripcion: "Lounche de pollo con pan integral, mayonesa, lechuga, tomate y pechuga de pollo."
    },
    {
        name: "Refresco de Naranja",
        category: "Refrescos",
        image: "https://example.com/images/refresco-de-naranja.jpg",
        discount: 0,
        stock: 180,
        price: 1.89,
        descripcion: "Refresco de naranja con sabor refrescante y natural."
    },
    {
        name: "Combo Pizza y Refresco",
        category: "Combos",
        image: "https://example.com/images/combo-pizza-refresco.jpg",
        discount: 12,
        stock: 80,
        price: 12.99,
        descripcion: "Combo de pizza Margarita con un refresco de cola."
    }
]
