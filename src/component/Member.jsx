import React from 'react';

const Member = (props) => {
  return (
  <div className="col-2 ">
    <div  >
      <img src={props.img} className="img-thumbnail" alt="MEMBER IMAGE"  />
      <div className="card-body ">
        <h5 className="card-title fw-bold text-danger">{props.name}</h5>
        <h5 className="card-title badge badge rounded-pill bg-info text-white">{props.role}</h5>
      </div>
    </div>
  </div>
  );
};

export default Member;
