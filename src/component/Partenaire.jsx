import React from 'react';
import Caro from './Caro';
import './part.css';

const Partenaire = () => {
    const car=[
        {src:'image/logo1.png'},
        {src:'image/logo.png'},
        {src:'image/gh2.jpg'},
    ]
    return (<div>
        <div className='containe' >
            <div className='row align-items-center' >
            <div className='col-6' >
            <h1 className='text-danger text-center'  >Nos Partenaires :</h1>
            </div>
                <div id="carouselExampleSlidesOnly" class="carousel slide col-4" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="image/facebook.png" className="d-block w-100" alt="image1" />
                        </div>
                        { car.map(e=>{return <Caro src={e.src} /> })}

                    </div>
                </div>

            </div>



        </div>

    </div>);
};

export default Partenaire;
