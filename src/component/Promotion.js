import { useRef, useState } from "react";
import YouTube from "react-youtube";

const YURL = [
    { id: 1, url: "raw3Nu0_mBQ", title: "IT Technology", des: "IT 기술이 창조하는 승강기 스마트 시스템" },
    { id: 2, url: "8g200ZVGTX8", title: "Green Technology", des: "지구환경을 생각하는 녹색기술" },
];

const Promotion = () => {
    const MOVIE = useRef();

    const [url, setUrl] = useState("raw3Nu0_mBQ");
    const [tit, setTit] = useState(1)
    const [on, setOn] = useState(false);
    const opts = {
        height: "100%",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
            loop: 1,
            controls: 0,
            showinfo: 0,
            mute: 1,
            //   playlist: "raw3Nu0_mBQ"
        },
    };

    return (
        <section className="Promotion csc">
            <h2>홍보영상</h2>
            <p>건물 특성에 맞는 다양한 제품으로 고객의 요구를 충족시켜드립니다.</p>
            <div className="container">
                <div className="movie">
                    <YouTube videoId={url} opts={opts} ref={MOVIE} className="u" />;
                    <div className="movie_tit">
                        {
                            YURL[tit].title
                        }
                    </div>
                </div>

                <ul className="des">
                        {YURL.map((you, idx) => {
                            return (
                                <li key={you.id} onClick={()=> {
                                    setUrl(you.url);
                                    setTit(idx)
                                    }} className={tit === idx ? 'on' : ''}>
                                    <div className="tit">{you.title}</div>
                                    <p>{you.des}</p>
                                </li>
                            );
                        })}
                </ul>
            </div>
        </section>
    );
};

export default Promotion;
