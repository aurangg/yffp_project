import React, {useState} from 'react';
import './major.css';
import Navigation from './Navigation';
function Home() {
    const [title, setTitle]= useState('Connect Your Wallet');
    return(
        <React.Fragment>
            <header className="main-section header" name="home">
                <div id="logo_id" className="logo-first">
                    <img style={{height:'100px', width:'200px'}} src={`${process.env.PUBLIC_URL}/images/logo.png`} alt=""></img>
                    <button className="button" style={{position:'relative',top:'10vh',marginLeft:'auto'}} onClick={() => setTitle("0xGF...FD5T")}>
                        {title}
                    </button>
                </div>
                
                <div id="images-container" className="images-second w-inline-block">
                    <div href="#Nav" id="first_image_div">
                        <div className="animation-container circle" style={{position:'relative'}}>
                            <div className="animation-item circle">
                                <img width="480" src={`${process.env.PUBLIC_URL}/images/blue.png`} alt="" className="animation-image" />
                            </div>
                            <div className="centered">
                                <h4 id="vault">
                                    Vaults
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="animation-container circle" style={{position:'relative'}}>
                            <div className="animation-item circle">
                                <img width="480" src={`${process.env.PUBLIC_URL}/images/grey.png`} alt="" className="animation-image"/>
                            </div>
                            <div className="centered">
                                <h4 id="dashboard">
                                    Dashboard
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div id="second_image_div">
                        <div className="animation-container circle" style={{position:'relative'}}>
                            <div className="animation-item circle" >
                                <img width="480" src={`${process.env.PUBLIC_URL}/images/green.png`} alt="" className="animation-image"  />
                            </div>
                            <div className="centered">
                                <h4 id="yield">
                                    Stake & Yield
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                
                    <Navigation />
                    
            </header>
        </React.Fragment>
    )
}

export default Home;