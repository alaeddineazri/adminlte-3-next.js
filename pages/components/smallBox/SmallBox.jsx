import React from "react";

const SmallBox = () => {
  return (
    <div className="small-box bg-gradient-success ">
      <div className="inner">
        <h3>44</h3>
        <p>User Registrations</p>
      </div>
      <div className="icon">
        <i className="fas fa-user-plus" />
      </div>
      <a href="#" className="small-box-footer">
        More info <i className="fas fa-arrow-circle-right" />
      </a>
    </div>
  );
};

export default SmallBox;
