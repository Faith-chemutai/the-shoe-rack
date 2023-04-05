import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Shoe = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    axios.get('/api/shoes').then(response => {
      setShoes(response.data);
    });
  }, []);

  return (
    <div>
      {shoes.map(shoe => (
        <div key={shoe.id}>
          <h2>{shoe.name}</h2>
          <p>{shoe.description}</p>
          <p>{shoe.price}</p>
          <img src={shoe.image_url} alt={shoe.name} />
        </div>
      ))}
    </div>
  );
};

export default Shoe;