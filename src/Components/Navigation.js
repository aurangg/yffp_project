import React from 'react';
import { Link, Events, animateScroll as scroll, scroller } from 'react-scroll';
import './major.css';

class Navigation extends React.Component{
    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
      }
      componentDidMount() {

        Events.scrollEvent.register('begin', function () {
          console.log("begin", arguments);
        });
    
        Events.scrollEvent.register('end', function () {
          console.log("end", arguments);
        });
    
      }
      scrollToTop() {
        scroll.scrollToTop();
      }
      scrollTo() {
        scroller.scrollTo('scroll-to-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
      }
      
      componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
      }
    render(){
        return(
            <div id="Nav" className="header-third navigations">
                <nav className="navigation">
                    <div className="navigation-item">
                        <div className="navigation-subtext">
                            Social Media
                        </div>
                    </div>
                    <div className="navigation-item" style={{marginBottom:'10px'}}>
                        {/* <Link activeClass="active" className="navigation-link" href=""  to="home" spy={true} smooth={true} duration={500}>
                            Home
                        </Link>*/}
                        <img src={`${process.env.PUBLIC_URL}/images/twitter.png`} alt="twitter" style={{width:'40px', height:'40px'}}></img>
                    </div>
                    <div className="navigation-item" style={{marginBottom:'10px'}}>
                        
                        {/* <Link activeClass="active" className="navigation-link" to="pool" href="" spy={true} smooth={true} duration={500}>Pools</Link> */}
                        <img src={`${process.env.PUBLIC_URL}/images/telegram.png`} alt="telegram" style={{width:'40px', height:'40px'}}></img>
                    </div>
                    <div className="navigation-item" style={{marginBottom:'10px'}}>
                        {/* <div className="navigation-subtext">
                            c
                        </div> */}
                        {/* <Link activeClass="active" className="navigation-link" to="staking" href="" spy={true} smooth={true} duration={500}>Staking</Link> */}
                        <img src={`${process.env.PUBLIC_URL}/images/uniswap.png`} alt="uniswap" style={{width:'40px', height:'40px'}}></img>
                    </div>
                    <div className="navigation-item" style={{marginBottom:'10px'}}>
                        <img src={`${process.env.PUBLIC_URL}/images/contract.png`} alt="contract" style={{width:'40px', height:'40px'}}></img>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navigation;