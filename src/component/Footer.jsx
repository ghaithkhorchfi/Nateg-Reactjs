import React from 'react';
import './footer.css'

const Footer = () => {
    return <footer >
        <div className='d-flex flex-wrap ' >
            <div className='row  align-items-start' >
                <div className='col-6' >
                    <div >
                        <h2 className='text-danger p-10 ' >contact:</h2>
                    </div>
                </div>
                <div className='col-4' >
                    <div className='fb' >
                        <a href="https://www.facebook.com/nateg.enicarthage"><i class="fab fa-facebook  fa-4x "></i> </a>
                    </div>

                </div>
            </div>
        </div>
        <div className='d-flex justify-content-center' >
            <h3 className='text-danger' >Ones Nateger Always Nateger</h3>
        </div>
        <div className='d-flex justify-content-end '>
            <img src="image/logo1.png" alt="nateg" width={'200px'} />
        </div>
        <div className=' d-flex justify-content-center' ><h4 className='text-info' >e-mail:nateg.enicarthage@gmail.com</h4></div>
        <div class="footer-copyright">2022 Ghaith Khorchfi. All Rights Reserved. </div>


    </footer>;
};

export default Footer;
