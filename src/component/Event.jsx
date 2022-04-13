import React from 'react';

const Event = (props) => {
    return <div className="p-4 p-md-5 mb-4 text-white rounded bg-light text-dark">
        <div className='row d-flex flex-row' >
            <div className="col-md-6 px-0">
                <h1 className="display-4 fst-italic">{props.name}</h1>
                <p className="lead my-3">{props.desc}</p>
                <p className="lead mb-0"><a href="#" className="text-white fw-bold">Continue reading...</a></p>
            </div>
            <div className='col-md-6 d-flex justify-content-end' >
                <img src={props.img} className="img-thumbnail" alt="logo" width={'300px'} />
            </div>
        </div>
    </div>;
};

export default Event;
