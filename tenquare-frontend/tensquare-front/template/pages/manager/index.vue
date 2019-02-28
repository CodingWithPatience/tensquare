<template>
<div class="profile">
    <div class="content">
        <div class="file-edit">
            <div class="info">
                <h3 class="tit"><span>个人档案</span></h3>
                <!-- 个人信息 -->
                <div class="sui-row-fluid person canadd">
                    <div class="span4 item">
                        <h3 class="name">真人头像</h3>
                        <img src="~/assets/img/widget-o-photo.png" alt="" />
                    </div>
                    <div class="span4 item">
                        <h3 class="name">真人姓名</h3>
                        <p v-if="user.realName!==undefined && user.realName!=null">{{user.realName}}</p>
                        <p v-if="user.realName===undefined || user.realName==null">暂无</p>
                        <h3 class="name">出生日期</h3>
                        <p v-if="user.birthday!==undefined && user.birthday!=null">{{user.birthday}}</p>
                        <p v-if="user.birthday===undefined || user.birthday==null">暂无</p>
                        <h3 class="name">手机号码</h3>
                        <p v-if="user.mobile!==undefined && user.mobile!=null">{{user.mobile}}</p>
                        <p v-if="user.mobile===undefined || user.mobile==null">暂无</p>
                        <h3 class="name">现居城市</h3>
                        <p v-if="user.city!==undefined || user.city!=null">{{user.city}}</p>
                        <p v-if="user.city===undefined || user.city==null">暂无</p>
                    </div>
                    <div class="span3 item">
                        <h3 class="name">性别</h3>
                        <p v-if="user.sex!==undefined && user.sex!=null">{{user.sex}}</p>
                        <p v-if="user.sex===undefined || user.sex==null">暂无</p>
                        <h3 class="name">个人网站</h3>
                        <p>暂无</p>
                        <h3 class="name">Email</h3>
                        <p v-if="user.email!==undefined && user.email!=null">{{user.email}}</p>
                        <p v-if="user.email===undefined || user.email==null">暂无</p>
                        <h3 class="name">通讯地址</h3>
                        <p v-if="user.address!==undefined && user.address!=null">{{user.address}}</p>
                        <p v-if="user.address===undefined || user.address==null">暂无</p>
                    </div>
                    <div class="span1 edit">
                        <span class="gray" @click="profileDisplay='block'"><i class="fa fa-pencil" aria-hidden="true"></i> 编辑</span>
                    </div>
                    <div style="clear:both"></div>
                        <!-- info form -->
                    <div class="form-show" v-bind:style="{display:profileDisplay}">
                        <div class="photo">
                            <img src="~/assets/img/widget-o-photo.png" alt="" />
                            <div class="text">
                                <button class="sui-btn btn-default">上传真人头像</button>
                                <p>支持 jpg/jpeg/png 格式，大小不要超过 2MB</p>
                            </div>
                        </div>
                        <form action="" class="sui-form">
                            <div class="sui-row-fluid">
                                <div class="span6">
                                    <div class="control-group">
                                        <label for="" class="control-label">登录姓名</label>
                                        <div class="controls">
                                            <input type="text" id="name" class="input-large" v-model="pojo.loginName" placeholder="真实姓名" name="name" />
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <label for="" class="control-label">出生日期</label>
                                        <div class="controls">
                                            <input type="text" id="birthday" class="input-large" v-model="pojo.birthday" placeholder="1970/01/01" name="birthday" />
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <label for="" class="control-label">手机号码</label>
                                        <div class="controls">
                                            <input type="text" id="telphone" class="input-large" v-model="pojo.mobile" placeholder="11位手机号码" name="telphone" />
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <label for="" class="control-label">现居城市</label>
                                        <div class="controls">
                                            <input type="text" id="city" v-model="pojo.city" class="input-large" placeholder="当前现居城市" name="city" />
                                        </div>
                                    </div>
                                </div>
                                <div class="span6">
                                    <div class="control-group" style="height: 60px;">
                                        <label for="" class="control-label">性别</label>
                                        <div class="controls">
                                            <label data-toggle="radio" class="radio-pretty inline checked"> <input type="radio" checked="checked" name="qudao" /><span>保密</span> </label>
                                            <label data-toggle="radio" class="radio-pretty inline"> <input type="radio" v-model="pojo.sex" name="qudao" value="1" /><span>男</span> </label>
                                            <label data-toggle="radio" class="radio-pretty inline"> <input type="radio" v-model="pojo.sex" name="qudao" value="0" /><span>女</span> </label>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <label for="" class="control-label">个人网站</label>
                                        <div class="controls">
                                            <input type="text" id="net" class="input-large" placeholder="example.com" name="net" />
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <label for="" class="control-label">Email</label>
                                        <div class="controls">
                                            <input type="text" id="email" v-model="pojo.email" class="input-large" placeholder="用于收取通知，找回密码" name="email" />
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <label for="" class="control-label">通讯地址</label>
                                        <div class="controls">
                                            <input type="text" id="city" v-model="pojo.address" class="input-large" placeholder="当前通讯地址" name="city" />
                                        </div>
                                    </div>
                                    <div class="control-group btns">
                                        <button class="sui-btn btn-cancel" type="button" @click="profileDisplay='none'">取消</button>
                                        <button class="sui-btn btn-save" type="button" @click="updateProfile">保存</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                    <!-- 技术 -->
                <div class="skill canadd">
                    <h3> <span class="name">擅长技术</span> <span class="gray edit" @click="skillDisplay='block'"><i class="fa fa-pencil" aria-hidden="true"></i> 编辑</span> </h3>
                    <ul class="tag">
                        <li>Php</li>
                    </ul>
                    <!-- skill form -->
                    <form action="" class="sui-form form-show form-skill" v-bind:style="{display:skillDisplay}">
                        <div class="tags-area">
                            <div class="input-tags">
                                <input type="text" placeholder="标签，如:php可使用逗号，分号； 来分隔" class="input-xfat input-xxlarge" id="tags" />
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
                        <div class="clearfix"></div>
                        <div class="control-group btns">
                            <button class="sui-btn btn-cancel" type="button" @click="skillDisplay='none'">取消</button>
                            <button class="sui-btn btn-save" type="button" @click="updateSkill">保存</button>
                        </div>
                    </form>
                </div>
            </div>
                <!-- 工作 -->
            <div class="canadd">
                <h3 class="tit"><span>工作经历</span></h3>
                <div class="add-list">
                    <li>
                        <h3> <span class="add-name">传智播客-产品经理</span> <span class="gray edit" @click="workDisplay='block'"><i class="fa fa-pencil" aria-hidden="true"></i> 编辑</span> </h3> <span class="date">2017年01月21日 - 至今</span>
                    </li>
                    <p class="add"><a href="javascript:;">添加工作经历</a></p>
                </div>
                <!-- work form -->
                <div class="form-show"  v-bind:style="{display:workDisplay}">
                    <form action="" class="sui-form">
                        <div class="sui-row-fluid">
                            <div class="span6">
                                <div class="control-group">
                                    <label for="" class="control-label">公司/组织名称</label>
                                    <div class="controls">
                                        <input type="text" id="company" class="input-large" placeholder="公司/组织名称" name="company" />
                                    </div>
                                </div>
                                <div class="control-group input-daterange" data-toggle="datepicker">
                                    <label for="" class="control-label">起止时间</label>
                                    <div class="controls date">
                                        <input type="text" class="input-medium input-date" value="2016-01-01" />
                                        <span>-</span>
                                        <input type="text" class="input-medium input-date" />
                                    </div>
                                </div>
                            </div>
                            <div class="span6">
                                <div class="control-group">
                                    <label for="" class="control-label">职位头衔</label>
                                    <div class="controls">
                                        <input type="text" id="job" class="input-large" placeholder="如：Java工程师" name="job" />
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label for="" class="control-label">工作城市</label>
                                    <div class="controls">
                                        <input type="text" id="work-city" class="input-large" placeholder="如：上海" name="work-city" />
                                    </div>
                                </div>
                            </div>
                            <div class="control-group">
                                <label for="" class="control-label">相关技术</label>
                                <div class="controls">
                                    <input type="text" placeholder="标签，如:php可使用逗号，分号； 来分隔" class="input-xfat input-xxlarge" id="tags" />
                                </div>
                            </div>
                            <div class="control-group">
                                <label for="" class="control-label">职位描述</label>
                                <div class="controls">
                                    <textarea rows="3" class="input-block-level" placeholder="在职期间做了什么工作，解决了什么问题，做了什么贡献？"></textarea>
                                </div>
                            </div>
                            <div class="control-group btns">
                                <button class="sui-btn btn-cancel" type="button" @click="workDisplay='none'">取消</button>
                                <button class="sui-btn btn-save" type="button" @click="updateWork">保存</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
                <!-- 教育 -->
            <div class="canadd">
                <h3 class="tit"><span>教育经历</span></h3>
                <div class="add-list">
                    <li>
                        <h3> <span class="add-name">传智专修学院-全栈工程师</span> <span class="gray edit" @click="educationDisplay='block'"><i class="fa fa-pencil" aria-hidden="true"></i> 编辑</span> </h3> <span class="date">2017年01月21日 - 至今</span>
                    </li>
                    <p class="add"><a href="javascript:;">添加教育经历</a></p>
                </div>
                <!-- edu form -->
                <div class="form-show" v-bind:style="{display:educationDisplay}">
                    <form action="" class="sui-form">
                        <div class="sui-row-fluid">
                            <div class="span6">
                                <div class="control-group">
                                    <label for="" class="control-label">院校名称</label>
                                    <div class="controls">
                                        <input type="text" id="company" class="input-large" placeholder="院校名称" name="company" />
                                    </div>
                                </div>
                                <div class="control-group input-daterange" data-toggle="datepicker">
                                    <label for="" class="control-label">起止时间</label>
                                    <div class="controls date">
                                        <input type="text" class="input-medium input-date" value="2016-01-01" />
                                        <span>-</span>
                                        <input type="text" class="input-medium input-date" />
                                    </div>
                                </div>
                            </div>
                            <div class="span6">
                                <div class="control-group">
                                    <label for="" class="control-label">所学专业</label>
                                    <div class="controls">
                                        <input type="text" id="job" class="input-large" placeholder="如：Java工程师" name="job" />
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label for="" class="control-label">学历</label>
                                    <div class="controls">
                                        <span class="sui-dropdown dropdown-bordered select"><span class="dropdown-inner"><a id="drop4" role="button" data-toggle="dropdown" href="#" class="dropdown-toggle"> <input value="hz" name="city" type="hidden" /><i class="caret"></i><span>专科</span></a>
                                        <ul id="menu4" role="menu" aria-labelledby="drop4" class="sui-dropdown-menu">
                                            <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:void(0);" value="bj">专科</a></li>
                                            <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:void(0);" value="sb">本科</a></li>
                                            <li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="javascript:void(0);" value="hz">硕士</a></li>
                                        </ul>
                                        </span> </span>
                                    </div>
                                </div>
                            </div>
                            <div style="clear:both"></div>
                            <div class="control-group">
                                <label for="" class="control-label">相关技术</label>
                                <div class="controls">
                                    <input type="text" placeholder="标签，如:php可使用逗号，分号； 来分隔" class="input-xfat input-xxlarge" id="tags" />
                                </div>
                            </div>
                            <div class="control-group">
                                <label for="" class="control-label">取得成就</label>
                                <div class="controls">
                                    <textarea rows="3" class="input-block-level" placeholder="在校期间做了什么工作，解决了什么问题，做了什么贡献？"></textarea>
                                </div>
                            </div>
                            <div class="control-group btns">
                                <button class="sui-btn btn-cancel" type="button" @click="educationDisplay='none'">取消</button>
                                <button class="sui-btn btn-save" type="button" @click="updateEducation">保存</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="sidebar right">
        <h3><span>简历完善度</span></h3>
        <div class="sui-progress progress-success">
            <div style="width: 30%;" class="bar">
                30%
            </div>
        </div>
    </div>
</div>
</template>
<script>
import '~/assets/css/page-sj-person-myfile.css'
import Auth from '@/utils/auth'
import userApi from '@/api/user'
export default {
    created() {
        userApi.findById(Auth.getUser().uid).then(resp => {
            this.user = resp.data.data
        })
    },
    data() {
        return {
            profileDisplay: 'none',
            skillDisplay: 'none',
            workDisplay: 'none',
            educationDisplay: 'none',
            user: {},
            pojo: {},
        }
    },
    methods: {
        updateProfile() {
            userApi.update(this.pojo, Auth.getUser().uid).then(resp => {
                this.$message({
                    message: resp.data.message,
                    type: (resp.data.flag?'success':'error')
                })
                if (resp.data.data.flag) {
                    this.profileDisplay = 'none'
                }
            })
        },
        updateWork() {
            this.workDisplay = 'none'
        },
        updateSkill() {
            this.skillDisplay = 'none'
        },
        updateEducation() {
            this.educationDisplay = 'none'
        },
    }
}
</script>

