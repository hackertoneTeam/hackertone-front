import Send from './Send.js'

export const test = (data) => {
  return Send({
    method: 'post',
    url: `/api/auth/signup`,
    data: data,
  })
}