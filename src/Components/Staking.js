import React from 'react';
import Navigation from './Navigation';

function Staking(){
    return(
        <React.Fragment>
            <header className="main-section header" name="staking">
                <div id="logo_id" className="logo-first">
                    <img style={{height:'100px', width:'200px'}} src={`${process.env.PUBLIC_URL}/images/logo.png`} alt=""></img>
                </div>
                <div id="images-container" className="images-second w-inline-block">
                    <div id="staking_div">
                        <div className="animation-container circle" style={{position:'relative'}}>
                            <div className="animation-item circle">
                                <img width="480" src={`${process.env.PUBLIC_URL}/images/s_back.png`} alt="" className="animation-image" />
                            </div>
                            <div className="centered">
                                <h5 style={{textAlign:'center'}}>
                                    0.000000
                                </h5>
                                <p  style={{textAlign:'center'}}>
                                    YF-MINT
                                </p>
                                <div style={{textAlign:'center'}}>
                                    <button className="button" style={{fontSize:'10px', padding:'0 10px', lineHeight:'15px', background:'white', color:'green'}}>
                                        HARVEST
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="staking_div_2">
                        <div className="animation-container circle" style={{position:'relative'}}>
                            <div className="animation-item circle">
                                <img width="480" src={`${process.env.PUBLIC_URL}/images/s_front.png`} alt="" className="animation-image" />
                            </div>
                            <div className="centered">
                                <h5 style={{textAlign:'center'}}>
                                    0.000000
                                </h5>
                                <p  style={{textAlign:'center'}}>
                                    UNI-V2 YFFP/ETH
                                </p>
                                <div style={{textAlign:'center'}}>
                                    <button className="button" style={{fontSize:'10px', padding:'0 10px', lineHeight:'15px'}}>
                                        Approve UNI-V2 <br />YFFP/ETH LP
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Navigation />
            </header>
            <div className="col-12" style={{marginBottom:'30vh', marginTop:'-10vh'}}>
                <div style={{textAlign:'center'}}>
                    <button className="button">
                        Get UNI-V2 YFFP/ETH LP Tokens
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Staking;