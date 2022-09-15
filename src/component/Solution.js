import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const SOLUTION = [
    { id: 1, content: "블루투스 태깅", description: "H-Mobile Thru (현대 모바일 스루) 앱으로 엘리베이터를 제어할 수 있는 신개념 이동시스템입니다.", link: "/" },
    { id: 2, content: "울트라 UV 클리너", description: "모션인식센서를 활용하여, 손을 위아래로 움직이는 동작만으로 버튼인식이 가능하기 때문에, 박테리아와 바이러스로부터 자유롭습니다.", link: "/" },
    {
        id: 3,
        content: "모션 콜 버튼",
        description: "버튼 표면 접촉 없이, 홀을 통과하는 동작만으로 목적층을 등록하고 엘리베이터 호출이 가능합니다. 바이러스 전파 및 감염을 방지할 수 있어서 위생적입니다.",
        link: "/",
    },
    { id: 4, content: "터치리스 버튼", description: "H-Mobile Thru (현대 모바일 스루) 앱으로 엘리베이터를 제어할 수 있는 신개념 이동시스템입니다.", link: "/" },
    { id: 5, content: "터치리스 풋버튼", description: "H-Mobile Thru (현대 모바일 스루) 앱으로 엘리베이터를 제어할 수 있는 신개념 이동시스템입니다.", link: "/" },
    { id: 6, content: "헤파필터 냉온풍기", description: "H-Mobile Thru (현대 모바일 스루) 앱으로 엘리베이터를 제어할 수 있는 신개념 이동시스템입니다.", link: "/" },
    { id: 7, content: "음이온 공기청정기", description: "H-Mobile Thru (현대 모바일 스루) 앱으로 엘리베이터를 제어할 수 있는 신개념 이동시스템입니다.", link: "/" },
    { id: 8, content: "스마트 인디케이터", description: "H-Mobile Thru (현대 모바일 스루) 앱으로 엘리베이터를 제어할 수 있는 신개념 이동시스템입니다.", link: "/" },
    {
        id: 9,
        content: "항바이러스 핸드레일",
        description: "바이러스에 쉽게 노출되는 핸드레일에 항바이러스 인증 소재를 적용하여 세균을 99% 차단하고 바이러스 전염 및 전파를 효과적으로 예방합니다.",
        link: "/",
    },
];

const Solution = () => {
    const [slideNum, setSlideNum] = useState(0);
    const SLIDE = useRef(null);
    return (
        <section className="Solution csc">
            <h2>클린 무빙 솔루션</h2>
            <p>접촉 없이 편하게 이동합니다.</p>
            <div className="container">
                <Slider centerMode={true} arrows={false} centerPadding={"300px"} afterChange={(index) => setSlideNum(index)} ref={SLIDE} className={"solution_slide"}>
                    {SOLUTION.map((img, idx) => {
                        return (
                            <figure key={img.id} className={slideNum === idx ? "on" : ""}>
                                <img src={process.env.PUBLIC_URL + "/assets/images/main_s0" + img.id + ".jpg"} alt="" />
                            </figure>
                        );
                    })}
                </Slider>
                <div className="box">
                    <div className="content">
                        <div className="tit">{SOLUTION[slideNum].content}</div>
                        <p>{SOLUTION[slideNum].description}</p>
                        <a href={SOLUTION[slideNum].link} className="cbtn">
                            자세히 보기
                        </a>
                    </div>
                    <div className="num">
                        0{slideNum + 1} <span>/ 0{SOLUTION.lenght} </span>
                    </div>
                </div>
                <div className="arrows">
                    <i className="xi-arrow-left" onClick={() => SLIDE.current.slickPrev()}></i>
                    <i className="xi-arrow-right" onClick={() => SLIDE.current.slickNext()}></i>
                </div>
                <ul className="dots">
                    {SOLUTION.map((dot, idx) => (
                        <li key={dot.id} onClick={() => SLIDE.current.slickGoTo(idx)} className={slideNum === idx ? "on" : ""}>
                            {dot.id}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Solution;
