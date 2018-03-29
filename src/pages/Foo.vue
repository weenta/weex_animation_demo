<template>
<div class="foo" ref='foo'>
  <nav-header  :el="el"></nav-header>
  <text class="message">this is page Foo 2</text>
  <nav-footer path='/bar'></nav-footer>
</div>
</template>

<script>
import NavHeader from '@/components/Header'
import NavFooter from '@/components/Footer'
import {slideIn,slideOut, toast} from '@/util'

export default {
    components:{
        NavHeader,
        NavFooter
    },
    data(){
        return {
            el:'',
        }
    },
    methods:{
        animationIn(){
			let idx=this.$store.default.state.routerHistory.length-2
			let prePath = this.$store.default.state.routerHistory[idx]
            
            let el = this.$refs.foo
            let path = this.$route.path
            if(prePath === path ) {
                this.$store.default.commit('removeLastPath')
            }else{
                slideIn(el)
            }    
        },

    },
    mounted(){
        this.animationIn()
        this.el = this.$refs.foo
    },
    created(){
        
    }
}
</script>

<style scoped>
.foo {
    width: 750px;
    background-color: chocolate;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
}   
  .message {
    height: 300px;
    position: absolute;
    top: 200px;
    left: 0;
    right: 0;
  }
</style>
