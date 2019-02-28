import request from '@/utils/request'
const groupName = 'gathering'
const apiName = 'gathering'
export default {
  getList() {
    return request(
      {
        url: `/${groupName}/${apiName}`,
        methods: 'get'
      }
    )
  },
  search(page, searchMap) {
    return request(
      {
        url: `/${groupName}/${apiName}/search/${page}`,
        method: 'post',
        data: searchMap
      }
    )
  },
  save(entity) {
    return request(
      {
        url: `/${groupName}/${apiName}`,
        method: 'post',
        data: entity
      }
    )
  },
  findById(id) {
    return request(
      {
        url: `/${groupName}/${apiName}/${id}`,
        method: 'get'
      }
    )
  },
  update(id, entity) {
    if (id == null || id == '') {
      return this.save(entity)
    }
    return request(
      {
        url: `/${groupName}/${apiName}/${id}`,
        method: 'put',
        data: entity
      }
    )
  },
  delete(id) {
    return request(
      {
        url: `/${groupName}/${apiName}/${id}`,
        method: 'delete'
      }
    )
  }
}
