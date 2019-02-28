import request from '@/utils/request'
const group_name = 'qa'
const api_name = 'problem'
export default {
    newList(labelId, page) {
        return request({
            url: `${group_name}/${api_name}/newest/${labelId}/${page}`,
            method: 'get'
        })
    },
    hotList(labelId, page) {
        return request({
            url: `${group_name}/${api_name}/hot/${labelId}/${page}`,
            method: 'get'
        })
    },
    waitList(labelId, page) {
        return request({
            url: `${group_name}/${api_name}/wait/${labelId}/${page}`,
            method: 'get'
        })
    },
    findById(problemId) {
        return request({
            url: `${group_name}/${api_name}/${problemId}`,
            method: 'get'
        })
    },
    save(problem) {
        return request({
            url: `${group_name}/${api_name}`,
            method: 'post',
            data: problem
        })
    }
}