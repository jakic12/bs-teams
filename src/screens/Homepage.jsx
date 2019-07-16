
import React, { Component } from 'react';
import Sponzors from '../components/Sponzors'

import ICON_AERO from '../res/img/references/ICON_AERO.svg'  
import ICON_AFIT from '../res/img/references/ICON_AFIT.svg'  
import ICON_AMZS from '../res/img/references/ICON_AMZS.svg'  
import ICON_CREANEST from '../res/img/references/ICON_CREANEST.svg'  
import ICON_CVS from '../res/img/references/ICON_CVS.svg'  
import ICON_DANA from '../res/img/references/ICON_DANA.svg'  
import ICON_GTG from '../res/img/references/ICON_GTG.svg'  
import ICON_INS_TECH from '../res/img/references/ICON_INS_TECH.svg'  
import ICON_MATJAZ from '../res/img/references/ICON_MATJAZ.svg'  
import ICON_MDM from '../res/img/references/ICON_MDM.svg'  
import ICON_TEKNO from '../res/img/references/ICON_TEKNO.svg'  
import ICON_TRGOTUR from '../res/img/references/ICON_TRGOTUR.svg'  
import IKON_NIVO from '../res/img/references/IKON_NIVO.svg'  

import AdvContainer from '../components/AdvContainer'

import screenImg from "../res/img/telefon_laptop_teams_mockup.png";
import storageLogo from "../res/img/onedrive-logo.png";
import mailLogo from "../res/img/mail-logo.png";
import excelLogo from "../res/img/excel-logo.png";
import powerpointLogo from "../res/img/powerpoint-logo.png";
import wordLogo from "../res/img/word-logo.png";
import teamsLogo from "../res/img/teams-logo.png";
import "../styles/home.scss";

import mochFeature1 from '../res/img/features_img/1_screenshot-CHAT1on1.png'
import mochFeature2 from '../res/img/features_img/2_screenshot-CHANNEL.png'
import mochFeature3 from '../res/img/features_img/3_screenshot-SESTANEK.png'
import mochFeature4 from '../res/img/features_img/4_screenshot-AKTIVNOSTI.png'
import mochFeature5 from '../res/img/features_img/5_screenshot-DATOTEKE.png'

import mochFeature1logo from '../res/img/features_logo/icon_chat.svg'
import mochFeature2logo from '../res/img/features_logo/icon_call.svg'
import mochFeature3logo from '../res/img/features_logo/icon_planer.svg'
import mochFeature4logo from '../res/img/features_logo/icon_app.svg'
import mochFeature5logo from '../res/img/features_logo/icon_clud.svg'

import coffeImage from '../res/img/camera-coffe.jpg'
import teamsImg from '../res/img/test-moch-image.png'
import TelefonLaptop from "../res/img/telefon_laptop.png"
import Telefon from "../res/img/telefon.png"

import PieChart from "../res/img/svg/graf_rdec.svg"

import Comparison from "../components/Comparison";
import FeatureScroll from "../components/FeatureScroll"
import BigImpact from "../components/BigImpact"
import FirstRow from "../components/FirstRow"
import Parallax from "../components/Parallax"
import FeatureList from "../components/FeatureList"
import Footer from "../components/Footer"
import Contacts from "../components/Contacts"
import TopBottomWave from "../components/TopBottomWave"
import SideImage from "../components/SideImage"

import iconCall from "../res/img/feature_icons/icon_call.svg"
import iconApp from "../res/img/feature_icons/icon_app.svg"
import iconChat from "../res/img/feature_icons/icon_chat.svg"
import iconCloud from "../res/img/feature_icons/icon_cloud.svg"
import iconPlanner from "../res/img/feature_icons/icon_planner.svg"


export default class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comparison: 0,
            featureScroll: 0,
            featuresList: 0,
            functionsView: 0,
            sideImageView: 0
        };
        this.track = null;
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.trackScrolling);
    }

    componentDidMount() {
        this.track = window.addEventListener('scroll', this.trackScrolling);
    }

    isTop = (el) => {
        return el.getBoundingClientRect().top <= window.innerHeight / 1.3;
    };

    isBottom = (el) => {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    };

    isMiddle = (el) => {
        return el.getBoundingClientRect().top <= window.innerHeight / 2.5;
    };

    trackScrolling = () => {
        const sideImageView = document.getElementById('sideImageView');
        const functionsView = document.getElementById('functionsView');

        this.getAnimationState(sideImageView, state => this.setState({sideImageView: state}));
        this.getAnimationState(functionsView, state => this.setState({functionsView: state}));

        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        console.log(scrolled);
    };

    getAnimationState = (element, callback) => {
        if (this.isTop(element)) callback(1);
        if (this.isMiddle(element)) callback(2);
        if (this.isBottom(element)) callback(3);
    };

    render(){
        return (
            <div style={{overflowX: "hidden"}}>
                <Parallax isMobile={this.props.isMobile}>
                    <FirstRow
                        title="PowerBi"
                        description={"Nunc ac sapien vulputate odio convallis posuere nec vitae magna." +
                        "In a efficitur ex, eget dictum elit. Nullam ac elit blandit, pharetra augue id, pulvinar\n ipsum."}
                        btnTitle="Klikni vec"
                        onClick={() => alert("You pressed a button!")}
                        bigLogo={TelefonLaptop}
                        smallLogo={Telefon}/>
                    <div>
                        <div style={{position:`relative`}}>
                            <div style={{position:`relative`}}>
                                <SideImage 
                                    id={'sideImageView'}
                                    image={PieChart}
                                    animationTriggerState={1}
                                    animationState={this.state.sideImageView}/>
                                <FeatureList
                                    id={"functionsView"}
                                    isMobile={this.props.isMobile}
                                    animationTriggerState={1}
                                    animationState={this.state.functionsView}
                                    title="Funkcije"
                                    style={{paddingBottom: 200}}
                                    subtitle="Hiter pregled nekaterih osnovnih funkcij:"
                                    content={[
                                        {icon: iconCall,    title:"Chat", desc:"Instantno posiljanje"},
                                        {icon: iconApp,     title:"Aplikacije", desc:"več kot xxx aplikacij na voljo"},
                                        {icon: iconChat,    title:"Cloud", desc:"dosegljivost datotek"},
                                        {icon: iconCloud,   title:"Feature 4", desc:"test"},
                                        {icon: iconPlanner, title:"Feature 5", desc:"Very short descri sit amet"},
                                    ]}
                                    image={coffeImage}
                                    buttonText={"FREE TRIAL"}
                                />
                            </div>
                            <AdvContainer />
                        </div>
                        <TopBottomWave>
                            <Sponzors sponzors={[
                                ICON_AERO,
                                ICON_AFIT,
                                ICON_AMZS,
                                ICON_CREANEST,
                                ICON_CVS,
                                ICON_DANA,
                                ICON_GTG,
                                ICON_INS_TECH,
                                ICON_MATJAZ,
                                ICON_MDM,
                                ICON_TEKNO,
                                ICON_TRGOTUR,
                                IKON_NIVO,
                            ]} isMobile={this.props.isMobile}/>
                            <Contacts />
                        </TopBottomWave>
                        <Footer />
                    </div>
                </Parallax>
            </div>
        )
    }
}
