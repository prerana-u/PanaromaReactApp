import { Pannellum } from "pannellum-react";
import { useNavigate } from "react-router-dom";

function UGLibrary() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Pannellum
        width="100%"
        height="100vh"
        image="/Images/block1_fromlibrary.jpg"
        pitch={-10}
        yaw={160}
        hfov={30}
        autoLoad
        maxPitch={60}
        minPitch={-30}
        minHfov={20}
        maxHfov={50}
        showControls
        title="Christ UG Library"
        showFullscreenCtrl
        showZoomCtrl
        onLoad={() => {
          console.log("panorama loaded");
        }}
      >
        <Pannellum.Hotspot
          type="info"
          pitch={-2}
          yaw={-145}
          text="Way to Block 2"
        />

        <Pannellum.Hotspot
          type="info"
          pitch={10}
          yaw={-50}
          text="Way to Central Block"
        />

        <Pannellum.Hotspot
          type="custom"
          pitch={0}
          yaw={0}
          text="Block 1"
          handleClick={(evt, args) => navigate("/block1")}
          handleClickArg={{ name: "block1" }}
        />
      </Pannellum>
    </div>
  );
}

export default UGLibrary;
