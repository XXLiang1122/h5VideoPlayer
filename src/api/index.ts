import axios from 'axios'
import { VideoInfo, CommonRes } from '../types/video'

export const getAllVideo = (page: number = 1): Promise<CommonRes<VideoInfo>> => {
  return axios.get(`https://mediachain.info/api/resource/list?page=${page}`)
  .then(res => {
    return res.data
  })
}

export const searchVideo = (page: number = 1, name: string): Promise<VideoInfo[]> => {
  return axios.get(`https://mediachain.info/api/search?name=${name}&actors&producer&year&page=${page}`)
  .then(res => {
    return res.data
  })
}

export const getVideoDetail = (id: string): Promise<CommonRes<VideoInfo>> => {
  return axios.get(`https://mediachain.info/api/detail?ids=${id}`)
  .then(res => {
    return res.data
  })
}