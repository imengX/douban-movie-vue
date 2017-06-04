// 从豆瓣api接口获取数据
import axios from 'axios'

// 正在热映
export const hotMovie = (count, start) => {
  return new Promise((resolve, reject) => {
    axios.get(`/v2/movie/in_theaters?count=${count}&start=${start}`).then(response => {
      resolve(response.data)
    })
  })
}

// 即将上映
export const commingSoon = (count, start) => {
  return new Promise((resolve, reject) => {
    axios.get(`/v2/movie/coming_soon?count=${count}&start=${start}`).then(response => {
      resolve(response.data)
    })
  })
}

// Top250
export const top250 = (count, start) => {
  return new Promise((resolve, reject) => {
    axios.get(`/v2/movie/top250?count=${count}&start=${start}`).then(response => {
      resolve(response.data)
    })
  })
}

// 电影条目信息
export const subject = (id) => {
  return new Promise((resolve, reject) => {
    axios.get(`/v2/movie/subject/${id}`).then(response => {
      resolve(response.data)
    })
  })
}
