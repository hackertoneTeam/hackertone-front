import Send from './Send.js'

export const getImageUriApi = (data) => {
  return Send({
    method: 'post',
    url: `/image/upload/url`,
    data: data,
  })
}

export const uploadImage = (data) => {
  return Send({
    method: 'post',
    url: `/trip/upload/photos`,
    data: data,
  })
}