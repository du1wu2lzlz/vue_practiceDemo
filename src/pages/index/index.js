import 'css/common.css'
import './index.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import Foot from 'components/Foot.vue'
import Swipe from 'components/Swipe.vue'

import 'mint-ui/lib/style.css' 
import { InfiniteScroll } from 'mint-ui'
Vue.use(InfiniteScroll)
// mint-ui 无限滚动组件

new Vue({
  el: '.vue-index',
  data : {
  	lists: null,
  	pageNum: 1,
  	loading: false,
  	allLoaded: false,
  	pageSize: 6,
  	bannerLists: null
  },
  created(){
    this.getLists()
    this.getBanner()
  },
  mounted() {

  },
  methods: {
	getLists () {
		if(this.allLoaded) return
		//是否在加载中
		this.loading = true
		axios.post(url.hotLists,{
	      pageNum : this.pageNum,
	      pageSize: this.pageSize
        }).then(res => {
          let curList = res.data.lists
          //判断所有数据是否加载完毕
          if(curList.length < this.pageSize )
          {
          	this.allLoaded = true
          }
          if(this.lists){
            this.lists = this.lists.concat(curList)
          }else{
          	//第一次请求数据
          this.lists = curList
          }
          this.pageNum++
          this.loading = false
        })
	},
	getBanner () {
		axios.get(url.banner).then(res => {
          this.bannerLists = res.data.lists
		})
	}
  },
  components: {
    Foot,
    Swipe
  }
})