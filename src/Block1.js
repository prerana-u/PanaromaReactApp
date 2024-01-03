import { Pannellum } from "pannellum-react";
import { useNavigate } from "react-router-dom";

function Block1() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Pannellum
        width="100%"
        height="100vh"
        image="/Images/block1_surrroundings.jpg"
        pitch={-10}
        yaw={-120}
        hfov={50}
        autoLoad
        maxPitch={60}
        minPitch={-60}
        minHfov={30}
        maxHfov={70}
        showControls
        title="Block 1"
        showFullscreenCtrl
        showZoomCtrl
        onLoad={() => {
          console.log("panorama loaded");
        }}
      >
        <Pannellum.Hotspot
          type="custom"
          pitch={-10}
          yaw={110}
          text="point1"
          handleClick={(evt, args) => navigate("/centralblock")}
          handleClickArg={{ name: "centralblock" }}
        />
        <Pannellum.Hotspot
          type="custom"
          pitch={-10}
          yaw={-65}
          text="UG Library"
          handleClick={(evt, args) => navigate("/uglibrary")}
          handleClickArg={{ name: "UG Library" }}
        />
        <Pannellum.Hotspot
          type="info"
          pitch={-10}
          yaw={-165}
          text="Way to Fresheteria/Nandini"
        />
        <Pannellum.Hotspot
          type="custom"
          pitch={-20}
          yaw={-10}
          text="Way to Block 2"
          handleClick={(evt, args) => navigate("/block2")}
          handleClickArg={{ name: "block2" }}
        />
      </Pannellum>
    </div>
  );
}

export default Block1;
