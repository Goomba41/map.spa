import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    // Домашняя страница
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: " Главная - Прогулка по Кирову",
      metaTags: [
        {
          name: "description",
          content: "Главная страница сайта.",
        },
        {
          property: "og:description",
          content: "Главная страница сайта.",
        },
      ],
    },
  },
  {
    // Страница с полным постраничным списком отмеченных мест
    path: "/places",
    name: "Places",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Places.vue"),
    meta: {
      title: "Места - Прогулка по Кирову",
      metaTags: [
        {
          name: "description",
          content: "Полный список мест, отмеченных на карте.",
        },
        {
          property: "og:description",
          content: "Полный список мест, отмеченных на карте.",
        },
      ],
    },
  },
  {
    // Страница отмеченного места
    path: "/object/:id",
    name: "Object",
    props: true,
    component: () => import("../views/Object.vue"),
    meta: {
      title: "Место (динамическая смена) - Прогулка по Кирову",
      metaTags: [
        {
          name: "description",
          content: "Динамически изменяемое описание.",
        },
        {
          property: "og:description",
          content: "Динамически изменяемое описание.",
        },
      ],
    },
  },
  {
    // 404 страница (не найдено)
    path: "*",
    name: "404",
    component: () => import("../views/404.vue"),
    meta: {
      title: "404 - Не найдено!",
      metaTags: [
        {
          name: "description",
          content: "Страница не существует!",
        },
        {
          property: "og:description",
          content: "Страница не существует!",
        },
      ],
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: function (to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash, behavior: "smooth" };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
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
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    (el) => el.parentNode.removeChild(el)
  );

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
