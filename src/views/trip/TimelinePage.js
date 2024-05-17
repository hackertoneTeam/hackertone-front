import FooterLayout from '../../commons/layouts/FooterLayout';
import style from './TimelinePage.module.css';
import { MapContainer, TileLayer, Marker, useMap, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

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

let data = {
  "name": "친구들과 여행",
  "place": "후쿠오카",
  "t_from": "2024-05-02T00:00:00+00:00",
  "t_to": "2024-05-08T00:00:00+00:00",
  "list": [
    {
      "d_date": "2024-01-01",
      "trip_id": 1,
      "user_id": 4,
      "photos": [
        "https://cdn.hankyung.com/photo/202310/AA.34726185.1.jpg",
        "https://pds.joongang.co.kr/news/component/joongang_sunday/202205/26/23ef9619-fab9-429e-bc19-0422b4e0ad2a.jpg",
        "https://m.segye.com/content/image/2021/01/07/20210107516500.jpg"
      ],
      "coordis": [
        [
          37.549186395087, 127.07505567644
        ]
      ],
      "diary": "아침 햇살이 부드럽게 창문으로 스며드는 순간, 오늘은 지금껏 본 적 없는 새로운 하루가 될 것이라는 예감을 했다. 좌석에 앉아 비빔밥 한 그릇을 앞에 두고, 산과 바다와 들판이 소리 없이 어우러진 한 끼의 풍경을 맛보았다. 각각의 재료들이 어우러지며 입안에서 춤추는 동안, 나는 존재 자체가 감사함으로 물들었다.\n\n정오가 지나, 햇살은 더욱 따가워지고, 나의 발걸음은 어느새 큰 무대 앞에 멈추어섰다. 사람들의 열정과 함성 속에서, 음악은 우리의 영혼을 꿰뚫으며 시간을 잊게 만들었다. 각기 다른 삶을 살아온 사람들이 함께 모여 리듬에 몸을 맡기는 순간, 우리는 모두 하나가 되어 있었다. 그 순간, 세상을 더 사랑하게 만드는 마법 같은 힘을 느꼈다.\n\n밤이 찾아오고, 도시의 불빛들은 어둠 속에서 고요히 반짝이기 시작했다. 그 위로 화려한 불꽃들이 하늘을 가로지르며 눈부신 순간들을 선사했다. 빛의 향연 속에 내 마음도 함께 불타오르고 있었다. 한강 위에서 피어오른 불꽃들은 마치 우리의 여행이 영원히 기억될 아름다운 순간들을 기록하는 것 같았다.\n\n이 하루 동안 만난 모든 순간들이 모여 한 폭의 그림이 되었다. 내일은 어떤 새로운 이야기가 나를 기다리고 있을지, 기대와 설렘으로 가득한 마음을 안고 잠자리에 들었다."
    },
    {
      "d_date": "2024-01-02",
      "trip_id": 1,
      "user_id": 4,
      "photos": [
        "https://cdn.hankyung.com/photo/202310/AA.34726185.1.jpg",
      ],
      "coordis": [
        [
          37.540000000000, 127.07505567644
        ]
      ],
      "diary": "아침 햇살이 부드럽게 창문으로 스며드는 순간, 오늘은 지금껏 본 적 없는 새로운 하루가 될 것이라는 예감을 했다. 좌석에 앉아 비빔밥 한 그릇을 앞에 두고, 산과 바다와 들판이 소리 없이 어우러진 한 끼의 풍경을 맛보았다. 각각의 재료들이 어우러지며 입안에서 춤추는 동안, 나는 존재 자체가 감사함으로 물들었다.\n\n정오가 지나, 햇살은 더욱 따가워지고, 나의 발걸음은 어느새 큰 무대 앞에 멈추어섰다. 사람들의 열정과 함성 속에서, 음악은 우리의 영혼을 꿰뚫으며 시간을 잊게 만들었다. 각기 다른 삶을 살아온 사람들이 함께 모여 리듬에 몸을 맡기는 순간, 우리는 모두 하나가 되어 있었다. 그 순간, 세상을 더 사랑하게 만드는 마법 같은 힘을 느꼈다.\n\n밤이 찾아오고, 도시의 불빛들은 어둠 속에서 고요히 반짝이기 시작했다. 그 위로 화려한 불꽃들이 하늘을 가로지르며 눈부신 순간들을 선사했다. 빛의 향연 속에 내 마음도 함께 불타오르고 있었다. 한강 위에서 피어오른 불꽃들은 마치 우리의 여행이 영원히 기억될 아름다운 순간들을 기록하는 것 같았다.\n\n이 하루 동안 만난 모든 순간들이 모여 한 폭의 그림이 되었다. 내일은 어떤 새로운 이야기가 나를 기다리고 있을지, 기대와 설렘으로 가득한 마음을 안고 잠자리에 들었다."
    }
  ]
};

const share = () => {

};

const edit = () => {

};

const Markers = () => {
  let line = [];
  const map = useMap();
  map.setView(data.list[0].coordis[0], 13);
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
  for (let i = 0; i < photos.length; i++) {
    result.push((
      <div style={{backgroundImage: `url(${photos[i]})`}} className={`${style.image} ${style[classes[photos.length - 1][i]]}`} key={i}></div>
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
          <Images photos={data.list[e].photos} />
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
                  <h3>{data.list.length}</h3>
                </div>
                {result}
              </div>
            </div>
          </>);
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