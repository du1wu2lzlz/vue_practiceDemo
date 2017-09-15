<template>
	<div class="swiper-container">
       <div class="swiper-wrapper">
          <div class=" swp-page swiper-slide" v-for="list in lists">
             <a class="js-no-follow" :href="list.clickUrl">
                <img class="goods-main-photo fadeIn" :src="list.image">
             </a>
          </div>
       </div>
       <div class="swiper-pagination"></div>
    </div>
</template>

<script>
  //任何一个单vue文件 导出一个实例的option


  // swiper 对dom节点进行操作的 ，dom节点什么时候生成 ：mounted 
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
  export default {
  	name: 'swipe',
  	props: {
  	   lists: {
          required: true
  	  },
  	  name: {

  	  }
  	 },
  	 mounted() {
       this.init()
  	 },
  	methods: {
      init() {
        new Swiper('.swiper-container', {
          loop: true,
          pagination: '.swiper-pagination'
      })
    }
  }

  }
</script>

<style>
.swiper-slide img{
  height: 100%;
  width:  100%;
}
</style>