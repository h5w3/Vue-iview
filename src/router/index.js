import Vue from 'vue'
import Router from 'vue-router'

//实现按需懒加载
const Hello = () => import('../components/Hello');
const Login = () => import('../page/login/Login');
const Home = () => import('../page/home/Home');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path: '/login',
    	name: 'login',
    	component: Login
    },
    {
    	path: '/home',
    	name: 'home',
    	component: Home
    }
  ]
})
