import { useState } from "react";

const TopBanner = () => {
    const [TB, setTB] = useState('');
    return (
        <div className={"TopBanner " + TB}>
            <div className="inner">
                <h2>
                    현대엘리베이터 스마트 테크놀로지 체험 <span>Green Technology</span>
                </h2>
                <p>최고의 기술과 서비스로 편리하고 풍요로운 세상을 만들어갑니다.</p>
                <i className="xi-close" onClick={() => setTB("on")}></i>
            </div>
        </div>
    );
};

export default TopBanner;