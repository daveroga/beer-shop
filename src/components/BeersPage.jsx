import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import CartContext from '../CartContext';
import Beer from './Beer';

export default function BeersPage() {
  const [text, setText] = useState('');
  const [beerList, setBeerList] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const search = location.search.substring(1);
  const cart = useContext(CartContext);

  const loadBeers = async () => {
    const qstr = search ? `?beer_name=${search}` : '';
    const response = await fetch(`https://api.punkapi.com/v2/beers${qstr}`);
    const json = await response.json();

    setBeerList(json);
  };

  const doSearch = (e) => {
    e.preventDefault();
    history.push(`/beers?${text}`);
  };

  const addToCartButton = (beer) => {
    const _add = (e) => {
      e.stopPropagation();
      cart.add(beer);
    }
    return <button onClick={_add}>Add to Cart</button>;
  }

  useEffect(() => {
    loadBeers();
  }, [search]);

  if (beerList === null) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <form onSubmit={doSearch}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <div>
        {beerList.map((beer) => (
          <Beer key={beer.id} beer={beer} button={addToCartButton(beer)} />
        ))}
      </div>
    </div>
  );
}
