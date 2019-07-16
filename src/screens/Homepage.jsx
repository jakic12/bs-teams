
import React, { Component } from 'react';
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
import redPlanet from '../res/img/planets/planet_big_red.svg'
import moon from '../res/img/planets/planet_small_gray.svg'

import Comparison from "../components/Comparison";
import FeatureScroll from "../components/FeatureScroll"
import BigImpact from "../components/BigImpact"
import FirstRow from "../components/FirstRow"
import Parallax from "../components/Parallax"
import FeatureList from "../components/FeatureList"
import Footer from "../components/Footer"
import Contacts from "../components/Contacts"
import TopBottomWave from "../components/TopBottomWave"
import Planets from "../components/Planets"

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
            planetsView: 0
        };
        this.track = null;
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.trackScrolling);
    }

    componentDidMount() {
        this.track = window.addEventListener('scroll', this.trackScrolling);
    }

    isInvisible = (el) => {
      return (!this.isTop(el) && !this.isMiddle(el) && !this.isBottom(el));
    };

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
        const planetsView = document.getElementById('planetsView');
        const functionsView = document.getElementById('functionsView');
        const comparisonView = document.getElementById('comparisonView');
        const featureScroll = document.getElementById('featureScroll');

        console.log('IS_FUNCTIONS_TOP ', this.isTop(comparisonView));
        console.log('IS_FUNCTIONS_MIDDLE ', this.isMiddle(comparisonView));
        console.log('IS_FUNCTIONS_BOTTOM ', this.isBottom(comparisonView));

        this.getAnimationState(planetsView, state => this.setState({planetsView: state}));
        this.getAnimationState(functionsView, state => this.setState({functionsView: state}));
        this.getAnimationState(comparisonView, state => this.setState({comparison: state}));
        this.getAnimationState(featureScroll, state => this.setState({featureScroll: state}));
    };

    getAnimationState = (element, callback) => {
        if (this.isInvisible(element)) callback(0);
        if (this.isTop(element)) callback(1);
        if (this.isMiddle(element)) callback(2);
        if (this.isBottom(element)) callback(3);
    };

    render(){
        return (
            <div style={{overflowX: "hidden"}}>
                <Parallax isMobile={this.props.isMobile}>
                    <FirstRow
                        title="Microsoft Teams"
                        description={"Nunc ac sapien vulputate odio convallis posuere nec vitae magna." +
                        "In a efficitur ex, eget dictum elit. Nullam ac elit blandit, pharetra augue id, pulvinar ipsum."}
                        btnTitle="Klikni vec"
                        onClick={() => alert("You pressed a button!")}
                        bigLogo={TelefonLaptop}
                        smallLogo={Telefon}/>
                    <div>
                        <div style={{position:`relative`}}>
                            <Planets
                                id={'planetsView'}
                                firstImage={redPlanet}
                                secondImage={moon}
                                style={{top: '-20%', left: '60%'}}
                                animationTriggerState={1}
                                animationState={this.state.planetsView}/>
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
                        <FeatureScroll
                            id={"featureScroll"}
                            style={{paddingBottom: 200}}
                            animationTriggerState={1}
                            animationState={this.state.featureScroll}
                            features={[
                                {screenshot:mochFeature1, title:"chat", icon:mochFeature1logo},
                                {screenshot:mochFeature2, title:"channel", icon:mochFeature2logo},
                                {screenshot:mochFeature3, title:"sestanek", icon:mochFeature3logo},
                                {screenshot:mochFeature4, title:"aktivnosti", icon:mochFeature4logo},
                                {screenshot:mochFeature5, title:"datoteke", icon:mochFeature5logo}
                            ]}
                            moreLinkText={"view more features"}
                            morePath={`#`}
                            isMobile={this.props.isMobile}
                        />
                        <Comparison
                            id={"comparisonView"}
                            style={{padding: 20}}
                            isMobile={this.props.isMobile}
                            title={"Vsa orodja v enem"}
                            description={"Microsoft teams zdruzuje vsa Microsoftova orodja za komunikacijo, shranjevanje in management v novo orodje ki vkljucuje vse v enem bla bla..."}
                            animationState={this.state.comparison}
                            topAnimationTriggerState={0}
                            bottomAnimationTriggerState={2}
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
                        <TopBottomWave>
                            <Sponzors sponzors={[
                                Ebs,
                                insTech,
                                pronega
                            ]}/>
                            <Contacts />
                        </TopBottomWave>
                        <Footer />
                    </div>
                </Parallax>
            </div>
        )
    }
}
