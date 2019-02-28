<template>
<div class="wrapper activities">
    <div class="activity-card-list">
        <div class="top-title">
            <h4 class="latest">最新活动</h4>
            <div class="clearfix"></div>
        </div>
        <div class="activity-list" v-infinite-scroll="loadMore">
            <ul class="activity">
                <li class="activity-item" v-for="(item,index) in items" :key="index">
                    <div class="activity-inner">
                        <div class="img">
                            <a :href="'/gathering/item/'+item.id" target="_blank"><img :src="item.image" alt="" /></a>
                        </div>
                        <div class="text">
                            <p class="title"><a :href="'/gathering/item/'+item.id" target="_blank">{{item.name}}</a></p>
                            <div class="fl goin">
                                <p>时间：{{item.startTime}}</p>
                                <p>城市：{{item.city}}</p>
                            </div>
                            <div class="fr btn">
                                <span class="sui-btn btn-bao">立即报名</span>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import '~/assets/css/page-sj-activity-index.css'
import gatheringApi from '@/api/gathering'
export default {
    data() {
        pageNum: 1   
    },
    asyncData() {
        return gatheringApi.search(1, {state:'1'}).then(res => {
            return {items: res.data.data}
        })
    },
    methods: {
        loadMore() {
            this.pageNum++
            return gatheringApi.search(this.pageNum, {state:'1'}).then(res => {
                this.items = this.items.concat(res.data.data)
            })
        }
    }
}
</script>
