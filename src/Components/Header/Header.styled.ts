import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 68px;
  border-bottom: 1px solid grey;
  position: relative;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: 159px;
    gap: 39px;
    padding-top: 16px;
  }
  @media screen and (min-width: 1050px) {
    flex-direction: row;
    align-items: center;
    height: 85px;
    padding-top: 0;
    gap: 0;
  }
  h1 {
    font-family: "Antonio";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -1.05px;
    text-transform: uppercase;
    margin-left: 24px;
    margin-top: 16px;

    @media screen and (min-width: 1050px) {
      margin-top: 0;
    }
  }
  nav {
    height: 84px;
    display: flex;
    align-items: center;
    @media screen and (min-width: 1050px) {
      margin-right: 41px;
    }
  }
  ul {
    display: none;
    gap: 33px;
    margin-bottom: 27px;
    @media screen and (min-width: 768px) {
      display: flex;
    }
    @media screen and (min-width: 1050px) {
      margin-bottom: 0;
    }
  }

  li {
    font-family: "League Spartan";
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 25px;
    opacity: 0.8;

    list-style-type: none;

    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .burger {
    padding-top: 26px;
    margin-right: 36px;
    width: 24px;
    height: 24px;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
  .modal-menu {
    z-index: 1;
    position: absolute;
    background-color: #070724;
    width: 100%;
    top: 68px;
    padding: 0 24px;
    transition: 1s ease-in;
    animation: appear 0.6s forwards;
    @keyframes appear {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
  .planet-menu {
    height: 65px;

    display: flex;
    gap: 25px;
    align-items: center;
    border-bottom: 1px solid rgba(105, 105, 105, 0.3);
    h2 {
      font-family: "League Spartan";
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 25px;
      letter-spacing: 1.36364px;
      text-transform: uppercase;
      cursor: pointer;
      &:hover {
        color: grey;
      }
    }
  }
  .round {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`;
