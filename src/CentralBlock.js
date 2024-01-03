import { Pannellum } from "pannellum-react";
import { useNavigate } from "react-router-dom";

function CentralBlock() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Pannellum
        width="100%"
        height="100vh"
        image="/Images/centralblock_surroundings.jpg"
        pitch={10}
        yaw={-90}
        hfov={70}
        autoLoad
        maxPitch={60}
        minPitch={-60}
        minHfov={30}
        maxHfov={70}
        showControls
        showFullscreenCtrl
        title="Central Block"
        showZoomCtrl
        onLoad={() => {
          console.log("panorama loaded");
        }}
      >
        <Pannellum.Hotspot
          type="custom"
          pitch={0}
          yaw={35}
          text="point1"
          handleClick={(evt, args) => navigate("/bbcourt")}
          handleClickArg={{ name: "Nandini" }}
        />
        <Pannellum.Hotspot
          type="custom"
          pitch={0}
          yaw={130}
          text="point1"
          handleClick={(evt, args) => navigate("/block1")}
          handleClickArg={{ name: "Block 1" }}
        />

        <Pannellum.Hotspot
          type="info"
          pitch={-5}
          yaw={-135}
          text="Gourmet Cafeteria"
        />

        <Pannellum.Hotspot
          type="custom"
          pitch={-5}
          yaw={-35}
          text="Way to Christ Junior College"
          handleClick={(evt, args) => navigate("/cjc")}
          handleClickArg={{ name: "CJC" }}
        />
      </Pannellum>
    </div>
  );
}

export default CentralBlock;
