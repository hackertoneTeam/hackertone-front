import FooterLayout from '../../commons/layouts/FooterLayout';
import style from './TimelinePage.module.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const TimelinePage = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <img src={process.env.PUBLIC_URL + "/images/icon_pen.svg"} alt="pen" />
        <span>후쿠오카 여행</span>
        <img className={style.correction} src={process.env.PUBLIC_URL + "/images/icon_share.svg"} alt="share" />
      </div>
      <div className={style.wave} style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/wave.svg"})`}} />
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className={style.mapContainer}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
    </div>
  )
}

export default TimelinePage;