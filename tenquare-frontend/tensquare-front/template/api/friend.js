import request from '@/utils/request'
const group_name = 'friends'
const api_name = 'friend'
export default {
    makeFriend(friendId, type) {
        return request({
            url: `${group_name}/${api_name}/like/${friendId}/${type}`,
            method: 'put'
        })
    },
    deleteFriend(friendId) {
        return request({
            url: `${group_name}/${api_name}/${friendId}`,
            method: 'delete'
        })
    }
}