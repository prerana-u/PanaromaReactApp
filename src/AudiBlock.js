import { Pannellum } from "pannellum-react";
import { useNavigate } from "react-router-dom";

function AudiBlock() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Pannellum
        width="100%"
        height="100vh"
        image="/Images/audi_block_surroundings.jpg"
        pitch={-10}
        yaw={-70}
        hfov={50}
        autoLoad
        maxPitch={60}
        minPitch={-60}
        minHfov={30}
        maxHfov={70}
        showControls
        title="Audi Block"
        showFullscreenCtrl
        showZoomCtrl
        onLoad={() => {
          console.log("panorama loaded");
        }}
      >
        <Pannellum.Hotspot
          type="custom"
          pitch={0}
          yaw={155}
          text="Way to Central Block"
          handleClick={(evt, args) => navigate("/centralblock")}
          handleClickArg={{ name: "centralblock" }}
        />

        <Pannellum.Hotspot
          type="info"
          pitch={-10}
          yaw={-165}
          text="Way to Gourmet Cafeteria Extension"
        />

        <Pannellum.Hotspot
          type="custom"
          pitch={0}
          yaw={-30}
          text="Way to Audi Block"
          handleClick={(evt, args) => navigate("/block2")}
          handleClickArg={{ name: "block2" }}
        />
      </Pannellum>
    </div>
  );
}

export default AudiBlock;
