import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

// const style = {
//     color: '#f00'
// }

// const Totop = () => {
//   return (
//     <div style={style}>Totop</div>
//   )
// }

const Btn = styled.div`
    position: fixed;
    bottom: 100px;
    right: 100px;
    color: #fff;
    background: #008850;
    font-size: 30px;
    padding: 10px;
    border-radius: 50%;
    opacity: 0;
    visibility: hidden:
    cursor: pointer;
    &:hover {
        color: #f00;
    }

    &.on {
        background: #ff0;
    }
    ${(props) => {
        if (props.on) {
            return `
                visibility: visible:
                opacity: 1;
                background: #000;
            `;
        }
    }}
`;

const Totop = () => {
    const [scrollY, setScrollY] = useState(300);
    const toptopHandle = () => {
        gsap.to(window, { duration: 0.5, scrollTo: 0 });
    };

    const scrollEvent = () => {
        let scy = window.scrollY;
        setScrollY(scy);
    };

    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin);
    }, []);
    useEffect(() => {
        window.addEventListener("scroll", scrollEvent);
        return () => {
            window.removeEventListener("scroll", () => {
                let scy = window.scrollY;
                setScrollY(scy);
            });
        };
    }, []);
    return (
        <Btn className={scrollY > 400 ? scrollY: null} onClick={toptopHandle}>
            <i className="xi-arrow-top"></i>
        </Btn>
    );
};

export default Totop;
