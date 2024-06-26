import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../views/main/MainPage";
import LoginPage from "../views/login/LoginPage";
import RedirectPage from "../views/login/RedirectPage";
import VisaRegisterPage from "../views/visaRegister/VisaRegisterPage";
import TimelinePage from "../views/trip/TimelinePage";
import ImageRegisterPage from "../views/imageRegister/ImageRegisterPage";
const Routers = () => (
  <BrowserRouter>
    <Routes>
      {/* 메인 (visa page) */}
      <Route path="/main" element={<MainPage />}></Route>
      {/* 로그인 */}
      <Route path="/" element={<LoginPage/>}></Route>
      <Route path="/auth/kakao/callback" element={<RedirectPage/>}></Route>
      {/* 비자 등록 페이지 */}
      <Route path="/visa/register" element={<VisaRegisterPage/>}></Route>
      <Route path="/timeline" element={<TimelinePage/>}></Route>
      <Route path="/image/upload" element={<ImageRegisterPage/>}></Route>
    </Routes>
  </BrowserRouter>
);

export default Routers;
