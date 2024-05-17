const LoginPage = () => {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_API_TOKEN;
  const REDIRECT_URI = "http://localhost:3000/auth/kakao/callback";
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <>
      <button onClick={loginHandler}>로그인</button>
    </>
  )
}

export default LoginPage