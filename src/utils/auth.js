/// 保存 token信息
//  拥挤就保存用  localStorage

//
const USER_KEY = 'hm - toutiao - m - user - 85 '

// 导出获取用户 信息
export const getUser = () => {
  return JSON.parse(window.localStorage.getItem(USER_KEY) || '{}')
}
// 设置用户信息 user是对象
export const setUser = (user) => {
  window.localStorage.setItem(USER_KEY, JSON.stringify(user))
}
// 删除用户信息
export const delUser = () => {
  window.localStorage.removeItem(USER_KEY)
}
