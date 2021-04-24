import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home Page - Example App",
      metaTags: [
        {
          name: "description",
          content: "The home page of our example app.",
        },
        {
          property: "og:description",
          content: "The home page of our example app.",
        },
      ],
    },
  },
  {
    path: "/places",
    name: "Places",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Places.vue"),
    meta: {
      title: "Places list - Example App",
      metaTags: [
        {
          name: "description",
          content: "The places list.",
        },
        {
          property: "og:description",
          content: "The places list.",
        },
      ],
    },
  },
  {
    path: "/page-example",
    name: "Object",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Object.vue"),
    meta: {
      title: "Example of object page - Example App",
      metaTags: [
        {
          name: "description",
          content: "The example of object page of our example app.",
        },
        {
          property: "og:description",
          content: "The example of object page of our example app.",
        },
      ],
    },
  },
  {
    path: "*",
    name: "404",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/404.vue"),
    meta: {
      title: "404 - Not Found!",
      metaTags: [
        {
          name: "description",
          content: "This page does not exist!",
        },
        {
          property: "og:description",
          content: "This page does not exist!",
        },
      ],
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  // scrollBehavior: function (to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition;
  //   } else if (to.hash) {
  //     return { selector: to.hash, behavior: "smooth" };
  //   } else {
  //     return { x: 0, y: 0 };
  //   }
  // },
  routes,
});

router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(
    document.querySelectorAll("[data-vue-router-controlled]")
  ).map((el) => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach((tag) => document.head.appendChild(tag));

  next();
});

export default router;
