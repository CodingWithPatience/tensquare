import request from '@/utils/request'
const group_name = 'recruit'
const api_name = 'recruit'
export default {
  getList() {
    return request({
      url: `/${group_name}/${api_name}`,
      method: 'get'
    })
  },
  search(page, searchMap) {
    return request({
      url: `/${group_name}/${api_name}/search/${page}`,
      method: 'post',
      data: searchMap
    })
  },
  save(pojo) {
    return request({
      url: `/${group_name}/${api_name}`,
      method: 'post',
      data: pojo
    })
  },
  findById(id) {
    return request({
      url: `/${group_name}/${api_name}/${id}`,
      method: 'get'
    })
  },
  update(id, pojo) {
    if (id === null || id === '') {
      return this.save(pojo)
    }
    return request({
      url: `/${group_name}/${api_name}/${id}`,
      method: 'put',
      data: pojo
    })
  },
  deleteById(id) {
    return request({
      url: `/${group_name}/${api_name}/${id}`,
      method: 'delete'
    })
  },
  recommend() {
    return request({
      url: `/${group_name}/${api_name}/recommend`,
      method: 'get'
    })
  },
  newlist() {
    return request({
      url: `/${group_name}/${api_name}/newest`,
      method: 'get'
    })
  }
}
