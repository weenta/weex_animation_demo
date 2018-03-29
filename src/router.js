/*global Vue*/
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Foo from '@/pages/Foo'
import Bar from '@/pages/Bar'

Vue.use(Router)

module.exports = new Router({
    routes: [
        {   path: '/', redirect: '/hello' },
        {   path: '/hello',     name: 'HelloWorld',     component: HelloWorld },
        {	path: '/foo',	    name: 'foo',	        component: Foo  },
        {	path: '/bar',	    name: 'bar',	        component: Bar}
    ]
})
