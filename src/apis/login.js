import Send from './Send.js'

export const kakaoLoginApi = (data) => {
  return Send({
    method: 'post',
    url: `/kakao/login`,
    data: data,
  })
}