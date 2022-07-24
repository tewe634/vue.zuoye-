import request from '@/utils/request'
// 图片
export const renMusic = (params) => request({
    url:'/personalized',
    params
})
// 最新音乐
export const newMusic = (params) => request({
  url:'/personalized/newsong',
  params
})
