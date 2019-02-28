<template>
<div class="wrapper tc-detail">
    <div class="fl left-list">
        <div class="tc-detail">
            <!-- 标题区 -->
            <div class="detail-tit">
                <div class="detail-author">
                    <a href="javascript:;">{{pojo.nickname}}</a> 发布
                </div>
                <div class="detail-content">
                    <p>{{pojo.content}}</p>
                </div>
                <div class="detail-tool">
                    <ul>
                        <li><span class="star" @click="thumbUp(pojo.id)"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>{{pojo.thumbUp}}</span></li>
                        <li><a href="#" data-toggle="modal" data-target="#shareModal"><i class="fa fa-share-alt" aria-hidden="true"></i>{{pojo.share}}</a></li>
                        <li><a data-toggle="modal" @click="dialogVisible=true;content=''" data-target="#remarkModal"><i class="fa fa-commenting" aria-hidden="true"></i>{{pojo.comment}}</a></li>
                    </ul>
                </div>
            </div>
            <!-- 评论区 -->
            <div class="comment-area">
                <div class="comment-tit">
                    <span>评论</span>
                </div>
                <ul class="comment-list">
                    <li v-for="(comment,index) in commentList" :key="index">
                        <div class="item-photo">
                            <img src="~/assets/img/widget-widget-photo.png" alt="" />
                        </div>
                        <div class="item-content">
                            <p class="author"><a href="javascript:;">{{comment.nickname}}</a> 发布</p>
                            <p class="content">{{comment.content}}</p>
                        </div>
                        <div class="item-thumb">
                            <div>
                                <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>{{comment.thumbup}}
                            </div>
                        </div>
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
    <el-dialog title="评论" :visible.sync="dialogVisible" width="40%">
        <div class="quill-editor" :content="content" @change="onEditorChange($event)" v-quill:myQuillEditor="editorOption">
            <div class="quill-editor"
                :content="content"
                @change="onEditorChange($event)">
            </div>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="save">提交</el-button>
        </span>
    </el-dialog>
</div>
</template>

<script>
import '~/assets/css/page-sj-spit-detail.css'
import spitApi from '@/api/spit'
import axios from 'axios'
export default {
    asyncData({params}) {
        return axios.all([spitApi.findById(params.id), spitApi.commentList(params.id, this.commentPage)]).then(
            axios.spread(function (pojo, commentList) {
                return {
                    pojo: pojo.data.data,
                    commentList: commentList.data.data
                }
            })
        )
    },
    data() {
        return {
            commentPage: 1,
            dialogVisible: false,
            content: '',
            editorOption: {
                modules: {
                    toolbar: [
                        [{'size':['small', false, 'large']}],
                        ['bold', 'italic'],
                        [{'list': 'ordered'}, {'list': 'bullet'}],
                        ['link', 'image']
                    ]
                }
            }
        }
    },
    methods: {
        thumbUp(id) {
            spitApi.thumbUp(id).then(resp => {
                if (resp.data.flag) {
                    this.pojo.thumbUp++
                }
                this.$message({
                    message: resp.data.message,
                    type: (resp.data.flag ? 'success' : 'error')
                })
            })
        },
        onEditorChange({ editor, html, text }) {
            console.log('editor change!', editor, html, text)
            this.content = html
        },
        save() {
            spitApi.save({content:this.content,parentId:this.pojo.id}).then(resp => {
                this.$message({
                    message: resp.data.message,
                    type: (resp.data.flag?'success':'error')
                })
                if (resp.data.flag) {
                    this.dialogVisible = false
                    spitApi.commentList(this.pojo.id, this.commentPage).then(resp => {
                        this.commentList = resp.data.data
                    })
                }
            })
        }
    }
}
</script>
<style>
.quill-editor {
    min-height: 200px;
    max-height: 400px;
    overflow-y: auto;
}
</style>
