### weex 入场、出场动画效果

- vuex使用routerHistory数组存储router 
- 原理    
使用vuex存储routerHistory用来存储路由历史 路由跳转时将目标路由push到routerHistory中     
    - 入场动画      
    页面加载时 从vuex中取出上一个路由prePath， 与当前路由对比， 若不同，则加载入场动画； 否则不加载入场动画，同时去除routerHistory中最后一个路由
    - 出场动画      
    页面后退时加载判断routerHistory的长度;若大于0则加载出场动画；否则不加载动画


## notes
- 修改router.js或store.js的文件需重新编译
