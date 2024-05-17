import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../views/main/MainPage";
import LoginPage from "../views/login/LoginPage";
import RedirectPage from "../views/login/RedirectPage";
const Routers = () => (
  <BrowserRouter>
    <Routes>
      {/* 메인 */}
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/auth/kakao/callback" element={<RedirectPage/>}></Route>
    </Routes>
  </BrowserRouter>
);

export default Routers;
