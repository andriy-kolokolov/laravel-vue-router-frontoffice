import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import AppContact from "./pages/AppContact.vue";
import AppRandom from "./pages/AppRandom.vue";
import AppAlcohol from "./pages/AppAlcohol.vue";
import AppAlcoholFree from "./pages/AppAlcoholFree.vue";
import AppShow from "./pages/AppShow.vue";
import AppSearchResult from "./pages/AppSearchResult.vue";
import AppAdvancedSearch from "./pages/AppAdvancedSearch.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/about",
      name: "about",
      component: AppAbout,
    },
    {
      path: "/contact",
      name: "contact",
      component: AppContact,
    },
    {
      path: "/random",
      name: "random",
      component: AppRandom,
    },
    {
      path: "/alcohol",
      name: "alcohol",
      component: AppAlcohol,
    },
    {
      path: "/alcoholFree",
      name: "alcoholFree",
      component: AppAlcoholFree,
    },
    {
      path: "/cocktails/:id",
      name: "show",
      component: AppShow,
    },
    {
      path: "/search",
      name: "search",
      component: AppSearchResult,
    },,
    {
      path: "/advanced-search",
      name: "advanced-search",
      component: AppAdvancedSearch,
    },

  ],
});

export { router };
