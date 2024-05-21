import React from "react";
import styled from "styled-components";
import Logoimg from "../assets/img/Momentgram.svg";
import Iconheart from "../assets/icon/ph_heart.png";
import Iconcomment from "../assets/icon/teenyicons_chat-outline.png";
import Iconshare from "../assets/icon/material-symbols-light_share-outline.png";
import dummy from "../assets/img/dummy.webp";
import dummy2 from "../assets/img/unnamed.png";

const Mainheader = styled.div`
  border: 1px solid black;
  border-bottom: 0px;
  width: 384px;
  height: 46px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  width: 110px;
  height: 46px;
  display: flex;
  align-items: center;
  margin-left: 0.5rem;

  & > img {
    width: 110px;
    height: 29px;
  }
`;

const Alerticon = styled.div`
  width: 30px;
  height: 46px;
  display: flex;
  align-items: center;
  margin-right: 0.5rem;

  & > img {
    width: 30px;
    height: 30px;
  }
`;

const Post = styled.div`
  border: 1px solid black;
  border-top: 0px;
  width: 384px;
  height: 700px;
  background: pink;
`;

const Postinfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: auto;
  height: 46px;
  margin: 0 0.5rem 0 0.5rem;
`;

const Postprofile = styled.div`
  width: auto;
  display: flex;
  align-items: center;

  & > p {
    width: auto;
    height: 17px;
    font-size: 14px;
    margin-left: 0.3rem;
  }

  & > img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid black;
  }
`;

const Postdate = styled.div`
  display: flex;
  align-items: center;

  & > p {
    font-size: 12px;
    color: gray;
  }
`;

const Postimg = styled.div`
  display: flex;
  width: 384px;
  height: 270px;
  border-top: 1px solid black;

  & > img {
    display: flex;
    width: 384px;
    height: 270px;
  }
`;

const Postalert = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0 0.5rem 0;
`;

const Postcomment = styled.div`
  width: 86px;
  height: 36px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > img {
    height: 30px;
  }
`;

const Postshare = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 0.3rem;
`;

const Posttext = styled.div`
  margin: 8px;
`

const Mainpage: React.FC = () => {
  return (
    <section className="Homepage">
      <div className="">
        <Mainheader>
          <Logo>
            <img src={Logoimg} />
          </Logo>
          <Alerticon>
            <img src={Iconheart} />
          </Alerticon>
        </Mainheader>
        <Post>
          <Postinfo>
            <Postprofile>
              <img src={dummy2}></img>
              <p>네자렉</p>
            </Postprofile>
            <Postdate>
              <p>1일 전</p>
            </Postdate>
          </Postinfo>
          <Postimg>
            <img src={dummy}></img>
          </Postimg>
          <Postalert>
            <Postcomment>
              <img src={Iconheart}></img>
              <img src={Iconcomment}></img>
            </Postcomment>
            <Postshare>
              <img src={Iconshare}></img>
            </Postshare>
          </Postalert>
          <Posttext>
            <p>
              아, 우리의 일방적인 대화가 더 즐거워질 수 없다니 유감이다! 하지만
              이건··· 기분이 정말 좋구나. 너의 두려움을 삼켜주마! 나의 기억은
              결코 꺼지지 않는다. 가장 평온한 순간, 깊은 잠 속에서··· 너는 나를
              기억할 것이다, 수호자.
            </p>
          </Posttext>
        </Post>
      </div>
    </section>
  );
};

export default Mainpage;
