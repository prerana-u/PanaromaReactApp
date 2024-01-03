import { Pannellum } from "pannellum-react";
import { useNavigate } from "react-router-dom";

function BBCourt() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Pannellum
        width="100%"
        height="100vh"
        image="/Images/centralblock_frombbcourt.jpg"
        pitch={-10}
        yaw={-70}
        hfov={50}
        autoLoad
        maxPitch={60}
        minPitch={-60}
        minHfov={30}
        maxHfov={70}
        showControls
        title="BasketBall Court Opposite Central Block"
        showFullscreenCtrl
        showZoomCtrl
        onLoad={() => {
          console.log("panorama loaded");
        }}
      >
        <Pannellum.Hotspot
          type="custom"
          pitch={0}
          yaw={165}
          text="Way to Central Block"
          handleClick={(evt, args) => navigate("/centralblock")}
          handleClickArg={{ name: "centralblock" }}
        />

        <Pannellum.Hotspot
          type="custom"
          pitch={-10}
          yaw={105}
          text="Way to Block 1"
          handleClick={(evt, args) => navigate("/block1")}
          handleClickArg={{ name: "block 1" }}
        />

        <Pannellum.Hotspot type="info" pitch={0} yaw={-30} text="Nandini" />
        <Pannellum.Hotspot
          type="info"
          pitch={-10}
          yaw={30}
          text="Fresheteria"
        />
      </Pannellum>
    </div>
  );
}

export default BBCourt;
