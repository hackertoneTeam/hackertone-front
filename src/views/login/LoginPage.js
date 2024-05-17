import {useRecoilValue} from "recoil";
import {isLoggedInState} from "../../states/LoginState";
import style from './LoginPage.module.css'
import FooterLayout from "../../commons/layouts/FooterLayout";

const LoginPage = () => {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_API_TOKEN;
  const REDIRECT_URI = "http://localhost:3000/auth/kakao/callback";
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const isLoggedIn = useRecoilValue(isLoggedInState);
  console.log(isLoggedIn)
  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <>
      <main className={style.loginMain}>
        <h1>로그인</h1>
        <div className={style.buttonWrap}>
        {isLoggedIn ?
          <button onClick={loginHandler}>
            <img src={process.env.PUBLIC_URL + "/images/icon_kakao.svg"} alt="kakao"/>
            <p>로그아웃</p>
          </button>:
          <button onClick={loginHandler}>
            <img src={process.env.PUBLIC_URL + "/images/icon_kakao.svg"} alt="kakao"/>
            <p>카카오 로그인</p>
          </button>}
        </div>
      </main>
      <FooterLayout />
    </>
  )
}

export default LoginPage