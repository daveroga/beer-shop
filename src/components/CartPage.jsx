import React, { useContext } from 'react'
import CartContext from '../CartContext'
import Beer from './Beer';
import './CartPage.css';

export default function CartPage() {
  const cart = useContext(CartContext);
  
  const removeFromCartButton = (beer) => {
    const _remove = (e) => {
      e.stopPropagation();
      cart.remove(beer.id);
    } 
    return <button className="remove" onClick={_remove}>Remove from Cart</button>;
  }

  return (
    <div className="cart">
      {cart.items.map(beer => <Beer beer={beer} button={removeFromCartButton(beer)}/>)}
    </div>
  )
}
