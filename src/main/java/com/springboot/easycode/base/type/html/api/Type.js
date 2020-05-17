<!-- (Type)页面
  @author hyhong
  @since 2020-05-17 16:15:06
  -->
  

import instance from '../../config'
const service = 'yunl-base-service'
const module = `${service}/base/type`
// 分页列表
export const getList = param => instance.post(`${module}/pageList`, param)
// 保存
export const save = param => instance.post(`${module}/save`, param)
// 更新
export const update = param => instance.post(`${module}/update`, param)
// 删除
export const del = param => instance.post(`${module}/delByIds`, param)
// 下拉
export const choose = param => instance.post(`${module}/getTypeChoose`, param)