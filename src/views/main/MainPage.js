import FooterLayout from "../../commons/layouts/FooterLayout";
import style from './MainPage.module.css'
import {visaGetApi} from "../../apis/visa";
import {useEffect, useState} from "react";
import MainModal from "./MainModal";

const MainPage = () => {
  const [visaList, setVisaList] = useState([]);
  const [clickIndex, setClickIndex] = useState(0);
  const [modalShow,setModalShow] = useState(false);

  useEffect(() => {
    getList();
  },[])
  const getList = () => {
    visaGetApi().then((r) => {
      setVisaList(r.data.list);
    }).catch((r) => {
      console.error(r);
    })
  }
    const changeShow = (value) => {
      setModalShow(value);
    }
  return (
    <>
      <main className={style.mainContainer}>
        <div className={style.mainHeader}>
          <span className={style.line}></span>
          <div>
            <p>사증</p>
            <p>VISAS</p>
          </div>
          <span className={style.line}></span>
        </div>
        <div className={style.visaList}>
          <ul>
            {visaList.map((item,idx) => { return(
              <li onClick={() => {
                setClickIndex(idx)
                setModalShow(true)
              }} key={idx}>
                <div className={style.imgWrap}>
                  <img src={process.env.PUBLIC_URL + "/images/icon_visa.svg"} alt="여행증"/>
                </div>
                <div className={style.textWrap}>
                  <p>{item.trip_name}</p>
                  <p>여행</p>
                </div>
              </li>
            )})}
          </ul>
        </div>
        <MainModal show={modalShow} changeShowFunc={changeShow} date={visaList[clickIndex]?.trip_to} name={visaList[clickIndex]?.trip_name}/>
      </main>
      <FooterLayout/>
    </>
  )
}

export default MainPage;