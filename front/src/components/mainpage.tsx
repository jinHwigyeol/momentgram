import React from "react";
import styled from "styled-components";
import Logoimg from "../assets/img/Momentgram.svg";
import Iconheart from "../assets/icon/ph_heart.png";
import Iconcomment from "../assets/icon/teenyicons_chat-outline.png";
import Iconshare from "../assets/icon/material-symbols-light_share-outline.png";
import dummy from "../assets/img/dummy.webp";

const Mainheader = styled.div`
  border: 1px solid black;
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

  & > img {
    width: 30px;
    height: 30px;
  }
`;

const Post = styled.div`
  border: 1px solid black;
  width: 384px;
  height: 700px;
  background: pink;
`;

const Postinfo = styled.div`
  display: flex;
  width: auto;
  height: 46px;
  border: 1px solid black;

  & > p {
    width: auto;
    height: 17px;
    font-size: 14px;
  }
`;

const Postimg = styled.div`
  border: 1px solid black;
  display: flex;
  width: 384px;
  height: 270px;

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
`;

const Posttext = styled.div`
  border: 1px solid black;
`;

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
            <p>네자렉</p>
            <p>1일 전</p>
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
