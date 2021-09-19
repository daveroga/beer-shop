
import React, { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [items, setItems] = useState([]);

  const cart = {
    items,
    add(beer) {
      setItems([...items, beer]);
    },
    remove(id) {
      setItems(items.filter(it => it.id !== id));
    }

  };

  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  );
}


export default CartContext;