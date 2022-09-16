const SERVICE = [
    {
        id: 1,
        title: "증명서 발급조회",
        sub: [
            { title: "증명서 발급조회", link: "#!" },
            { title: "사용인감신고서 발급 조회", link: "#!" },
            { title: "재직증명서 발급 조회", link: "#!" },
        ],
    },
    {
        id: 2,
        title: "인트라넷",
        sub: [
            { title: "증명서 발급조회", link: "#!" },
            { title: "사용인감신고서 발급 조회", link: "#!" },
            { title: "재직증명서 발급 조회", link: "#!" },
        ],
    },
    {
        id: 3,
        title: "패밀리 사이트",
        sub: [
            { title: "증명서 발급조회", link: "#!" },
            { title: "사용인감신고서 발급 조회", link: "#!" },
            { title: "재직증명서 발급 조회", link: "#!" },
        ],
    },
];

const ServiceLink = () => {
    return <ul className="ServiceLink">
        {
            SERVICE.map((link, idx)=>{
                return (
                    <li key={link.id}>{link.title}
                        <ul>
                            {
                                link.sub.map((sub, idx)=>{
                                    return (
                                        <li>{sub.title}</li>
                                    )
                                })
                            }
                        </ul>
                    </li>
                )
            })
        }
    </ul>;
};

export default ServiceLink;
