import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Trend from "./Trend";

export default function Trending() {
  const [trends, setTrends] = useState([]);
 
  useEffect(() => {
    const URL = "http://localhost:4000/trends";
    const promise = axios.get(URL);

    promise.then((res) => {
      setTrends(res.data);
    });
    promise.catch((err) => {
      console.log(err.response.data);
    });
  }, []);

  return (
    
      <TrendTopics>
      <h1>Trending</h1>
      <Line></Line>
        <Trends >
          {trends.map((t, id) => (
               <Trend t={"#" + t.tag} key={id} />
          ))}
        </Trends>
    </TrendTopics>

    
  );
}

const TrendTopics = styled.div`
  width: 301px;
  height: 406px;
  background: #171717;
  border-radius: 16px;
  margin-top: 100px;
  margin-left: 40px;
  h1 {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    color: #ffffff;
    margin-top: 9px;
    margin-left: 16px;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;
const Line = styled.div`
  width: 299px;
  height: 0px;

  border: 1px solid #484848;
`;
const Trends = styled.div``;
