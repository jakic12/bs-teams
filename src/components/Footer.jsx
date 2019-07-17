import React, { Component } from 'react'
import '../styles/footer.scss'
import BsLogo from '../res/img/BS logo_business solutions.png'
import NthLogo from '../res/img/NTH_LOGO.svg'
import SocLogoFb from '../res/img/icon_fb.svg'
import SocLogoIn from '../res/img/icon_in.svg'

export default class Footer extends Component{
    render(){
            return (
                <div className="footer">
                    <div className="containerWrapper">
                        <div className="contentRow">
                            <a className="linkIm" href = "https://www.b-s.si/si-si/homepage/"> <img src={ BsLogo } className="logo" /></a>  
                            <a className="linkIm" href = "https://www.talenthub.si/" ><img src={ NthLogo } className="logo"/></a>  
                        </div>
                        <div className="contentRow2">
                            <a className="linkIm" href = "https://www.facebook.com/BusinessSolutionsdoo/"><img src={ SocLogoFb } className="logoSoc" /></a>   
                            <a className="linkIm" href = "https://www.linkedin.com/company/business-solutions-d-o-o---bs-power-your-business"><img src={ SocLogoIn } className="logoSoc"/></a>
                        </div>
                        <div className="contentColumn">
                            <h3>PRODUKTI</h3>
                            <p>Microsoft Teams</p>
                            <p>PowerBI</p>
                        </div>
                    </div>
                    <div className="copyright">
                        <div className = "copyWrapper">
                            <div className="copyContent">
                                <p>&copy; 2018 Business Solution. All rights reserved.</p>
                            </div>
                            <div className="linkCon">
                               <a className="link" href = "#">Privacy</a> 
                            </div>
                            <div className="linkCon">
                               <a className="link" href = "#">Terms </a>
                            </div>
                            <div className="linkCon">
                               <a className="link" href = "#">Cookies</a> 
                            </div>

                        </div>    
                    </div>
                </div>
        )
    } 
}