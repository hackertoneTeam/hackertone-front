import FooterLayout from '../../commons/layouts/FooterLayout';
import style from './TimelinePage.module.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Link } from 'react-router-dom';

const share = () => {

};

const edit = () => {

};

const TimelinePage = () => {
  return (
    <>
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.backContainer}>
          <img src={process.env.PUBLIC_URL + "/images/icon_back.svg"} alt="<" className={style.backIcon} />
          <Link to="/" className={`${style.pretendard} ${style.back}`}>여권</Link>
        </div>
        <h1>후쿠오카 여행</h1>
        <div>
          <img src={process.env.PUBLIC_URL + "/images/icon_pen.svg"} alt="pen" onClick={edit} />
          <img className={style.correction} src={process.env.PUBLIC_URL + "/images/icon_share.svg"} alt="share" onClick={share} />
        </div>
      </div>
      <div className={style.dayHeader}>
        
      </div>
      <div className={style.wave} style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/wave.svg"})`}} />
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className={style.mapContainer}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
    </div>
    <div className={style.waveBottom} style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/wave_bottom.svg"})`}} />
    <div className={style.timelineContainer}>
      
    </div>
    <FooterLayout />
    </>
  )
}

export default TimelinePage;