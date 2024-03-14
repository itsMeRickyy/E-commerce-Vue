import {defineStore} from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
    // quantity: 1,
  }),
  actions: {
    addToCart(product, quantity = 1) {
      const existingItem = this.$state.cart.find(item => item.product === product);
      const qty = quantity || 1;
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        const updatedCart = updateCart({...product}, this.cart, qty); // Add quantity to the product object
        this.$state.cart = updatedCart;
      }
      console.log(this.$state.cart);
    },
    removeFromCart(id) {
      const {cart} = this.$state;
      const updatedCart = removeCart(id, cart);
      this.$state.cart = updatedCart;
    },
    addQty(id) {
      const {cart} = this.$state;
      const updatedCart = cart.map(item => {
        if (item.id === id) {
          return {...item, quantity: item.quantity + 1};
        } else {
          return item;
        }
      });
      this.$state.cart = updatedCart;
    },
    subQty(id) {
      const {cart} = this.$state;
      const updatedCart = cart.map(item => {
        if (item.id === id) {
          return {...item, quantity: item.quantity - 1 < 1 ? 1 : item.quantity - 1};
        } else {
          return item;
        }
      });
      this.$state.cart = updatedCart;
    },
    removeAll() {
      this.$state.cart = [];
    },
  },
});

function updateCart(product, cart, quantity) {
  const cartItem = {...product, quantity: quantity};

  const productOnChart = cart.map(item => item.id).includes(product.id);

  if (!productOnChart) cart.push(cartItem);
  else {
    return cart.map(item => {
      if (item.id === product.id) {
        return {...item, quantity: item.quantity + 1};
      } else {
        return item;
      }
    });
  }
  return cart;
}

function removeCart(id, cart) {
  return cart
    .map(item => {
      if (item.id === id) return {...item, quantity: 0};
      return item;
    })
    .filter(item => {
      return item.quantity;
    });
}
