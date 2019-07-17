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
                            <img src={ BsLogo } className="logo" href = "https://www.b-s.si/si-si/homepage/"/>  
                            <img src={ NthLogo } className="logo" href = "https://www.talenthub.si/" />  
                        </div>
                        <div className="contentRow2">
                            <img src={ SocLogoFb } className="logoSoc" href = "https://www.facebook.com/BusinessSolutionsdoo/"/>   
                            <img src={ SocLogoIn } className="logoSoc" href = "https://www.linkedin.com/company/business-solutions-d-o-o---bs-power-your-business"/>
                        </div>
                        <div className="contentColumn">
                            <h3>PRODUKTI</h3>
                            <p>Microsoft Teams</p>
                            <p>PowerBi</p>
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