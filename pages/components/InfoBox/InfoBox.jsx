import React from "react";

const InfoBox = () => {
  return (
    <>
      <div className="info-box" >
        <span className="info-box-icon bg-info">
          <i className="far fa-bookmark" />
        </span>
        <div className="info-box-content">
          <span className="info-box-text">Bookmarks</span>
          <span className="info-box-number">41,410</span>
          <div className="progress">
            <div className="progress-bar bg-info" style={{ width: "70%" }} />
          </div>
          <span className="progress-description">70% Increase in 30 Days</span>
        </div>
      </div>
    </>
  );
};

export default InfoBox;
