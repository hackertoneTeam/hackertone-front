import style from './FooterLayout.module.css'
import {Link, useLocation} from "react-router-dom";

const FooterLayout = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <footer className={style.footer}>
        <ul>
          <li className={location.pathname === '/main' ? style.active : ""}>
            <Link to="/main">
              {location.pathname === '/main' ?
                  <img src={process.env.PUBLIC_URL + "/images/icon_passport_active.svg"} alt="여권"/>:
                  <img src={process.env.PUBLIC_URL + "/images/icon_passport.svg"} alt="여권"/>
              }
              <p>여권</p>
            </Link>
          </li>
          <li className={location.pathname === '/timeline' ? style.active : ""}>
            <Link to="/timeline">
              {location.pathname === '/timeline' ?
                <img src={process.env.PUBLIC_URL + "/images/icon_diary_active.svg"} alt="일기"/>:
                <img src={process.env.PUBLIC_URL + "/images/icon_diary.svg"} alt="일기"/>
              }
              <p>일기</p>
            </Link>
          </li>
          <li className={location.pathname === '/' ? style.active : ""}>
            <Link to="/">
              {location.pathname === '/' ?
                <img src={process.env.PUBLIC_URL + "/images/icon_menu_active.svg"} alt="메뉴"/>:
                <img src={process.env.PUBLIC_URL + "/images/icon_menu.svg"} alt="메뉴"/>
              }
              <p>메뉴</p>
            </Link>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default FooterLayout