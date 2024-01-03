
import { Pannellum } from "pannellum-react";

function Block4() {
  return (
    <div className="App">
      <Pannellum
        width="100%"
        height="100vh"
        image="/Images/block4_surroundings.jpg"
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        showControls
        showFullscreenCtrl
        doubleClickZoom
        showZoomCtrl
        onLoad={() => {
            console.log("panorama loaded");
        }}
    >
    
    </Pannellum>
    </div>
  );
}

export default Block4;