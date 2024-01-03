
import { Pannellum } from "pannellum-react";

function RNDBlock() {
  return (
    <div className="App">
      <Pannellum
        width="100%"
        height="100vh"
        image="/Images/rndblock_surroundings.jpg"
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        showControls
        showFullscreenCtrl
        showZoomCtrl
        onLoad={() => {
            console.log("panorama loaded");
        }}
    >
    
    </Pannellum>
    </div>
  );
}

export default RNDBlock;