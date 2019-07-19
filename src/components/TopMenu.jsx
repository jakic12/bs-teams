import React, { Component } from 'react'
import '../styles/topMenu.scss'
import bslogo from '../res/img/bs_power_bel_croped.png'
import { Link } from 'react-router-dom';
import { PerspectiveX } from 'react-burgers'

class TopMenu extends Component{
    constructor(props){
        super(props)

        this.state = {
            menuOpen:false
        }
    }
    render(){
        const logo = <div key={`topLogo`} className="topBarBlock">
            <Link onClick={() => {this.setState({menuOpen:false})}} className="topLink" to="/">
                <img className="bslogo" src={bslogo} alt="Business Solutions logo"/>
            </Link>
        </div>
        const blocks = <React.Fragment>
            <div className="topBarBlock">
                <div className="topLinkWrapper">
                    <Link onClick={() => {this.setState({menuOpen:false})}} className="topLink" to="/">Domov</Link>
                </div>
            </div>
        </React.Fragment>

        return (
            <div className={`topBar ${(this.state.menuOpen && this.props.isMobile) && `menuOpen`}`} style={this.props.style}>
                <div className="innerBarWrapper">
                    <div className="innerBar">
                        {this.props.isMobile? <React.Fragment>
                            <div className="logo">
                                {logo}
                            </div>
                            <div className="topBarButton">
                                <PerspectiveX
                                    color='#fff'
                                    active={this.state.menuOpen}
                                    onClick={() => {
                                        this.setState(({ menuOpen }) => ({ menuOpen: !menuOpen }))
                                    }}
                                />
                            </div>
                        </React.Fragment> : [logo, blocks]}
                    </div>
                </div>
                
                        {this.props.isMobile &&
                        <div className={`blocks`}>
                            <div className="innerBarWrapper">
                                <div className="innerBar">
                                    {blocks}
                                </div>
                            </div>
                        </div>}
                    
            </div>
        )
    }
}

export default TopMenu;