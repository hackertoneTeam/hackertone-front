import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../views/main/MainPage";
import LoginPage from "../views/login/LoginPage";
import RedirectPage from "../views/login/RedirectPage";
import VisaRegisterPage from "../views/visaRegister/VisaRegisterPage";
const Routers = () => (
  <BrowserRouter>
    <Routes>
      {/* 메인 */}
      <Route path="/" element={<MainPage />}></Route>
      {/* 로그인 */}
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/auth/kakao/callback" element={<RedirectPage/>}></Route>
      {/* 비자 등록 페이지 */}
      <Route path="/visa/register" element={<VisaRegisterPage/>}></Route>
    </Routes>
  </BrowserRouter>
);

export default Routers;
