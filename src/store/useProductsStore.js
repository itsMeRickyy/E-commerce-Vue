import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";
import {getProducts, getCategories} from "../services/fetchProducts";

export const useProductsStore = defineStore("products", () => {
  const products = ref([]);
  const categories = ref([]);

  function getProducts() {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => {
        products.value = data;
        console.log("Data is fetched.");
      })
      .catch(error => {
        console.log(error);
      });
  }

  function getCategories() {
    fetch("https://fakestoreapi.com/products/categories")
      .then(response => response.json())
      .then(data => {
        categories.value = data;
        console.log("Categories are fetched.");
      })
      .catch(error => {});
  }

  getProducts();
  getCategories();

  return {products, getProducts, categories, getCategories};
});

// export const useProductsStore = defineStore("products", {
//   state: () => ({
//     products: [],
//     categories: [],
//     isLoading: false,
//   }),
//   actions: {
//     setProducts(newProducts) {
//       this.products = newProducts;
//     },
//     setCategories(newCategories) {
//       this.categories = newCategories;
//     },
//   },
// });
