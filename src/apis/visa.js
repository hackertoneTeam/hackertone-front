import Send from './Send.js'

export const visaRegisterApi = (data) => {
  return Send({
    method: 'post',
    url: `/trip`,
    data: data,
  })
}

export const visaGetApi = () => {
  return Send({
    method: 'get',
    url: `/trips`
  })
}