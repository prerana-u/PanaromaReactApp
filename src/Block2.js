import { Pannellum } from "pannellum-react";
import { useNavigate } from "react-router-dom";

function Block2() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Pannellum
        width="100%"
        height="100vh"
        image="/Images/block2_surroundings.jpg"
        pitch={10}
        yaw={-110}
        hfov={90}
        maxPitch={60}
        minPitch={-60}
        minHfov={30}
        maxHfov={90}
        title="Block 2"
        autoLoad
        showControls
        showFullscreenCtrl
        showZoomCtrl
        onLoad={() => {
          console.log("panorama loaded");
        }}
      >
        <Pannellum.Hotspot
          type="info"
          pitch={10}
          yaw={160}
          text="Kiosk (Refreshments)"
        />

        <Pannellum.Hotspot
          type="info"
          pitch={10}
          yaw={-40}
          text="FootBall Ground"
        />

        <Pannellum.Hotspot
          type="custom"
          pitch={10}
          yaw={-90}
          text="Way to Block 2 Entrance 2"
          handleClick={(evt, args) => navigate("/block2e2")}
          handleClickArg={{ name: "centralblock" }}
        />

        <Pannellum.Hotspot
          type="custom"
          pitch={20}
          yaw={70}
          text="point1"
          handleClick={(evt, args) => navigate("/centralblock")}
          handleClickArg={{ name: "centralblock" }}
        />
      </Pannellum>
    </div>
  );
}

export default Block2;
