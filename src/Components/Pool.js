import React from 'react';
import './major.css';
import Navigation from './Navigation';

function Pool() {
    
    return(
        <React.Fragment>
            <header className="main-section header" name="pool">
                <div id="logo_id" className="logo-first">
                    <img style={{height:'100px', width:'200px'}} src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo"></img>
                </div>
                <div id="images-container" className="images-second w-inline-block">
                    <div className="animation-container">
                        <div className="animation-item main_box" style={{backgroundColor:'#f0fcfe'}}>
                            <div className="animation-image boxes" style={{textAlign:'center'}}>
                                <img className="boxes_logo" src={`${process.env.PUBLIC_URL}/images/yffp_logo.png`} alt=""/>
                                <br />
                                <p>
                                    YFFP
                                </p>
                                <h5>
                                    APY 342,353%
                                </h5>
                                <button id="left">
                                    Farm
                                </button>
                                <button id="right">
                                    Trade
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="animation-container">
                        <div className="animation-item main_box">
                            <div className="animation-image boxes" style={{textAlign:'center'}}>
                                <img className="boxes_logo" src={`${process.env.PUBLIC_URL}/images/yffp_logo.png`} style={{marginRight:'-10px'}} alt=""/>
                                <img className="boxes_logo" src={`${process.env.PUBLIC_URL}/images/usdt.png`} alt=""/>
                                <br />
                                <p>
                                    YFFP & USDT
                                </p>
                                <h5>
                                    APY 342,353%
                                </h5>
                                <button id="left">
                                    Farm
                                </button>
                                <button id="right">
                                    Trade
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="animation-container">
                        <div className="animation-item main_box" style={{background:'#f9f9f9'}}>
                            <div className="animation-image boxes" style={{textAlign:'center'}}>
                                <img className="boxes_logo" src={`${process.env.PUBLIC_URL}/images/mint.png`} style={{marginRight:'-10px'}} alt=""/>
                                <img className="boxes_logo" src={`${process.env.PUBLIC_URL}/images/usdt.png`} alt=""/>
                                <br />
                                <p>
                                    YF-MINT & USDT
                                </p>
                                <h5>
                                    APY 342,353%
                                </h5>
                                <button id="left">
                                    Farm
                                </button>
                                <button id="right">
                                    Trade
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="animation-container">
                        <div className="animation-item main_box" style={{background:'#e6fff6'}}>
                            <div className="animation-image boxes" style={{textAlign:'center'}}>
                                <img className="boxes_logo" src={`${process.env.PUBLIC_URL}/images/yffp_logo.png`} style={{marginRight:'-10px'}} alt=""/>
                                <img className="boxes_logo" src={`${process.env.PUBLIC_URL}/images/eth.png`} alt=""/>
                                <br />
                                <p>
                                    YFFP & WETH
                                </p>
                                <h5>
                                    APY 342,353%
                                </h5>
                                <button id="left">
                                    Farm
                                </button>
                                <button id="right">
                                    Trade
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="animation-container">
                        <div className="animation-item main_box" style={{background:'#fcdfff'}}>
                            <div className="animation-image boxes" style={{textAlign:'center'}}>
                                <img className="boxes_logo" src={`${process.env.PUBLIC_URL}/images/mint.png`} style={{marginRight:'-10px'}} alt=""/>
                                <img className="boxes_logo" src={`${process.env.PUBLIC_URL}/images/eth.png`} alt=""/>
                                <br />
                                <p>
                                    YF-MINT & USDT
                                </p>
                                <h5>
                                    APY 342,353%
                                </h5>
                                <button id="left">
                                    Farm
                                </button>
                                <button id="right">
                                    Trade
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="animation-container">
                        <div className="animation-item main_box" style={{background:'#feffeb'}}>
                            <div className="animation-image boxes" style={{textAlign:'center'}}>
                                <img className="boxes_logo" src={`${process.env.PUBLIC_URL}/images/mint.png`} style={{marginRight:'-10px'}} alt=""/>
                                <img className="boxes_logo" src={`${process.env.PUBLIC_URL}/images/bitcoin.png`} alt=""/>
                                <br />
                                <p>
                                    YF-MINT & WBTC
                                </p>
                                <h5>
                                    APY 342,353%
                                </h5>
                                <button id="left">
                                    Farm
                                </button>
                                <button id="right">
                                    Trade
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="animation-container">
                        <div className="animation-item main_box flex" style={{background:'#fff'}}>
                            <div className="animation-image boxes" style={{textAlign:'center'}}>
                                <img className="boxes_logo" src={`${process.env.PUBLIC_URL}/images/yffp_logo.png`} alt=""/>
                                <br />
                                <p>
                                    YFFP & ?"
                                </p>
                                <h5>
                                    Coming Soon%
                                </h5>
                                {/* <button id="left" style={{visibility:'hidden'}}>
                                    Farm
                                </button>
                                <button id="right" style={{visibility:'hidden'}}>
                                    Trade
                                </button> */}
                            </div>
                        </div>
                    </div>
                    
                    <div className="animation-container">
                        <div className="animation-item main_box flex" style={{background:'#f9f9f9'}}>
                            <div className="animation-image boxes" style={{textAlign:'center'}}>
                                <img className="boxes_logo" src={`${process.env.PUBLIC_URL}/images/yffp_logo.png`} alt=""/>
                                <br />
                                <p>
                                    YFFP & ?"
                                </p>
                                <h5>
                                    Coming Soon%
                                </h5>
                                {/* <button id="left" style={{visibility:'hidden'}}>
                                    Farm
                                </button>
                                <button id="right" style={{visibility:'hidden'}}>
                                    Trade
                                </button> */}
                            </div>
                        </div>
                    </div>
                    
                    <div className="animation-container">
                        <div className="animation-item main_box flex" style={{background:'#f1f1f1'}}>
                            <div className="animation-image boxes" style={{textAlign:'center'}}>
                                <img className="boxes_logo" src={`${process.env.PUBLIC_URL}/images/yffp_logo.png`} alt=""/>
                                <br />
                                <p>
                                    YFFP & ?"
                                </p>
                                <h5>
                                    Coming Soon%
                                </h5>
                                {/* <button id="left" style={{visibility:'hidden'}}>
                                    Farm
                                </button>
                                <button id="right" style={{visibility:'hidden'}}>
                                    Trade
                                </button> */}
                            </div>
                        </div>
                    </div>
                    
                </div>
                <Navigation />
            </header>
        </React.Fragment>
    )
}

export default Pool;
