import React, { useState } from 'react';
import axios from 'axios';

function ProductMatch() {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/match', { query });
      setProducts(response.data);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
      setProducts([]);
    }
  };

  return (
    <div>
      <h1>Product Name Matching</h1>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Enter product name"
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p>{error}</p>}

      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <strong>{product.name}</strong> - {product.description} (${product.price})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductMatch;
