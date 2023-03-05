import React from "react";
import './Footer.css';

function Footer(){
    return(
        <div className="footer">
            <div className="subFooter">
                <img src='/Assets/jmrLogo.png' alt='jmrLogo'></img>
            </div>
            <div className="subFooter">
                
            </div>
            <div className="credits">
                <span className="cspan1">Designed & Developed</span><br></br><span className="cspan2">by</span><br></br>
                <span className='cspan3'>Untitled_1.<span className="cspan31">txt</span></span><br></br><span className="cspan4">&</span><br></br>
                <span className="cspan5">MG Creations</span>
            </div>
        </div>
    );
}

export default Footer;