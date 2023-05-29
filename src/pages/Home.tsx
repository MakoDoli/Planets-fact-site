// import  { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const navigate = useNavigate();
//   useEffect(() => {
//     navigate("/mercury");
//   }, []);
//   return <div>Home</div>;
// }
import { StyledContainer } from "../Components/Planet.styled";
import source from "../assets/icon-source.svg";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import data from "../../data.json";

export default function PlanetTempl() {
  //   const path = useParams().id;

  const planet = data.find(
    (item) => item.name.toLocaleLowerCase() === "mercury"
  );

  const [inside, setInside] = useState(false);
  const [surface, setSurface] = useState(false);

  useEffect(() => {
    setInside(false);
    setSurface(false);
  }, []);
  const showInternal = () => {
    setSurface(false);
    setInside(!inside);
  };

  const geology = () => {
    setInside(false);
    setSurface(!surface);
  };

  const overview = () => {
    setInside(false);
    setSurface(false);
  };
  return (
    <StyledContainer color={planet?.color}>
      <div className="mobile-tabs">
        <div onClick={overview} className="overview">
          <p>overview</p>
        </div>
        <div onClick={showInternal} className="overview">
          <p>structure</p>
        </div>
        <div onClick={geology} className="overview">
          <p>surface</p>
        </div>
      </div>
      <div className="planet-description">
        <div className="planet">
          <img
            className="planet-img"
            src={inside ? planet?.images.internal : planet?.images.planet}
          ></img>
          {surface ? (
            <img className="geology" src={planet?.images.geology} alt=""></img>
          ) : (
            ""
          )}
        </div>
        <div className="text-links">
          <div className="text">
            <h1>{planet?.name}</h1>
            <p>
              {inside
                ? planet?.structure.content
                : surface
                ? planet?.geology.content
                : planet?.overview.content}
            </p>
            <p className="source">
              Source: <span>Wikipedia</span>{" "}
              <span>
                <a
                  href={
                    inside
                      ? planet?.structure.source
                      : surface
                      ? planet?.geology.source
                      : planet?.overview.source
                  }
                  target="_blank"
                >
                  <img src={source}></img>{" "}
                </a>
              </span>
            </p>
          </div>
          <div className="links">
            <div onClick={overview} className="tab-overview">
              <p className="source">01</p>
              <p>overview</p>
            </div>
            <div onClick={showInternal} className="tab-overview">
              <p className="source">02</p>
              <p>internal structure</p>
            </div>
            <div onClick={geology} className="tab-overview">
              <p className="source">03</p>
              <p>surface geology</p>
            </div>
          </div>
        </div>
      </div>
      <div className="info-cont">
        <div className="info">
          <p>Rotation Time</p>
          <div className="numbers">{planet?.rotation} </div>
        </div>

        <div className="info">
          <p>Revolution Time</p>
          <div className="numbers">{planet?.revolution}</div>
        </div>
        <div className="info">
          <p>radius</p>
          <div className="numbers">{planet?.radius} </div>
        </div>
        <div className="info">
          <p>average temp.</p>
          <div className="numbers">{planet?.temperature}</div>
        </div>
      </div>
    </StyledContainer>
  );
}
