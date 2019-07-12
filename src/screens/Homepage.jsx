
import React, { Component } from 'react';
//import Button from '../components/Button';
import Sponzors from '../components/Sponzors'
import MsLogo from '../res/img/gold_microsoft_logo.png' 
import Kepion from '../res/img/kepion_logo.png' 
import MagentoLogo from '../res/img/magento_logo.png' 
import UmbracoLogo from '../res/img/umbraco_logo.png' 
import AdvContainer from '../components/AdvContainer'

import screenImg from "../res/img/telefon_laptop_teams_mockup.png";
import storageLogo from "../res/img/onedrive-logo.png";
import mailLogo from "../res/img/mail-logo.png";
import excelLogo from "../res/img/excel-logo.png";
import powerpointLogo from "../res/img/powerpoint-logo.png";
import wordLogo from "../res/img/word-logo.png";
import teamsLogo from "../res/img/teams-logo.png";
import "../styles/home.scss";

import mochFeature1 from '../res/img/moch-feature-1.png'
import mochFeature1logo from '../res/img/moch-feature-1-logo.png'
import mochFeature2 from '../res/img/moch-feature-2.png'
import mochFeature2logo from '../res/img/moch-feature-2-logo.png'
import coffeImage from '../res/img/camera-coffe.jpg'
import teamsImg from '../res/img/test-moch-image.png'
import TelefonLaptop from "../res/img/telefon_laptop.png"
import Telefon from "../res/img/telefon.png"

import Comparison from "../components/Comparison";
import FeatureScroll from "../components/FeatureScroll"
import BigImpact from "../components/BigImpact"
import FirstRow from "../components/FirstRow"
import Parallax from "../components/Parallax"
import FeatureList from "../components/FeatureList"
import Footer from "../components/Footer"
import Contacts from "../components/Contacts"

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
                        <FeatureList 
                            id={"bigImpact"}
                            title="Funkcije"
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
                                {screenshot:mochFeature1, title:"Amazing callssdsd", icon:mochFeature1logo},
                                {screenshot:mochFeature2, title:"Cool groups", icon:mochFeature2logo},
                                {screenshot:mochFeature1, title:"I have no idea", icon:mochFeature1logo},
                                {screenshot:mochFeature2, title:"Works like a charm and a half", icon:mochFeature2logo},
                                {screenshot:mochFeature1, title:"I have no idea", icon:mochFeature1logo}
                            ]}
                            moreLinkText={
                                "view more features"
                            }
                            morePath={
                                `#`
                            }
                            isMobile={this.props.isMobile}
                        />
                    </div>
                </Parallax>
            </div>
        )
    }
}
