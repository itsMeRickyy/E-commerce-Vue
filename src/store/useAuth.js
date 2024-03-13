import {defineStore} from "pinia";
import {login, getUsername} from "../services/auth.service";

export const useAuth = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("token") || "",
    isLoggedIn: false,
  }),
  actions: {
    // async perfomLogin(credentials) {
    //     try {
    //         const response = await login(credentials, (succes, data) => {
    //             if(succes) {
    //                 localStorage.setItem("token", data);
    //                 this.token = data;
    //                 this.isLoggedIn = true;
    //                 this.$router.push("/");
    //             } else {
    //                 console.error("Login error:");
    //             }
    //         })
    //     }
    // }
    logout() {
      localStorage.removeItem("token");
      this.token = "";
      this.$router.push("/login");
    },
  },
  //   computed: {
  //     isUserLoggedIn() {
  //       return !!this.token && !this.isTokenExpired(); // Check for token presence and validity
  //     },
  //   },
  //   methods: {
  //     isTokenExpired() {
  //       // Implement token expiration logic if needed (e.g., using jwt_decode with 'exp' claim)
  //       // Placeholder for now:
  //       return false;
  //     },
  //   },
});
