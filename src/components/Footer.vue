<template>
  <div class="footer"  @click="goRouter">
      <text class="jump">jump</text>
  </div>
</template>

<script>
import {slideIn,slideOut, toast} from '@/util'

export default {
    props:['path'],
    methods:{
        goRouter(){
            let targetPath = this.path
            this.$store.default.commit('setRouterHistory', targetPath)
            this.$router.push({path:targetPath})
            console.log('jump',this.$store.default.state.routerHistory)
        }
    }
}
</script>

<style scoped>
    .footer {
        height: 100px;
        background-color: #f00;
        padding-left: 20px;
        padding-right: 20px;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        bottom: 100px;
        left: 0;
        right: 0;
    }
    .jump {
        font-size: 35px;
        color: #fff;
    }
</style>
