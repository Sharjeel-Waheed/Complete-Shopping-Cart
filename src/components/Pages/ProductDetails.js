import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductDetails.css';
import NavBar from '../NavBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const productDetail = useSelector((state) => state?.data?.selectedProduct);

    const addToCart = (product) => {
        dispatch({ type: 'SET_CART', payload: product });
        toast.success(`${product.title} added to cart`, {
            position: "bottom-right",
        });

        
    };

    const showCart = () => {
        navigate('/cart');
    };

    return (
        <>
            <NavBar />
            <ToastContainer />
            <div className='product-details'>
                <img src={productDetail.image} alt={productDetail.title} className='product-image' />
                <p className='product-title'>{productDetail.title}</p>
                <p className='product-category'>Category : {productDetail.category}</p>
                <p className='product-price'>Price : ${productDetail.price}</p>
                <p className='product-description'>Details : {productDetail.description}</p>
                <button onClick={() => addToCart(productDetail)}>Add To Cart</button>
                <button onClick={showCart}>View Cart</button>
            </div>
        </>
    );
};

export default ProductDetails;