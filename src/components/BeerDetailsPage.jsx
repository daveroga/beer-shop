import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import CartContext from '../CartContext';
import './BeerDetailsPage.css';

export default function BeerDetailsPage() {
  const { id } = useParams();
  const [beer, setBeer] = useState(null);
  const history = useHistory();
  const cart = useContext(CartContext);

  const loadBeer = async () => {
    const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
    const json = await response.json();
    setBeer(json[0]);
  };


  useEffect(() => {
    loadBeer();
  }, []);

  if (beer === null) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <button onClick={() => history.goBack()}>Back</button>
      <div className="beerPage">
        <div className="image">
          <img src={beer.image_url} />
        </div>        
        <div className="info">
          <h2 className="name">{beer.name}</h2>
          <button onClick={() => cart.add(beer)}>Add to Cart</button>
          <div className="description">{beer.description}</div>
          <div className="ingredients">
            <pre>{JSON.stringify(beer.ingredients, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
