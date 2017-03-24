import VueRouter from 'vue-router';

// Index Scroll
import Landing from './components/Landing';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';

const routes = new VueRouter({
  routes: [
    {
      path: '/',
      component: Landing
    },
    // {
    //   path: '/PageTwo',
    //   component: PageTwo
    // },
    // {
    //   path: '/PageThree',
    //   component: PageThree
    // }
  ]
});

export default routes;
