import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 24px;
  .planet {
    position: relative;
    animation: spin 30s linear infinite;
    @keyframes spin {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(359deg);
      }
    }
  }
  .planet-description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media screen and (min-width: 768px) {
    .text-links {
      display: flex;
      gap: 69px;
    }
    .planet {
      margin-top: 72px;
    }
  }
  @media screen and (min-width: 1050px) {
    .planet-description {
      flex-direction: row;
      padding-top: 112px;
      width: 1050px;
      justify-content: flex-end;
      gap: 300px;
      margin: 0 auto;
    }
    .planet {
      margin-top: 32px;
    }
    .text-links {
      display: flex;
      flex-direction: column;
      gap: 9px;
    }
  }
  .info-cont {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    @media screen and (min-width: 768px) {
      flex-direction: row;
      gap: 11px;
      justify-content: center;
    }
    @media screen and (min-width: 1050px) {
      margin-top: 80px;
    }
  }
  .info {
    display: flex;
    width: 327px;
    height: 48px;
    align-items: center;
    padding: 0 14px;
    justify-content: space-between;
    border: 1px solid rgba(256, 256, 256, 0.2);
    @media screen and (min-width: 768px) {
      flex-direction: column;
      width: 164px;
      height: 88px;
      align-items: flex-start;
      justify-content: center;
      gap: 6px;
    }
    @media screen and (min-width: 1050px) {
      width: 255px;
    }
    p {
      font-family: "League Spartan";
      font-style: normal;
      font-weight: 700;
      font-size: 11px;
      line-height: 16px;
      letter-spacing: 0.727273px;
      text-transform: uppercase;
      mix-blend-mode: normal;
      opacity: 0.5;
    }
    .numbers {
      font-family: "Antonio";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 26px;
      text-align: right;
      letter-spacing: -0.75px;
      text-transform: uppercase;
    }
  }
  .planet-img {
    width: 200px;
    height: 200px;
    margin-bottom: 76px;
    @media screen and (min-width: 768px) {
      width: 240px;
      height: 240px;
    }
    @media screen and (min-width: 1050px) {
      width: 100%;
      height: 100%;
    }
  }
  .geology {
    width: 70px;
    position: absolute;
    right: 34%;
    top: 195px;
    @media screen and (min-width: 768px) {
      width: 100px;
      top: 200px;
      right: 25%;
    }
    @media screen and (min-width: 1050px) {
      width: 150px;
      left: 23%;
      top: 260px;
    }
  }
  .text {
    text-align: center;
    @media screen and (min-width: 768px) {
      text-align: left;
    }
    h1 {
      font-family: "Antonio";
      font-weight: 400;
      font-size: 48px;
      line-height: 62px;
      text-transform: uppercase;

      margin-bottom: 16px;
    }
    p {
      width: 327px;
      font-family: "League Spartan";

      font-weight: 400;
      font-size: 13px;
      line-height: 22px;
      letter-spacing: 0.65px;
      opacity: 0.8;
      margin-bottom: 28px;
      @media screen and (min-width: 768px) {
        width: 339px;
      }
      @media screen and (min-width: 1050px) {
        width: 350px;
        font-size: 15px;
      }
    }
    .source {
      opacity: 0.5;
    }
  }
  .links {
    display: none;
    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction: column;
      gap: 24px;
      font-family: "League Spartan";
      font-weight: 700;
      font-size: 9px;
      line-height: 25px;
      padding-top: 40px;
      letter-spacing: 1.92857px;
      text-transform: uppercase;
    }
    @media screen and (min-width: 1050px) {
      padding-top: 0;
    }
  }
  .mobile-tabs {
    display: flex;

    justify-content: space-around;
    align-items: center;
    height: 50px;
    align-items: center;
    font-family: "League Spartan";
    border-bottom: 1px solid rgb(256, 2566, 256, 0.5);
    margin-bottom: 84px;
    font-weight: 700;
    font-size: 11px;
    line-height: 12px;
    text-align: center;
    letter-spacing: 1.92857px;
    text-transform: uppercase;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
  .overview,
  .tab-overview {
    cursor: pointer;
    @media screen and (min-width: 768px) {
      width: 281px;
      height: 40px;
      border: 1px solid rgba(256, 256, 256, 0.3);
      display: flex;
      align-items: center;
      gap: 14px;
      padding-left: 14px;
      background-color: #070724;
      &:hover {
        background-color: ${(props) => props.color};
      }
      .source {
        opacity: 0.5;
      }
    }
    @media screen and (min-width: 1050px) {
      width: 350px;
      font-size: 11px;
    }
  }
`;
