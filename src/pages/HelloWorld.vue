<template>
<div class="hello" ref='hello'>
  <nav-header :el='el'></nav-header>
  <text class="message">Hello world 1</text>
  <nav-footer path='/foo'></nav-footer>
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

            let el = this.$refs.hello
            let path = this.$route.path
            if(prePath === path || idx<0) {
                this.$store.default.commit('removeLastPath')
            }else{
                slideIn(el)
            } 
        },
    },
    mounted(){
        this.animationIn()
        this.el = this.$refs.hello
        
    },
    created(){
        
    }
}
</script>

<style scoped>
  .hello {
    width: 750px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: beige;
    
  }
  .message {
    position: absolute;
    top: 200px;
    left: 0;
    right: 0;
  }
</style>
