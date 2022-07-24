import request from '@/utils/request'

export const hotList = (params) =>  request({
  url:'/search/hot',
  params
})
export const searchResult = (params) => request({
  url:'/cloudsearch',
  params
})