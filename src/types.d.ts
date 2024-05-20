export type Menu = {
    label: string;
    icon: string;
    href: string
}

export type Category = {
    category: string
}
export type Product = {
    name : string;
    category: string; 
    image: string;
    discount: number ;
    stock: number ;
    price : number;
    descripcion: string
}