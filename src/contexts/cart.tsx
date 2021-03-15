import { createContext } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Cart {
  prodcuts?: Product[];
  shipping_value?: number;
}

const CartContext = createContext<Cart>({
  prodcuts: [],
  shipping_value: 0,
});

export default CartContext;
