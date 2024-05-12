import "./Invite.css";

const Invite = () => {
  return (
    <div className="invite">
      <img
        className="home-squad-icon"
        loading="lazy"
        alt=""
        src="/home--squad@2x.png"
      />
      <div className="home-online">
        <img className="online-icon" loading="lazy" alt="" src="/online.svg" />
        <img
          className="friend-profile-pic"
          loading="lazy"
          alt=""
          src="/friend-profile-pic@2x.png"
        />
      </div>
      <div className="home-offline">
        <div className="offline" />
        <img
          className="friend-profile-pic1"
          loading="lazy"
          alt=""
          src="/friend-profile-pic-1@2x.png"
        />
      </div>
    </div>
  );
};

export default Invite;
