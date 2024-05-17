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
      <HeaderLayout />
      <main>
        <h1 className={style.title}>하이</h1>
        <Link to="/dd">Links</Link>
      </main>
      <FooterLayout />
    </>
  )
}

export default MainPage;