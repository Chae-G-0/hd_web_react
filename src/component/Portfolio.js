import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const PTF = [
    { id: 1, title: "서울시청" },
    { id: 2, title: "부산국제금융센터(BIFC)" },
    { id: 3, title: "부산 파크하얏트" },
    { id: 4, title: "송도 G타워" },
    { id: 5, title: "롯데월드몰" },
    { id: 6, title: "파라다이스시티호텔" },
    { id: 7, title: "명동 대신증권 신사옥" },
    { id: 8, title: "동대구복합환승센터" },
    { id: 9, title: "Metropol Istanbul" },
];

const Portfolio = () => {
    const LS = useRef(null);
    const RS = useRef(null);

    const [LSS, setLSS] = useState();
    const [RSS, setRSS] = useState();

    useEffect(() => {
        setLSS(LS.current);
        setRSS(RS.current);
    }, []);

    return (
        <section className="Portfolio csc">
            <div className="container">
                <div className="left">
                    <div className="slide">
                        <Slider fade={true} ref={LS} asNavFor={RS.current} arrows={false}>
                            {PTF.map((bd) => {
                                return (
                                    <figure key={bd.id}>
                                        <div className="box">
                                            <img src={process.env.PUBLIC_URL + "/assets/images/main_m0" + bd.id + ".jpg"} alt="" />
                                        </div>
                                        <div className="des">{bd.title}</div>
                                    </figure>
                                );
                            })}
                        </Slider>
                    </div>
                </div>
                <div className="right">
                    <h2>건물의 가치를 높이는 현대엘리베이터</h2>
                    <p>특별한 기술을 실현할수록 여러분의 삶의 무대도 특별해집니다.</p>
                    <div className="arrows">
                        <i className="xi-angle-left" onClick={() => LS.current.slickPrev()}></i>
                        <i className="xi-angle-right" onClick={() => LS.current.slickNext()}></i>
                    </div>
                    <div className="slide">
                        <Slider slidesToShow={5} className="right_slide" ref={RS} asNavFor={LS.current} arrows={false}>
                            {PTF.map((bd) => {
                                return (
                                    <figure  key={bd.id}>
                                        <div className="box">
                                            <img src={process.env.PUBLIC_URL + "/assets/images/main_m0" + bd.id + ".jpg"} alt="" />
                                        </div>
                                        <div className="des">{bd.title}</div>
                                    </figure>
                                );
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
