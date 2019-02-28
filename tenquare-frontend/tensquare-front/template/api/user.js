import request from '@/utils/request'
const group_name = 'user'
const api_name = 'user'
export default {
    sendSMS(mobile) {
        return request({
            url: `${group_name}/${api_name}/sendsms/${mobile}`,
            method: 'post'
        })
    },
    register(user, code) {
        return request({
            url: `${group_name}/${api_name}/register/${code}`,
            method: 'post',
            data: user
        })
    },
    login(mobile, password) {
        return request({
            url: `${group_name}/${api_name}/login`,
            method: 'post',
            data: {
                mobile,
                password
            }
        })
    },
    update(user, id) {
        return request({
            url: `${group_name}/${api_name}/${id}`,
            method: 'put',
            data: user
        })
    },
    findById(id) {
        return request({
            url: `${group_name}/${api_name}/${id}`,
            method: 'get',
        })
    },
}