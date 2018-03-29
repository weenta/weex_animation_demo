<template>
  <div class="header"  @click="goBack">
      <text class="jump">goback</text>
  </div>
</template>

<script>
import { slideIn, slideOut } from '@/util'
export default {
    props:['el'],
    methods:{
        goBack(){
            if(this.$store.default.state.routerHistory.length>0){
                slideOut(this.el)
                setTimeout(() => {
                    this.$router.go(-1)
                }, 180);
            }
            console.log('back',this.$store.default.state.routerHistory)
        }
    }
}
</script>

<style scoped>
    .header {
        height: 100px;
        background-color: #4545f3;
        padding-left: 20px;
        padding-right: 20px;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }
    .jump {
        font-size: 35px;
        color: #fff;
    }
</style>
