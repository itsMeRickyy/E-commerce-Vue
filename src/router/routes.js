import {createRouter, createWebHashHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import CartView from "../views/CartView.vue";
import LoginView from "../views/LoginView.vue";
import DetailProductView from "../views/DetailProductView.vue";
import ProfileView from "../views/ProfileView.vue";
import SearchResultView from "@/views/SearchResultView.vue";
// import MyGuard from "./MyGuard";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/product/:id",
      name: "productDetail",
      component: DetailProductView,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
    },
    {
      //   path: "/profile",
      //   name: "profile",
      //   component: ProfileView,
      // },
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/search/:searchTerm",
      name: "search",
      component: SearchResultView,
    },
  ],
  // globalGuards: [MyGuard],
});

export default router;
