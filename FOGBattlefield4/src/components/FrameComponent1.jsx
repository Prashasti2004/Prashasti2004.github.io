import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <div className="side-menu-parent">
      <img
        className="side-menu-icon"
        loading="lazy"
        alt=""
        src="/sidemenu@2x.png"
      />
      <img
        className="side-menu-icon1"
        loading="lazy"
        alt=""
        src="/sidemenu-1@2x.png"
      />
      <div className="side-menu1">
        <img
          className="side-menu-game-icon"
          loading="lazy"
          alt=""
          src="/sidemenu--game@2x.png"
        />
        <div className="side-menu-line-game" />
      </div>
      <div className="frame-parent12">
        <div className="side-menu-group">
          <img
            className="side-menu-icon2"
            loading="lazy"
            alt=""
            src="/sidemenu-2@2x.png"
          />
          <img
            className="side-menu-icon3"
            loading="lazy"
            alt=""
            src="/sidemenu-3@2x.png"
          />
        </div>
        <div className="side-menu-container">
          <img
            className="side-menu-icon4"
            loading="lazy"
            alt=""
            src="/sidemenu-4.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
