import styled from "styled-components"


export default function Trend({t}) {
  
    return (
        <>
            <TrendName>
                #{t.tag}
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