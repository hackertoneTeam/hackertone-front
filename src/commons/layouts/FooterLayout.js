import style from './FooterLayout.module.css'
import {Link, useLocation} from "react-router-dom";

const FooterLayout = () => {
  const location = useLocation();
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
          <li className={location.pathname === '/visa/register' ? style.active : ""}>
            <Link to="/visa/register">
              <img src={process.env.PUBLIC_URL + "/images/icon_plus.svg"} className={style.icon_plus} alt="등록"/>
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