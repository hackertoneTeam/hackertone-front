import HeaderLayout from "../../commons/layouts/HeaderLayout";
import FooterLayout from "../../commons/layouts/FooterLayout";
import style from './MainPage.module.css'
import {Link} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {isLoggedInState} from "../../states/LoginState";

const MainPage = () => {
  const isDark = useRecoilValue(isLoggedInState);
  console.log(isDark);
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
            <li>
              <div className={style.imgWrap}>
                <img src={process.env.PUBLIC_URL + "/images/icon_visa.svg"} alt="여행증"/>
              </div>
              <div className={style.textWrap}>
                <p>스리자야야야와</p>
                <p>여행</p>
              </div>
            </li>
            <li>
              <div className={style.imgWrap}>
                <img src={process.env.PUBLIC_URL + "/images/icon_visa.svg"} alt="여행증"/>
              </div>
              <div className={style.textWrap}>
                <p>훗카이도</p>
                <p>여행</p>
              </div>
            </li>
            <li>
              <div className={style.imgWrap}>
                <img src={process.env.PUBLIC_URL + "/images/icon_visa.svg"} alt="여행증"/>
              </div>
              <div className={style.textWrap}>
                <p>후쿠오카</p>
                <p>여행</p>
              </div>
            </li>
            <li>
              <div className={style.imgWrap}>
                <img src={process.env.PUBLIC_URL + "/images/icon_visa.svg"} alt="여행증"/>
              </div>
              <div className={style.textWrap}>
                <p>세부</p>
                <p>여행</p>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <FooterLayout/>
    </>
  )
}

export default MainPage;