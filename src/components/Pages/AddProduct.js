import React, { useState } from 'react';
import axios from 'axios';
import './AddProduct.css';
import NavBar from '../NavBar';

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://fakestoreapi.com/products', product);
      console.log('Product added:', response.data);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (<>
    <NavBar />
    <div className='Add-Container'>
      <h1 className='Add-Product-Heading'>Add Product</h1>
      <form onSubmit={handleSubmit} className='Add-Form'>
        <div>
          <label className='Label'>Title:</label>
          <input className='Input' type="text" name="title" value={product.title} onChange={handleChange} />
        </div>
        <div>
          <label className='Label'>Price:</label>
          <input className='Input' type="number" name="price" value={product.price} onChange={handleChange} />
        </div>
        <div>
          <label className='Label'>Description:</label>
          <textarea className = 'textarea' name="description" value={product.description} onChange={handleChange} />
        </div>
        <div>
          <label className='Label'>Category:</label>
          <input className='Input' type="text" name="category" value={product.category} onChange={handleChange} />
        </div>
        <div>
          <label className='Label'>Image URL:</label>
          <input className='Input' type="text" name="image" value={product.image} onChange={handleChange} />
        </div>
        <button type="submit" className='Add-Product-Button'>Add Product</button>
      </form>
    </div>
  </>
  );
};

export default AddProduct;
