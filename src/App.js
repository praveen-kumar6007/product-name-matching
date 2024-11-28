import React from 'react';
import ProductMatch from './ProductMatch'; 

function App() {
  return (
    <React.Fragment>
      <header style={{ textAlign: 'center', padding: '10px', backgroundColor: '#f8f9fa' }}>
        <h1>Product Match App</h1>
      </header>
      <main style={{ padding: '20px' }}>
        <ProductMatch />
      </main>
    </React.Fragment>
  );
}

export default App;
