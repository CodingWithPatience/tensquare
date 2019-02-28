<template>
<div class="wrapper qa-content">
    <div class="fl left-list">
        <div class="tab-content">
            <div id="index" class="tab-pane active">
                <div class="tab-bottom-line">
                    <ul class="sui-nav nav-tabs">
                        <li :class="type=='new'?'active':''"><a @click="type='new'">最新回答</a></li>
                        <li :class="type=='hot'?'active':''"><a @click="type='hot'">热门回答</a></li>
                        <li :class="type=='wait'?'active':''"><a @click="type='wait'">等待回答</a></li>
                    </ul>
                    <div class="qa-list" v-infinite-scroll="loadMore">
                        <div class="tab-content">
                            <div id="new" :class="'tab-pane '+(type=='new'?'active':'')">
                                <ul class="detail-list">
                                    <li class="qa-item" v-for="(item,index) in newList" :key="index">
                                        <div class="fl record">
                                            <div class="number">
                                                <div class="border useful">
                                                    <p class="usenum">{{item.thumbUp}}</p>
                                                    <p>有用</p>
                                                </div>
                                                <div class="border answer">
                                                    <p class="ansnum">{{item.reply}}</p>
                                                    <p>回答</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="fl info">
                                            <div class="question">
                                                <p class="author"><span class="name">{{item.replyName}}</span><span>{{item.replyTime}}</span> 回答</p>
                                                <p class="title"><router-link :to="'/qa/'+item.id" ><a target="_blank">{{item.title}}</a></router-link></p>
                                            </div>
                                            <div class="other">
                                                <ul class="fl sui-tag">
                                                    <li>Php</li>
                                                    <li>Javascript</li>
                                                </ul>
                                                <div class="fr brower">
                                                    <p>浏览量 {{item.visits}} | {{item.createTime}} 来自 <a href="#">{{item.nickname}}</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="clearfix"></div>
                                    </li>
                                </ul>
                            </div>
                            <div id="hot" :class="'tab-pane '+(type=='hot'?'active':'')">
                                <ul class="detail-list">
                                    <li class="qa-item" v-for="(item,index) in hotList" :key="index">
                                        <div class="fl record">
                                            <div class="number">
                                                <div class="border useful">
                                                    <p class="usenum">{{item.thumbUp}}</p>
                                                    <p>有用</p>
                                                </div>
                                                <div class="border answer">
                                                    <p class="ansnum">{{item.reply}}</p>
                                                    <p>回答</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="fl info">
                                            <div class="question">
                                                <p class="author"><span class="name">{{item.replyName}}</span><span>{{item.replyTime}}</span> 回答</p>
                                                <p class="title"><router-link :to="'/qa/'+item.id" ><a target="_blank">{{item.title}}</a></router-link></p>
                                            </div>
                                            <div class="other">
                                                <ul class="fl sui-tag">
                                                    <li>Php</li>
                                                    <li>Javascript</li>
                                                </ul>
                                                <div class="fr brower">
                                                    <p>浏览量 {{item.visits}} | {{item.createTime}} 来自 <a href="#">{{item.nickname}}</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="clearfix"></div>
                                    </li>
                                </ul>
                            </div>
                            <div id="wait" :class="'tab-pane '+(type=='wait'?'active':'')">
                                <ul class="detail-list">
                                    <li class="qa-item" v-for="(item,index) in waitList" :key="index">
                                        <div class="fl record">
                                            <div class="number">
                                                <div class="border useful">
                                                    <p class="usenum">{{item.thumbUp}}</p>
                                                    <p>有用</p>
                                                </div>
                                                <div class="border answer">
                                                    <p class="ansnum">{{item.reply}}</p>
                                                    <p>回答</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="fl info">
                                            <div class="question">
                                                <p class="author"><span class="name">{{item.replyName}}</span><span>{{item.replyTime}}</span> 回答</p>
                                                <p class="title"><router-link :to="'/qa/'+item.id" ><a target="_blank">{{item.title}}</a></router-link></p>
                                            </div>
                                            <div class="other">
                                                <ul class="fl sui-tag">
                                                    <li>Php</li>
                                                    <li>Javascript</li>
                                                </ul>
                                                <div class="fr brower">
                                                    <p>浏览量 {{item.visits}} | {{item.createTime}} 来自 <a href="#">{{item.nickname}}</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="clearfix"></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="php" class="tab-pane">
                php
            </div>
            <div id="js" class="tab-pane">
                Javascript
            </div>
            <div id="python" class="tab-pane">
                python
            </div>
            <div id="java" class="tab-pane">
                java
            </div>
        </div>
    </div>
    <div class="fl right-tag">
        <div class="block-btn">
            <p>今天，有什么好东西要和大家分享么?</p>
            <a class="sui-btn btn-block btn-share" href="/qa/submit" target="_blank">发布问题</a>
        </div>
        <div class="hot-tags">
            <div class="head">
                <h3 class="title">热门标签</h3>
            </div>
            <div class="tags">
                <ul class="sui-tag">
                    <li>Php</li>
                    <li>Javascript</li>
                    <li>Git</li>
                    <li>Java</li>
                    <li>C#</li>
                    <li>iOS</li>
                    <li>C++</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="clearfix"></div>
</div>
</template>
<script>
import problemApi from '@/api/problem'
import axios from 'axios'
export default {
    asyncData({params}) {
        return axios.all([problemApi.newList(params.label, 1),
            problemApi.hotList(params.label, 1),
            problemApi.waitList(params.label, 1)]).then(
                axios.spread(function(newList,hotList,waitList) {
                    return {
                        newList: newList.data.data,
                        hotList: hotList.data.data,
                        waitList: waitList.data.data,
                        label: params.label
                    }
                })
            )
    },
    data() {
        return {
            type: 'new',
            pageNew: 1,
            pageHot: 1,
            pageWait: 1,
        }
    },
    methods: {
        loadMore() {
            if (this.type==='new') {
                this.pageNew++
                problemApi.newList(this.label, this.pageNew).then(resp => {
                    this.newList = this.newList.concat(resp.data.data)
                })
            }
            if (this.type==='hot') {
                this.pageHot++
                problemApi.hotList(this.label, this.pageHot).then(resp => {
                    this.hotList = this.hotList.concat(resp.data.data)
                })
            }
            if (this.type==='wait') {
                this.pageWait++
                problemApi.waitList(this.label, this.pageWait).then(resp => {
                    this.waitList = this.waitList.concat(resp.data.data)
                })
            }
        }
    }
}
</script>

