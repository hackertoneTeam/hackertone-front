import style from './ImageRegisterPage.module.css'
import {getImageUriApi} from "../../apis/trip";
import {useForm} from "react-hook-form";
import {useState} from "react";
import axios from "axios";
import exifr from 'exifr';

const ImageRegisterPage = () => {
  const { register, handleSubmit } = useForm();
  const imageUploadHandler = (e) => {
    let formattedData = {
      filename : e.target.files[0].name,
    }
    getImageUriApi(formattedData).then((r) => {
      getImageMeta(e).then(r => console.log(r));
      // s3UploadHandler(e,r.data.upload_url);
    }).catch((r) => {
      console.error(r);
    })
  }
  const s3UploadHandler = (e, uploadUrl) => {
    const formData = new FormData();
    const uploadFile = e.target.files[0]
    formData.append('file', uploadFile)// key, value
    console.log(uploadUrl)
    axios.post(uploadUrl ,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      }
    ).then((result) => {
      console.log(result)
    }).catch((r) => {
      alert("에러 발생");
      console.error(r)
    })
  }

  const getImageMeta = async (e) => {
    const uploadFile = e.target.files?.[0];
    console.log(uploadFile);
    const originalMetadata = await exifr.parse(uploadFile);
    const gpsMetadata = await exifr.gps(uploadFile);
    console.log('Metadata from Original File:', originalMetadata);
    console.log('Metadata from gps File:', gpsMetadata);
  }

  const onSubmit = (data) => {
    console.log(data);
    imageUploadHandler(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="file" onChange={(e) => imageUploadHandler(e)}/>
        <input type="submit" value="제출"/>
      </form>
    </>
  )
}

export default ImageRegisterPage