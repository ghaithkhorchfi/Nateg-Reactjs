import React from 'react';
import CountDown from './CountDown';
import './header.css';

const Header = () => {
    return (<React.Fragment>
        <section className='landing' >
            <header className='bg-primary'>
                <div className="container flex">
                    <div className="branding">
                        <img src="/image/logo1.png" alt="GDSC Logo" />
                        <h1>NATEG ENICARTHAGE</h1>
                    </div>

                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href='' >NATEG ENICARTHAGE</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href='' >TEAM</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href='' >EVENT</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <section className='showcase'>
            <h1>NATEG ENICARTHAGE</h1>
            <CountDown/>
            </section>
            
        </section>


    </React.Fragment>

    );
};

export default Header;
