import "./BrowserSINext.css";

const BrowserSINext = ({ browserSINextImageW, dawnbreaker }) => {
  return (
    <div className="browser-si-next">
      <div className="browser-si-next-bg" />
      <img
        className="browser-si-next-image-w-icon"
        loading="lazy"
        alt=""
        src={browserSINextImageW}
      />
      <div className="column-layout-wrapper">
        <div className="column-layout">
          <b className="conquest-large">conquest large</b>
          <b className="dawnbreaker">{dawnbreaker}</b>
        </div>
      </div>
    </div>
  );
};

export default BrowserSINext;
