import {defineStore} from "pinia";
import {ref} from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(1);
  const products = ref([]);

  function getProducts() {
    axios
      .get("https://fakestoreapi.com/products")
      .then(response => {
        products.value = response.data; // Assuming the response is an array of products
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }

  function increment() {
    count.value++;
  }
  function decrement() {
    if (count.value > 1) {
      count.value--;
    }
  }

  return {count, increment, decrement, getProducts, products};
});
