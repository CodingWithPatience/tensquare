<template>
<div class="wrapper tag-item">
    <div class="fl left-list">
        <div class="job-position">
            <div class="job-type reco-job">
                <div class="head">
                    <h4 class="title pull-left">推荐职位</h4>
                    <span class="more pull-right"><a href="#">更多职位推荐&nbsp;&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></a></span>
                    <div class="clearfix"></div>
                </div>
                <ul class="yui3-g job-list" style="display:block;">
                    <li class="yui3-u-1-2 job-item" v-for="(item,index) in recommendList" :key="index">
                        <p><span class="name"><a :href="item.url" target="_blank">{{item.jobName}}</a></span><span class="city"><i class="fa fa-map-marker"></i>{{item.address}}</span></p>
                        <p class="need"><span class="money">{{item.salary}}</span>/{{item.condition}}/{{item.education}}/<span v-if="item.type==='1'">全职</span><span v-if="item.type==='0'">兼职</span></p>
                        <p><span class="company"><a :href="item.url" target="_blank" :v-model="item.enterprise.name">{{item.enterprise.name}}</a> &middot; {{item.createTime}}</span></p>
                    </li>
                </ul>
            </div>
            <div class="job-type latest-job">
                <div class="head">
                    <h4 class="title pull-left">最新职位</h4>
                    <span class="more pull-right"><a href="#">更多职位推荐&nbsp;&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></a></span>
                    <div class="clearfix"></div>
                </div>
                <ul class="yui3-g job-list" style="display:block;">
                    <li class="yui3-u-1-2 job-item" v-for="(item,index) in newList" :key="index">
                        <p><span class="name"> <a :href="item.url" target="_blank">{{item.jobName}}</a></span><span class="city"><i class="fa fa-map-marker"></i>{{item.address}}</span></p>
                        <p class="need"><span class="money">{{item.salary}}</span>{{item.condition}}/{{item.education}}/<span v-if="item.type==='1'">全职</span><span v-if="item.type==='0'">兼职</span></p>
                        <p><span class="company"><a :href="item.url" target="_blank" :v-model="item.enterprise.name">{{item.enterprise.name}}</a> &middot; {{item.createTime}}</span></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="fl right-tag">
        <div class="hot-company">
            <p class="mail">提交收录请发邮件至ccccccc@qq.com</p>
            <div class="company">
                <div class="head">
                    <h4>热门企业</h4>
                </div>
                <ul class="yui3-g company" style="display:block;">
                    <li class="yui3-u-1-3 company-item" v-for="(item,index) in hotList" :key="index">
                        <p><img :src="item.logo" alt="" /></p>
                        <p class="title">{{item.name}}</p>
                        <p class="position"><a :href="item.url" target="_blank">{{item.jobCount}}</a></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="clearfix"></div>
</div>
</template>

<script>
import '~/assets/css/page-sj-recruit-index.css'
import recruitApi from '@/api/recruit'
import enterpriseApi from '@/api/enterprise'
import axios from 'axios'
export default {
    data() {
        return {
            recommendEnames: new Array(),
            newEnames: new Array(),
        }
    },
    asyncData() {
        return axios.all([recruitApi.recommend(), recruitApi.newlist(), enterpriseApi.hotlist()]).then(
            axios.spread(function(recommendList, newList, hotList) {
                let tmp1 = recommendList.data.data.map(item => {
                    return {
                        ...item,
                        enterprise: {}
                    }
                })
                let tmp2 = newList.data.data.map(item => {
                    return {
                        ...item,
                        enterprise: {}
                    }
                     
                })
                return {
                    recommendList: tmp1,
                    newList: tmp2,
                    hotList: hotList.data.data
                }
            })
        )
    },
    created() {
        for(let index in this.recommendList) {
            enterpriseApi.findById(this.recommendList[index].eid).then(resp => {
                this.recommendList[index].enterprise = resp.data.data
            })
        }
        for(let index in this.newList) {
            enterpriseApi.findById(this.newList[index].eid).then(resp => {
                this.newList[index].enterprise = resp.data.data
            })
        }
    }
}
</script>
