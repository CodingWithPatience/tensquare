<template>
<div class="wrapper release-tc">
    <div class="release-box">
        <h3>发布吐槽</h3>
        <div class="editor">
            <div class="quill-editor"
                :content="content"
                @change="onEditorChange($event)"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)"
                v-quill:myQuillEditor="editorOption">
            </div>
            <div class="btns">
                <button @click="save" class="sui-btn btn-danger btn-release">发布</button>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
    <div class="clearfix"></div>
</div>
</template>
<script>
import '~/assets/css/page-sj-spit-submit.css'
import spitApi from '@/api/spit'
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
            spitApi.save({content:this.content, uid:Auth.getUser().uid}).then(resp => {
                this.$message({
                    message: resp.data.message,
                    type: (resp.data.flag?'success':'error')
                })
                if (resp.data.flag) {
                    this.$router.push('/spit')
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
