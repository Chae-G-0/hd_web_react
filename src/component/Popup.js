import React, { useState } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";

const Pop = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    trasform: translate(-50%, -50%);
    background: #fff;
    z-index: 99999;

    &.on {
        display: none;
    }
    & buttoon {
        floatL right;
    }
`;
const Popup = () => {
    const [TG, setTG] = useState();
    const [cookie, setCookie] = useCookies();

    let now = new Date();
    let after = new Date();

    return (
        <Pop className={cookie.pop && "on"}>
            <div>
                <img src={process.env.PUBLIC_URL + "/assets/images/main_news02.jpg"} alt="" />
            </div>
            <div className="bottom">
                <input
                    type="checkbox"
                    onChange={() => {
                        after.setMinutes(now.getMinutes() + 1);
                        setCookie("pop", "pop", { path: "/", expires: after });
                    }}
                ></input>
                오늘 하루 열지 않기
                <button onClick={() => setTG(true)}>close</button>
            </div>
        </Pop>
    );
};

export default Popup;
