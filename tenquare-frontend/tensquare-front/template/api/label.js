import request from '@/utils/request'
const group_name = 'base'
const api_name = 'label'
export default {
    topList() {
        return request({
            url: `${group_name}/${api_name}/toplist`,
            method: 'get'
        })
    },
    allList() {
        return request({
            url: `${group_name}/${api_name}`,
            method: 'get'
        })
    }
}