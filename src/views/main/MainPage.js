import HeaderLayout from "../../commons/layouts/HeaderLayout";
import FooterLayout from "../../commons/layouts/FooterLayout";
import style from './MainPage.module.css'

const MainPage = () => {
  return (
    <>
      <HeaderLayout />
      <main>
        <h1 className={style.title}>하이</h1>
      </main>
      <FooterLayout />
    </>
  )
}

export default MainPage;