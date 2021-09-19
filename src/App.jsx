import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import BeersSwitch from './components/BeersSwitch';
import CartPage from './components/CartPage';
import HomePage from './components/HomePage';
import CartContext, { CartProvider } from './CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
      <header>
        <NavLink to="/" exact className="logo">
          BeerShop
        </NavLink>
        <NavLink to="/beers">Beers</NavLink>
        <div className="spacer"></div>
        <NavLink to="/cart">
          <CartContext.Consumer>

          {cart => <span>Cart ({cart.items.length})</span>}
          </CartContext.Consumer>
          </NavLink>
      </header>
      <main>
        <Switch>
          <Route path="/beers" component={BeersSwitch} />
          <Route path="/cart" component={CartPage} />
          <Route path="/" exact component={HomePage} />
          <Route path="/" render={() => <p>"404"</p>} />
        </Switch>
      </main>
      </CartProvider>
    </Router>
  );
}

export default App;
