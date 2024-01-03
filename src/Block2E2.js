import { Pannellum } from "pannellum-react";
import { useNavigate } from "react-router-dom";

function Block2E2() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Pannellum
        width="100%"
        height="100vh"
        image="/Images/block2_entrance2_surroundings.jpg"
        pitch={10}
        yaw={-110}
        hfov={70}
        maxPitch={60}
        title="Block 2 Entrance 2"
        minPitch={-60}
        minHfov={30}
        maxHfov={90}
        autoLoad
        showControls
        showFullscreenCtrl
        showZoomCtrl
        onLoad={() => {
          console.log("panorama loaded");
        }}
      >
        <Pannellum.Hotspot
          type="custom"
          pitch={10}
          yaw={160}
          text="Way to Block 2 Entrance 1"
          handleClick={(evt, args) => navigate("/block2")}
          handleClickArg={{ name: "Block 2" }}
        />

        <Pannellum.Hotspot
          type="custom"
          pitch={0}
          yaw={-25}
          text="Way to Block 3"
          handleClick={(evt, args) => navigate("/block3")}
          handleClickArg={{ name: "Block 3" }}
        />

        <Pannellum.Hotspot
          type="custom"
          pitch={0}
          yaw={-5}
          text="Way to KE Hall"
          handleClick={(evt, args) => navigate("/kehall")}
          handleClickArg={{ name: "Block 4" }}
        />
      </Pannellum>
    </div>
  );
}

export default Block2E2;
