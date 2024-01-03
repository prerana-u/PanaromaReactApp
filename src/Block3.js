import { Pannellum } from "pannellum-react";
import { useNavigate } from "react-router-dom";

function Block3() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Pannellum
        width="100%"
        height="100vh"
        image="/Images/block3_surroundings.jpg"
        pitch={10}
        yaw={-50}
        hfov={50}
        autoLoad
        maxPitch={60}
        minPitch={-60}
        minHfov={30}
        maxHfov={70}
        showControls
        title="Block 3"
        showFullscreenCtrl
        showZoomCtrl
        onLoad={() => {
          console.log("panorama loaded");
        }}
      >
        <Pannellum.Hotspot
          type="custom"
          pitch={10}
          yaw={85}
          text="Way to Block 2 Entrance 2"
          handleClick={(evt, args) => navigate("/block2e2")}
          handleClickArg={{ name: "Block2 Entrance2" }}
        />
      </Pannellum>
    </div>
  );
}

export default Block3;
