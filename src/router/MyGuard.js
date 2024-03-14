import {useRouter} from "vue-router";

export default {
  beforeRouteEnter(to, from, next) {
    const router = useRouter();
    const isLoggedIn = localStorage.getItem("token"); // Check for token

    if (!isLoggedIn) {
      // Redirect to login and optionally store intended route
      router.push("/login");
      localStorage.setItem("intendedRoute", to.fullPath); // Optional
    } else {
      next();
    }
  },
};
