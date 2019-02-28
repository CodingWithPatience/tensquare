<template>
<div class="wripper">
    <div class="wrapper tag-item">
        <div class="fl left-list">
            <div class="tc-data-list">
                <div class="tc-list" v-infinite-scroll="loadMore">
                    <ul class="detail-list">
                        <li class="qa-item" v-for="(item,index) in items" :key="index">
                            <div class="fl record">
                                <div class="number">
                                    <div class="border useful">
                                        <p class="usenum" @click="thumbUp(item.id, index)"><a href="#" class="zan"><i :class="'fa fa-thumbs-up '+item.zan" aria-hidden="true"></i></a></p>
                                        <p class="zannum"> {{item.thumbUp}} </p>
                                    </div>
                                    <div class="border answer">
                                        <a href="#" class="star"><i class="fa fa-star-o" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="info">
                                <p class="text"> <router-link :to="'/spit/'+item.id"> {{item.content}} </router-link> </p>
                                <div class="other">
                                    <div class="fl date">
                                        <span>{{item.publishTime}}</span>
                                    </div>
                                    <div class="fr remark">
                                        <a href="#" data-toggle="modal" data-target="#shareModal" class="share"><i class="fa fa-share-alt" aria-hidden="true"></i> 分享</a>
                                        <a href="#" data-toggle="modal" data-target="#remarkModal" class="comment"><i class="fa fa-commenting" aria-hidden="true"></i> 回复</a>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="fl right-tag">
            <div class="block-btn">
                <p>来个匿名吐槽，发泄一下你心中的怒火吧！</p>
                <a class="sui-btn btn-block btn-share" href="/spit/submit" target="_blank">发吐槽</a>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
</div>
</template>

<script>
import '~/assets/css/page-sj-spit-index.css'
import spitApi from '@/api/spit'
import Auth from '@/utils/auth';
export default {
    asyncData() {
        return spitApi.listAll().then(resp => {
            let tmp = resp.data.data.map(item => {
                return {
                    ...item,
                    zan: ''
                }
            })
            return {
                items: resp.data.data
            }
        })
    },
    data() {
        return {
            pageNum: 1,
        }
    },
    methods: {
        loadMore() {
            this.pageNum++
            spitApi.search(this.pageNum, {state:'1'}).then(resp => {
                this.items = this.items.concat(resp.data.data)
            })
        },
        thumbUp(id, index) {
            if (Auth.getUser().nickName===undefined) {
                this.$message({
                    message: "必须登陆才能点赞",
                    type: 'warnning'
                })
                return
            }
            if (this.items[index].zan === 'color') {
                this.$message({
                    message: "不能重复点赞",
                    type: 'warnning'
                })
                return
            }
            
            spitApi.thumbUp(id, Auth.getUser().uid).then(resp => {
                if (resp.data.flag) {
                    this.items[index].thumbup++
                    this.items[index].zan = 'color'
                }
                this.$message({
                    message: resp.data.message,
                    type: (resp.data.flag?'success':'error')
                })
            })
        },
    }
}
</script>
