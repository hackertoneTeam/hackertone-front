import style from './ImageRegisterPage.module.css'
import {getImageUriApi, uploadImage} from "../../apis/trip";
import {useForm} from "react-hook-form";
import {useState} from "react";
import axios from "axios";
import exifr from 'exifr';
import {useLocation, useParams} from "react-router-dom";
import FooterLayout from "../../commons/layouts/FooterLayout";


const ImageRegisterPage = () => {
  const { register, handleSubmit } = useForm();
  const [longitude , setLongitude ] = useState("");
  const [latitude , setLatitude ] = useState("");
  const [uploadPhotoList, setUploadPhotoList] = useState([]);
  const { tripId } = useParams();

  // image change 감지
  const imageUploadHandler = (e) => {
    let formattedData = {
      filename : e.target.files[0].name,
    }
    getImageUriApi(formattedData).then((r) => {
      getImageMeta(e);
      s3UploadHandler(e,r.data.upload_url);
      let data = {
        download_url: r.data.download_url,
        longitude : longitude,
        latitude : latitude,
        created_at : e.target.files[0].lastModifiedDate
      }
      setUploadPhotoList([
        ...uploadPhotoList,
        data,
      ]);
    }).catch((r) => {
      console.error(r);
    })
  }
  // s3에 이미지 업로드
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

  // image meta data 가져오기
  const getImageMeta = (e) => {
    const uploadFile = e.target.files[0];
    const originalMetadata = exifr.parse(uploadFile);
    console.log(uploadFile)
    originalMetadata.then((r) => {
      console.log(r);
      if(r === undefined) {
        alert('사용할 수 없는 이미지 입니다.')
      } else {
        setLongitude(r.longitude);
        setLatitude(r.latitude);
      }
    }).catch((r) => {
      console.error(r)
    })
    console.log('Metadata from Original File:', originalMetadata);
    console.log('Uploaded File:', uploadFile);
  }

  // trip으로 추가
  const submitTrip =() => {
    let data = {
      trip_id: tripId,
      photos: uploadPhotoList
    }
    uploadImage(data).then((r) => {
      console.log(r)
    }).catch((r) => {
      console.error(r);
    })
  }

  // submit 작업
  const onSubmit = (data) => {
    console.log(data);
    imageUploadHandler(data);
    submitTrip();
  }

  return (
    <>
      <main className={style.imageRegisterMain}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>추억 올리기</h1>
          <div className={style.fileContainer}>
            <label htmlFor="file1">+</label>
            <label htmlFor="file2">+</label>
            <label htmlFor="file3">+</label>
            <label htmlFor="file4">+</label>
            <label htmlFor="file5">+</label>
            <label htmlFor="file6">+</label>
            <input type="file" id="file1" onChange={(e) => imageUploadHandler(e,0)}/>
            <input type="file" id="file2" onChange={(e) => imageUploadHandler(e,1)}/>
            <input type="file" id="file3" onChange={(e) => imageUploadHandler(e,2)}/>
            <input type="file" id="file4" onChange={(e) => imageUploadHandler(e,3)}/>
            <input type="file" id="file5" onChange={(e) => imageUploadHandler(e,4)}/>
            <input type="file" id="file6" onChange={(e) => imageUploadHandler(e,5)}/>
            <input type="file" id="file7" onChange={(e) => imageUploadHandler(e,6)}/>
            <input type="file" id="file8" onChange={(e) => imageUploadHandler(e,7)}/>
            <input type="file" id="file9" onChange={(e) => imageUploadHandler(e,8)}/>
            <input type="file" id="file10" onChange={(e) => imageUploadHandler(e,9)}/>
          </div>
          <input type="submit" className={style.button} value="제출"/>
        </form>
      </main>
      <FooterLayout />
    </>
  )
}

export default ImageRegisterPage