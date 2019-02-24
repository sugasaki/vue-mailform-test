import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/counter",
      name: "counter",
      component: () =>
        import(/* webpackChunkName: "counter" */ "./views/Counter.vue")
    },
    {
      path: "/contact",
      component: () =>
        import(/* webpackChunkName: "contact" */ "./views/contact/Contact.vue"),
      children: [
        {
          path: "",
          component: () =>
            import(/* webpackChunkName: "contact" */ "./views/contact/ContactForm.vue")
        },
        {
          path: "cofirm",
          component: () =>
            import(/* webpackChunkName: "cofirm" */ "./views/contact/Comfirm.vue")
        },
        {
          path: "result",
          component: () =>
            import(/* webpackChunkName: "result" */ "./views/contact/Result.vue")
        }
      ]
    }
  ]
});
