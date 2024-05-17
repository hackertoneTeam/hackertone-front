import {atom} from "recoil";

export const userState = atom({
  key: "user",
  default: { username: "", email: "" },
});

export const isLoggedInState = atom({
  key: "isLoggedIn",
  default: localStorage.getItem("token") ? true : false,
});

export const logout = async () => {
    // 로컬 스토리지에서 토큰 제거
    localStorage.removeItem("token");
};