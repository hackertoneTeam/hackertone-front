import style from './FooterLayout.module.css'
import {Link} from "react-router-dom";

const FooterLayout = () => {
  return (
    <>
      <footer className={style.footer}>
        <ul>
          <li className={style.active}>
            <Link to="/">
              <img src={process.env.PUBLIC_URL + "/images/icon_passport_active.svg"} alt="여권"/>
              <p>여권</p>
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={process.env.PUBLIC_URL + "/images/icon_diary.svg"} alt="일기"/>
              <p>일기</p>
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={process.env.PUBLIC_URL + "/images/icon_menu.svg"} alt="메뉴"/>
              <p>메뉴</p>
            </Link>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default FooterLayout