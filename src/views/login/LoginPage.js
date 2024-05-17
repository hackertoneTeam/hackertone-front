import {useRecoilValue} from "recoil";
import {isLoggedInState} from "../../states/LoginState";

const LoginPage = () => {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_API_TOKEN;
  const REDIRECT_URI = "http://localhost:3000/auth/kakao/callback";
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <>
      {isLoggedIn ?
      <button onClick={loginHandler}>로그인</button>:
      <button onClick={loginHandler}>로그아웃</button>
      }
    </>
  )
}

export default LoginPage