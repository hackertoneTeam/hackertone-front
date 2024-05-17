import { Link } from 'react-router-dom';
import style from './MainModal.module.css'
const MainModal = (props) => {
  const year = `${new Date(props.date).getFullYear()}`;
  const month = `${new Date(props.date).getDate() + 1}`;
  const day = `${new Date(props.date).getDay()}`;

  const changeShowFunc = () => {
    props.changeShowFunc(false);
  }

  return (
    <>
      <div className={`${props.show ? style.show : style.noShow} ${style.mainModal}`}>
        <img src={process.env.PUBLIC_URL + "/images/background_modal.png"} className={style.backgroundImage} alt="background"/>
        <img src={process.env.PUBLIC_URL + "/images/icon_visa.svg"} className={style.visaIcon} alt="visa"/>
        <div className={style.textWrap}>
          <p className={style.tripDate}>{`${year}년 ${month}월 ${day}일`}</p>
          <p className={style.tripName}>{props.name}</p>
        </div>
        <img src={process.env.PUBLIC_URL + "/images/modal_image_1.png"} className={style.modalImage1} alt="image1"/>
        <img src={process.env.PUBLIC_URL + "/images/modal_image_2.png"} className={style.modalImage2} alt="image2"/>
        <img src={process.env.PUBLIC_URL + "/images/modal_image_3.png"} className={style.modalImage3} alt="image3"/>
        <Link to="/timeline" className={style.modalButton}>열기</Link>
      </div>
      <div className={`${props.show ? style.show : style.noShow} ${style.blur}`} onClick={changeShowFunc}></div>
    </>
  )
}

export default MainModal