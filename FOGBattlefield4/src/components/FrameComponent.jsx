import BrowserSINext from "./BrowserSINext";
import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <div className="conditional-routing">
      <div className="custom-path">
        <div className="loop-enders">
          <div className="side-menu-misc">
            <img
              className="side-menu-help-icon"
              loading="lazy"
              alt=""
              src="/sidemenu--help.svg"
            />
            <div className="side-menu-help-popup">
              <div className="help">help</div>
            </div>
          </div>
          <div className="side-menu-misc1">
            <img
              className="side-menu-quit-icon"
              loading="lazy"
              alt=""
              src="/sidemenu--quit.svg"
            />
            <div className="side-menu-quit-popup">
              <div className="quit">Quit</div>
            </div>
          </div>
        </div>
        <div className="link-collector-wrapper">
          <div className="link-collector">
            <div className="map-rotation">map rotation</div>
            <div className="icon-row">
              <BrowserSINext
                browserSINextImageW="/browser--sinextimagew@2x.png"
                dawnbreaker="dawnbreaker"
              />
              <BrowserSINext
                browserSINextImageW="/browser--sinextimagew-1@2x.png"
                dawnbreaker="propaganda"
              />
              <BrowserSINext
                browserSINextImageW="/browser--sinextimagew-2@2x.png"
                dawnbreaker="operation locker"
              />
              <BrowserSINext
                browserSINextImageW="/browser--sinextimagew-3@2x.png"
                dawnbreaker="lancang dam"
              />
               <BrowserSINext
                browserSINextImageW="/browser--sinextimagew@2x.png"
                dawnbreaker="dawnbreaker"
              />
              <BrowserSINext
                browserSINextImageW="/browser--sinextimagew-1@2x.png"
                dawnbreaker="propaganda"
              />
              <BrowserSINext
                browserSINextImageW="/browser--sinextimagew-2@2x.png"
                dawnbreaker="operation locker"
              />
              <BrowserSINext
                browserSINextImageW="/browser--sinextimagew-3@2x.png"
                dawnbreaker="lancang dam"
              />
               <BrowserSINext
                browserSINextImageW="/browser--sinextimagew@2x.png"
                dawnbreaker="dawnbreaker"
              />
              <BrowserSINext
                browserSINextImageW="/browser--sinextimagew-1@2x.png"
                dawnbreaker="propaganda"
              />
              <BrowserSINext
                browserSINextImageW="/browser--sinextimagew-2@2x.png"
                dawnbreaker="operation locker"
              />
              <BrowserSINext
                browserSINextImageW="/browser--sinextimagew-3@2x.png"
                dawnbreaker="lancang dam"
              />
               <BrowserSINext
                browserSINextImageW="/browser--sinextimagew@2x.png"
                dawnbreaker="dawnbreaker"
              />
              <BrowserSINext
                browserSINextImageW="/browser--sinextimagew-1@2x.png"
                dawnbreaker="propaganda"
              />
              <BrowserSINext
                browserSINextImageW="/browser--sinextimagew-2@2x.png"
                dawnbreaker="operation locker"
              />
              <BrowserSINext
                browserSINextImageW="/browser--sinextimagew-3@2x.png"
                dawnbreaker="lancang dam"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
