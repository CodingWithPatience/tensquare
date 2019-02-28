import request from '@/utils/request'
const group_name = 'qa'
const api_name = 'reply'
export default {
    save(reply) {
        return request({
            url: `${group_name}/${api_name}`,
            method: 'post',
            data: reply
        })
    },
	listByPid(pid, page) {
		return request({
            url: `${group_name}/${api_name}/problem/${pid}/${page}`,
            method: 'get',
		})
	},
}
