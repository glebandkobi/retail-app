import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  const data = {
    labels: products.map(p => p.name),
    datasets: [{
      label: 'Stock Levels',
      data: products.map(p => p.stock),
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    }]
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Retail Inventory Dashboard</h1>
      <div style={{ width: '600px' }}>
        <Bar data={data} />
      </div>
    </div>
  );
}

export default App;
