import axios from 'axios';

export const allowUser = async (username, password) => {
  try {
    const response = await axios.post('https://dummyjson.com/auth/login', {
      username: username,
      password: password,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      console.log('Login failed');
      return { error: 'Login failed' };
    }
  } catch (error) {
    console.error('An error occurred while logging in', error);
    return { error: 'An error occurred while logging in' };
  }
};

export const getProducts = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching products', error);
    return { error: 'An error occurred while fetching products' };
  }
};