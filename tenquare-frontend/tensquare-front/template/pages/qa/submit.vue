<template>
<div class="qa-submit-form">
    <form action="" class="sui-form">
        <div class="input-title">
            <input type="text" placeholder="标题：一句话说清问题，用问号结尾" class="input-xfat input-xxlarge title">
        </div>
        <div class="tags-area">
            <div class="input-tags">
                <input type="text" placeholder="标签，如:php可使用逗号，分号； 来分隔" class="input-xfat input-xxlarge" id="tags">
            </div>
            <div class="tags-box">
                <ul class="sui-tag tag-bordered">
                    <li class="tag-item">javascript</li>
                    <li class="tag-item">php</li>
                    <li class="tag-item">css</li>
                    <li class="tag-item">html</li>
                    <li class="tag-item">java</li>
                    <li class="tag-item">python</li>
                    <li class="tag-item">html5</li>
                    <li class="tag-item">node.js</li>
                    <li class="tag-item">c++</li>
                </ul>
            </div>
        </div>

        <div class="editor">
            <div class="quill-editor"
                :content="content"
                @change="onEditorChange($event)"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)"
                v-quill:myQuillEditor="editorOption">
            </div>
        </div>
        <div class="submit">
            <span>已保存草稿</span>
            <span><a @click="save" class="sui-btn btn-release">发布问题</a></span>
        </div>
        <div class="clearfix"></div>
    </form>
</div>
</template>
<script>
import '~/assets/css/page-sj-qa-submit.css'
import problemApi from '@/api/problem'
import Auth from '@/utils/auth'
import {quillRedefine} from 'vue-quill-editor-upload'
export default {
    data() {
        return {
            content: '',
            editorOption: {
                modules: {
                    toolbar: [
                        [{'size': ['small', false, 'large']}],
                        ['bold', 'italic'],
                        [{'list': 'ordered'}, {'list': 'bullet'}],
                        ['link', 'image']
                    ]
                }
            }
        }
    },
    // created () {
    //     this.editorOption = quillRedefine({
    //         uploadConfig: {
    //             action: 'http://localhost:3000/upload',  //图片上传地址
    //             res: (response) => {
    //                 return response.info
    //             },
    //             name: 'img'    //图片上传参数名
    //         }
    //     })  
    // },
    mounted() {
        console.log('app init, my quill insrance object is:', this.myQuillEditor)
    },
    methods: {
        onEditorBlur(editor) {
            console.log('editor blur!', editor)
        },
        onEditorFocus(editor) {
            console.log('editor focus!', editor)
        },
        onEditorReady(editor) {
            console.log('editor ready!', editor)
        },
        onEditorChange({ editor, html, text }) {
            console.log('editor change!', editor, html, text)
            this.content = html
        },

        save() {
            if (Auth.getUser().nickName === undefined) {
                this.$message({
                    message: '请先登陆',
                    type: 'warnning'
                })
            }
            problemApi.save({content:this.content, uid:Auth.getUser().uid}).then(resp => {
                this.$message({
                    message: resp.data.message,
                    type: (resp.data.flag?'success':'error')
                })
                if (resp.data.flag) {
                    this.$router.push('/qa')
                }
            })
        }
    },
}
</script>
<style>
.quill-editor {
    min-height: 200px;
    max-height: 400px;
    overflow-y: auto;
}
</style>
