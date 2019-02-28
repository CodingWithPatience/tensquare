<template>
<div class="wrapper">
    <div class="tab-nav ">
        <div class="wrapper">
            <ul class="fl sui-nav nav-tabs navbar-dark">
                <router-link to="/qa/label/0" tag="li" active-class="active" exact><a>首页</a></router-link>
                <router-link v-for="(label,index) in labelList" :key="index" :to="'/qa/label/'+label.id" tag="li" active-class="active"><a>{{label.labelName}}</a></router-link>
            </ul>
            <span class="fr more"><a href="~assets/qa-allTag.html" target="_blank">更多</a></span>
            <div class="clearfix"></div>
        </div>
    </div>
    <nuxt-child/>
</div>
</template>

<script>
import '~/assets/css/page-sj-qa-logined.css'
import labelApi from '@/api/label'
export default {
    asyncData() {
        return labelApi.topList().then(resp => {
            return {
                labelList: resp.data.data
            }
        })
    },
}
</script>
