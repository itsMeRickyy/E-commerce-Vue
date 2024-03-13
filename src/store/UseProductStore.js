import {defineStore} from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [],
  }),
  actions: {
    setProducts(newProducts) {
      this.products = newProducts;
    },
  },
});
