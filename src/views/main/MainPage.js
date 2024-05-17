import FooterLayout from "../../commons/layouts/FooterLayout";
import style from './MainPage.module.css'
import {visaGetApi} from "../../apis/visa";
import {useEffect, useState} from "react";

const MainPage = () => {
  const [visaList, setVisaList] = useState([]);

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
            {visaList.map((item) => { return(
              <>
                <li>
                  <div className={style.imgWrap}>
                    <img src={process.env.PUBLIC_URL + "/images/icon_visa.svg"} alt="여행증"/>
                  </div>
                  <div className={style.textWrap}>
                    <p>{item.trip_name}</p>
                    <p>여행</p>
                  </div>
                </li>
              </>
            )})}
          </ul>
        </div>
      </main>
      <FooterLayout/>
    </>
  )
}

export default MainPage;