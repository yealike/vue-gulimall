import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from "../components/Hello";
import MyTable from "../components/MyTable";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hello',
      name: 'hello组件',
      component: Hello
    }
    ,
    {
      path: '/table',
      name: '表格',
      component: MyTable
    }
  ]
})
