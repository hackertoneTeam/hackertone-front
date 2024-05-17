import FooterLayout from '../../commons/layouts/FooterLayout';
import style from './TimelinePage.module.css';
import { getTripData } from '../../apis/trip';
import { MapContainer, TileLayer, Marker, useMap, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

let ping = L.icon({
  iconUrl: process.env.PUBLIC_URL + "/images/pin_icon.png",
  shadowUrl: process.env.PUBLIC_URL + "/images/pin_shadow.png",

  iconSize:     [43, 54], // size of the icon
  shadowSize:   [74, 59], // size of the shadow
  iconAnchor:   [21, 54], // point of the icon which will correspond to marker's location
  shadowAnchor: [14, 43],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

let smol = L.icon({
  iconUrl: process.env.PUBLIC_URL + "/images/pin_smol.png",

  iconSize:     [23, 29], // size of the icon
  iconAnchor:   [11, 29], // point of the icon which will correspond to marker's location
});

let data = {}

const getData = () => {
  getTripData(1).then(r => {
    data = r.data;
  }).catch(r => {
    console.error(r);
  })
}

const share = () => {

};

const edit = () => {

};

const Markers = () => {
  let line = [];
  const map = useMap();
  if(data.list) {
    map.setView(data.list[0].coordis[0], 13);
  }
  let result = [];
  for (let e in data.list) {
    result.push((
      <Marker position={data.list[e].coordis[0]} icon={e > 0 ? smol : ping} key={e} />
    ));
    line.push(data.list[e].coordis[0]);
  }
  let options = { color: '#FF6C89' };
  let patterns = [10, 10];
  result.push((
    <Polyline positions={line} pathOptions={options} dashArray={patterns} key={-1} />
  ));
  return result;
};

const Images = (photos) => {
  photos = photos.photos;
  let result = [];
  const classes = [['image1'], ['image2_1', 'image2_2'], ['image3_1', 'image3_2', 'image3_3'], ['image4_1', 'image4_2', 'image4_3', 'image4_4']];
  let length = photos.length < 4 ? photos.length : 4;
  for (let i = 0; i < length; i++) {
    result.push((
      <div style={{backgroundImage: `url(${photos[i]})`}} className={`${style.image} ${style[classes[length - 1][i]]}`} key={i}></div>
    ));
  }
  return result;
};

let isDragging = false;

const DraggableMenu = () => {
  let div = useRef(null);
  let [location, setLocation] = useState(window.innerHeight / 100 * 88 - 20);

  const drag = (e) => {
    isDragging = true;
  };

  const dragging = (e) => {
    if (!isDragging) return;
    let loc = e.touches[0].clientY;
    setLocation(loc);
  };

  const dragEnd = (e) => {
    if (!isDragging) return;
    isDragging = false;
    let loc = e.changedTouches[0].clientY;
    if (loc > window.innerHeight / 4 * 3) {
      setLocation(window.innerHeight / 100 * 88 - 20);
      div.current.style.paddingBottom = '10vh';
    } else if (loc < window.innerHeight / 5 * 2) {
      setLocation(window.innerHeight / 100 * 18);
    } else {
      setLocation(window.innerHeight / 2);
      div.current.style.paddingBottom = `calc(10vh + ${window.innerHeight / 2 - window.innerHeight / 100 * 18}px)`;
    }
  };

  let result = [];
  for (let e in data.list) {
    result.push((
      <div className={style.row} key={e}>
        <div className={style.dots}></div>
        <div className={style.contents}>
          <div className={`${style.row} ${style.flexStart}`}>
            <h1>{data.list[e].coordis[0][0].toFixed(5)}, {data.list[e].coordis[0][1].toFixed(5)}</h1>
          </div>
          <Images photos={data.list[e]?.photos} />
          <div className={`${style.diary} ${style.pretendard}`}>
            <p>{data.list[e].diary}</p>
          </div>
        </div>
      </div>
    ))
  }

  return (<>
            <div className={style.timelineContainer} style={{top: `${location}px`}}>
              <div onTouchStart={drag} onTouchMove={dragging} onTouchCancel={dragEnd} onTouchEnd={dragEnd} className={style.draggable}>
                <div className={style.waveBottom} style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/wave_bottom.svg"})`}} />
                <div className={style.upContainer}>
                  <img className={style.up} src={process.env.PUBLIC_URL + "/images/icon_line.svg"} alt="Up" />
                </div>
              </div>
              <div className={style.timeline} ref={div}>
                <div className={`${style.row} ${style.flexStart}`}>
                  <h1>타임라인</h1>
                  <h3>{}</h3>
                </div>
                {result}
              </div>
            </div>
          </>);
};

const TimelinePage = () => {
  useEffect(() => {
    getData();
  },[])
  return (
    <>
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.backContainer}>
          <img src={process.env.PUBLIC_URL + "/images/icon_back.svg"} alt="<" className={style.backIcon} />
          <Link to="/main" className={`${style.pretendard} ${style.back}`}>여권</Link>
        </div>
        <h1>{data.name}</h1>
        <div>
          <img src={process.env.PUBLIC_URL + "/images/icon_pen.svg"} alt="pen" onClick={edit} />
          <img className={style.correction} src={process.env.PUBLIC_URL + "/images/icon_share.svg"} alt="share" onClick={share} />
        </div>
      </div>
      <div className={style.dayHeader}>
        
      </div>
      <div className={style.wave} style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/wave.svg"})`}} />
        <MapContainer scrollWheelZoom={true} center={[37.549186395087, 127.07505567644]} zoom={13} className={style.mapContainer}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Markers />
        </MapContainer>
        <DraggableMenu />
      </div>
      <FooterLayout />
    </>
  )
}

export default TimelinePage;