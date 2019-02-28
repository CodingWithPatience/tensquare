import request from '@/utils/request'
const group_name = 'spit'
const api_name = 'spit'
export default {
    listAll() {
        return request({
            url: `/${group_name}/${api_name}`,
            method: 'get',
        })
    },
    search(page, searchMap) {
        return request({
            url: `/${group_name}/${api_name}/search/${page}`,
            method: 'post',
            data: searchMap 
        })
    },
    findById(id) {
        return request({
            url: `/${group_name}/${api_name}/${id}`,
            method: 'get'
        })
    },
    commentList(id, page) {
        return request({
            url: `/${group_name}/${api_name}/comment/${id}/${page}`,
            method: 'get'
        })
    },
    thumbUp(id, userId) {
        return request({
            url: `/${group_name}/${api_name}/thumbUp/${id}/${userId}`,
            method: 'put'
        })
    },
    save(spit) {
        return request({
            url: `/${group_name}/${api_name}`,
            method: 'post',
            data: spit
        })
    }
}