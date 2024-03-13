import axios from "axios";

export const getProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

export const getDetailProduct = async id => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response.data;
};

export const getCategories = async () => {
  const response = await axios.get("https://fakestoreapi.com/products/categories");
  return response.data;
};

export const getProductsByCategory = async category => {
  const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
  return response.data;
};
