import React, { Component } from 'react';
//import Button from '../components/Button';
import Sponzors from '../components/Sponzors'
import Ebs from '../res/img/spon_logo/ICON_EBS.svg' 
import insTech from '../res/img/spon_logo/ICON_INS_TECH.svg' 
import pronega from '../res/img/spon_logo/ICON_PRONEGA.svg' 

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

import Comparison from "../components/Comparison";
import FeatureScroll from "../components/FeatureScroll"
import BigImpact from "../components/BigImpact"
import FirstRow from "../components/FirstRow"
import Parallax from "../components/Parallax"
import Footer from "../components/Footer"
import Contacts from "../components/Contacts"


export default class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comparison: 0,
            featureScroll: 0,
            featuresList: 0,
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
        return el.getBoundingClientRect().top <= window.innerHeight;
    };

    isBottom = (el) => {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    };

    isMiddle = (el) => {
        return el.getBoundingClientRect().top <= window.innerHeight / 2.5;
    };

    trackScrolling = () => {
        const comparisonView = document.getElementById('comparisonView');
        const featureScroll = document.getElementById('featureScroll');
        const bigImpact = document.getElementById('bigImpact');
        this.getAnimationState(comparisonView, state => this.setState({comparison: state}));
        this.getAnimationState(featureScroll, state => this.setState({featureScroll: state}));
        this.getAnimationState(bigImpact, state => this.setState({featuresList: state}))
    };

    getAnimationState = (element, callback) => {
        if (this.isTop(element)) callback(1);
        if (this.isMiddle(element)) callback(2);
        if (this.isBottom(element)) callback(3);
    };
    render(){
        return (
            <div style={{overflowX: "hidden"}}>
                <Parallax>
                    <FirstRow
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        description={"Nunc ac sapien vulputate odio convallis posuere nec vitae magna." +
                        "In a efficitur ex, eget dictum elit. Nullam ac elit blandit, pharetra augue id, pulvinar ipsum." +
                        "Maecenas vel libero odio. Mauris vehicula neque ex, in malesuada purus luctus sit amet."}
                        btnTitle="Klikni vec"
                        onClick={() => alert("You pressed a button!")}
                        bigLogo={TelefonLaptop}
                        smallLogo={Telefon}/>
                    <div> 
                        <Comparison
                            id={"comparisonView"}
                            style={{padding: 20}}
                            isMobile={this.props.isMobile}
                            title={"Vsa orodja v enem"}
                            description={"Microsoft teams zdruzuje vsa Microsoftova orodja za komunikacijo, shranjevanje in management v novo orodje ki vkljucuje vse v enem bla bla..."}
                            animationState={this.state.comparison}
                            leftIconsSize={100}
                            rightIconsSize={200}
                            teamsLogo={teamsLogo}
                            config={[
                                {img: mailLogo, name: "drive"},
                                {img: wordLogo, name: "word"},
                                {img: excelLogo, name: "calendar"},
                                {img: powerpointLogo, name: "power points"},
                                {img: storageLogo, name: "drive"}
                            ]}/>
                        <FeatureScroll
                            id={"featureScroll"}
                            animationState={this.state.featureScroll}
                            features={[
                                {screenshot:mochFeature1, title:"chat", icon:mochFeature1logo},
                                {screenshot:mochFeature2, title:"channel", icon:mochFeature2logo},
                                {screenshot:mochFeature3, title:"sestanek", icon:mochFeature3logo},
                                {screenshot:mochFeature4, title:"aktivnosti", icon:mochFeature4logo},
                                {screenshot:mochFeature5, title:"datoteke", icon:mochFeature5logo}
                            ]}
                            moreLinkText={
                                "view more features"
                            }
                            morePath={
                                `#`
                            }
                            isMobile={this.props.isMobile}
                        />
                        <BigImpact
                            id={"bigImpact"}
                            title="Product Features"
                            subtitle="Nekaj funkcij, ki jih je X zmozen opravljati:"
                            content={[
                                {title:"Feature 1", desc:"Very short description lorem ipsum dor sit amet"},
                                {title:"Feature 2", desc:"Very short description lorem ipsum dor sit amet"},
                                {title:"Feature 3", desc:"Very short description lorem ipsum dor sit amet"},
                                {title:"Feature 4", desc:"Very short description lorem ipsum dor sit amet"},
                                {title:"Feature 5", desc:"Very short description lorem ipsum dor sit amet"},
                                {title:"Feature 6", desc:"Very short description lorem ipsum dor sit amet"}
                            ]}
                            image={coffeImage}
                            buttonText={"FREE TRIAL"}
                        />
                        <Sponzors sponzors={[
                            Ebs,
                            insTech,
                            pronega
                        ]}/>
                        <Contacts />
                        <Footer />
                    </div>
                </Parallax>
            </div>
        )
    }
}