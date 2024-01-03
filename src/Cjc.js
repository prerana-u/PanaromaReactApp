import { Pannellum } from "pannellum-react";
import { useNavigate } from "react-router-dom";

function Cjc() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Pannellum
        width="100%"
        height="100vh"
        image="/Images/christjuniorcollege_surroundings.jpg"
        pitch={10}
        yaw={-70}
        hfov={40}
        autoLoad
        maxPitch={60}
        minPitch={-60}
        minHfov={30}
        maxHfov={70}
        showControls
        title="Christ Junior College"
        showFullscreenCtrl
        showZoomCtrl
        onLoad={() => {
          console.log("panorama loaded");
        }}
      >
        <Pannellum.Hotspot
          type="custom"
          pitch={-5}
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
          handleClick={(evt, args) => navigate("/audiblock")}
          handleClickArg={{ name: "audi block" }}
        />
      </Pannellum>
    </div>
  );
}

export default Cjc;
