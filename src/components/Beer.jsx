import React from 'react'
import { useHistory } from 'react-router-dom';
import './Beer.css';

const MAX_DESCRIPTION_LEN = 250;

export default function Beer({ beer , button }) {
  const { name, description, image_url } = beer;
  const history = useHistory();

  let descr = description;
  if (descr.length > MAX_DESCRIPTION_LEN) {
    descr = descr.substring(0, MAX_DESCRIPTION_LEN) + '...';
  }

  const goToBeer = (e) => {
    history.push(`/beers/${beer.id}`)
  }

  return (    
    <div className="beer" onClick={goToBeer}>
      <div className="image">
        <img src={image_url} />
      </div>
      <div className="info">
        <div className="name">{name}</div>
        <div className="description">{descr}</div>
        {button}
      </div>
    </div>
  );
}
