import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ShopView from '@/views/ShopView.vue'
import ContactView from '@/views/ContactView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import LoginView from '@/views/auth/loginView.vue'
import singlePage from '@/views/singlePage.vue'
import cartView from '@/views/cartView.vue'
import adminPage from '@/views/adminPage.vue'
import addProduct from '@/views/productsCRUD.vue/addProduct.vue'
import editProduct from '@/views/productsCRUD.vue/editProduct.vue'
import store from '@/store'
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: { requiresGuest: true } 
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: { requiresGuest: true }
  },
  {
    path: '/product/:id',
    name: 'product',
    component: singlePage
  },
  {
    path: '/cart',
    name: 'cart',
    component: cartView,
    meta: { requiresAuth: true }
  },
  {
    path: '/admin',
    name: 'adminPage',
    component: adminPage,
    meta: { requiresAdmin: true }, 
  },
  {
    path: '/add-product',
    name: 'addProduct',
    component: addProduct,
  },
  {
    path: '/edit-product/:id',
    name: 'editProduct',
    component: editProduct,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters['auth/isLoggedIn']; 
  const isAdmin = store.getters['auth/isAdmin'];

  
  if (to.matched.some(record => record.meta.requiresGuest) && isLoggedIn) {
    next({ path: '/' });
    return;
  }

  
  if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
    next({
      path: '/login',
      query: { redirect: to.fullPath, message: 'You must be logged in to access this page.' }
    });
    return;
  }

  
  if (to.matched.some(record => record.meta.requiresAdmin)) {
    if (isLoggedIn && isAdmin) {
      next(); 
    } else {
      next({ path: '/'});
    }
    return;
  }
  next();
});


export default router
