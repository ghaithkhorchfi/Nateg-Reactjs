import React, { useState } from 'react';
const CountDown = () => {

    return <React.Fragment>
        <h3 className='fs-1 p-3 text-center text-light' >Our Event is comming soon</h3>
        <div className='d-flex p-3 justify-content-around  '>
            <div className='d-flex flex-column'  >
                <div className='text-danger' >
                    <h3 className='day'>day</h3>
                </div>
                <h3>Day</h3>
            </div>
            <div className='d-flex flex-column'>
                <div className="text-danger">
                    <h3 className='hour'>Hour</h3>
                </div>
                <h3>Hour</h3>
            </div>
            <div className='d-flex flex-column'>
                <div className="text-danger">
                    <h3 className='min'>Minute</h3>
                </div>
                <h3>Minute</h3>
            </div>
            <div className='d-flex flex-column'>
                <div className="text-danger">
                <h3 className='sec' >Second</h3>
                </div>
                <h3>Second</h3>
            </div>

        </div>
    </React.Fragment>;
};

export default CountDown;
