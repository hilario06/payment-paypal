export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imagen: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Oreo",
    description: "Mini paquete oreo",
    price: 10,
    imagen: "https://m.media-amazon.com/images/I/61+VEmRT09L._SL1200_.jpg"
  },
  {
    id: 2,
    name: "Cancún",
    description: "Rellena con coco natural",
    price: 20,
    imagen: "https://www.molitalia.com.pe/wp-content/uploads/2020/09/dummmie-display-chocolate-cancun-2019.jpg"
  },
  {
    id: 3,
    name: "Cheto",
    description: "Bocadillos sabor a queso",
    price: 30,
    imagen: "https://www.cheetos.com/sites/cheetos.com/files/2024-02/Cheetos%20Bolita.png"
  },
  {
    id: 4,
    name: "Sublime",
    description: "Sublime clasico X 24",
    price: 25,
    imagen: "https://floreriasayacucho.com/wp-content/uploads/2021/08/choco-sublime.png"
  },
];
