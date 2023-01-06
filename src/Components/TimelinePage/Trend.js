import { useNavigate } from "react-router-dom";
import { ReactTagify } from "react-tagify"
import styled from "styled-components"


export default function Trend({ t }) {
    const navigate = useNavigate();
    console.log(t);

    const tagStyle = {
        color: "white",
        fontWeight: 800,
        cursor: "pointer",
      };
      
    return (
        <>
            <TrendName>
                <ReactTagify tagStyle={tagStyle}
                    tagClicked={(tag) =>
                        navigate(`/hashtag/${tag.substring(1)}`)
                    }>
                    {t}
                </ReactTagify>
            </TrendName>
        </>
    )
}

const TrendName = styled.h2`
    font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 19px;
line-height: 23px;
letter-spacing: 0.05em;
margin-left: 16px;
margin-top: 22px;
margin-bottom: -10px;
color: #FFFFFF;
`