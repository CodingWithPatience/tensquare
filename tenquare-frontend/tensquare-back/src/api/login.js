import request from '@/utils/request'
const group_name = 'user'
const api_name = 'admin'

export function login(loginName, password) {
  return request({
    url: `/${group_name}/${api_name}/login`,
    method: 'post',
    data: {
      loginName,
      password
    }
  })
}

export function getInfo() {
  return request({
    url: `/${group_name}/${api_name}/info`,
    method: 'get',
  })
}

export function logout() {
  return request({
    url: `/${group_name}/${api_name}/logout`,
    method: 'get'
  })
}
