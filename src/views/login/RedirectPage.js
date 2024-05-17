import {useEffect, useState} from "react";
import {useSetRecoilState} from "recoil";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {kakaoLoginApi} from "../../apis/login";
import {isLoggedInState} from "../../states/LoginState";

const RedirectPage = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  const [didMount, setDidMount] = useState(false);
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const navigate = useNavigate()

  useEffect(() => {
    setDidMount(true)
  }, [])

  // 백엔드에서 access token 가져온후
  // local storage, recoil 로그인 정보 저장
  const getAccessToken = (localToken) => {
    let data = {
      access_token: localToken,
    }
    kakaoLoginApi(data).then((r) => {
      console.log(r);
      localStorage.setItem("token", r.data.access_token);
      setIsLoggedIn(true);
      navigate('/main');
    }).catch((r) => {
      console.error(r);
    })

    return { localToken };
  };

  // kakao에서 로그인 후 token 받아서 백엔드에 전달
  const kakaoLoginHandler = () => {
    axios.post(process.env.REACT_APP_KAKAO_TOKEN_URI ,
      {
        grant_type : "authorization_code",
        client_id : process.env.REACT_APP_KAKAO_API_TOKEN,
        redirect_uri : process.env.REACT_APP_KAKAO_REDIRECT_URI,
        code: code,
      },
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        }
      }
      ).then((result) => {
        getAccessToken(result.data.access_token)
    }).catch((r) => {
      alert("에러 발생");
      console.error(r)
    })
  }

  useEffect(() => {
    if(didMount) {
      kakaoLoginHandler();
    }
  }, [didMount]);

  return (
    <>로그인 중 입니다.</>
  )
}

export default RedirectPage