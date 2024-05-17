import HeaderLayout from "../../commons/layouts/HeaderLayout";
import FooterLayout from "../../commons/layouts/FooterLayout";
import style from './MainPage.module.css'
import {test} from "../../apis/test";
import {useNavigate} from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  const apiTest = () => {
    let data = {
      name: "박총명"
    }
    test(data).then(r => {
      navigate('/');
    }).catch((r) => {
      navigate('/');
      alert("오류가 발생하여습니다.문의하여 주십시오.");
      console.log("Register Post Error : " + r);
    });
  }


  return (
    <>
      <HeaderLayout />
      <main>
        <h1 className={style.title}>하이</h1>
        <button onClick={apiTest}></button>
      </main>
      <FooterLayout />
    </>
  )
}

export default MainPage;