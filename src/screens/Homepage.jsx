
import React, { Component } from 'react';
import Sponzors from '../components/Sponzors'
import Ebs from '../res/img/spon_logo/ICON_EBS.svg' 
import insTech from '../res/img/spon_logo/ICON_INS_TECH.svg' 
import pronega from '../res/img/spon_logo/ICON_PRONEGA.svg' 
import AOS from 'aos';
import 'aos/dist/aos.css';

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
import Laptop from "../res/img/LAPTOP_MOCKUP.png"
import Telefon from "../res/img/TELEFON_MOCKUP.png"
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

import ecosystem from "../res/img/adv_icons/ecosystem.svg"
import sharepoint from "../res/img/adv_icons/sharepoint.svg"
import skupnoUrejanje from "../res/img/adv_icons/skupno_urejanje.svg"

import $ from 'jquery'


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
        AOS.init({
            duration: 2000
        })
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
        const comparisonView = document.getElementById('comparisonView');

        this.getAnimationState(comparisonView, state => this.setState({comparison: state}));
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
                        description={<div>Kako upravljati komunikacijo, deljenje in hrambo datotek ter 
                        splošno organizacijo vaše ekipe vse na enem mestu?<br />
                        Enostavno.</div>}
                        btnTitle="Klikni vec"
                        onClick={() => {
                            $('#parallaxer').css(`transition`, `none`);
                            $([document.documentElement, document.body]).animate({
                                scrollTop: $("#planetsView").offset().top
                            }, 1000, `swing`, () =>{
                                $('#parallaxer').css(`transition`, `transform 0.1s ease-out`);
                            });
                        }}
                        bigLogo={Laptop}
                        smallLogo={Telefon}
                        style={{height:`100%`}}/>
                    <div>
                        <div style={{position:`relative`}}>
                            <div data-aos='fade-up-left' data-aos-anchor-placement="bottom-bottom">
                                <Planets
                                    id={'planetsView'}
                                    style={{top: -200}}
                                    width={'35vw'}
                                    image={redPlanet}/>
                            </div>
                            <div data-aos='fade-up-left' data-aos-anchor-placement="bottom-bottom">
                                <Planets
                                    id={'planetsView'}
                                    style={{top: 350, right: 0}}
                                    width={'20vw'}
                                    image={moon}/>
                            </div>
                            <div data-aos='fade-up' data-aos-anchor-placement="bottom-bottom">
                                <FeatureList
                                    id={"functionsView"}
                                    isMobile={this.props.isMobile}
                                    animationTriggerState={1}
                                    animationState={this.state.functionsView}
                                    title="Prednosti"
                                    style={{paddingBottom: 200}}
                                    subtitle="Hiter pregled nekaterih osnovnih funkcij:"
                                    content={[
                                        {icon: ecosystem,    title:"Microsoftov ekosistem", desc:"povezljivost in varnost"},
                                        {icon: skupnoUrejanje,     title:"Dokumentni sistem", desc:"skupno urejanje in dosegljivost datotek"},
                                        {icon: sharepoint,    title:"Sharepoint site", desc:"hramba datotek v oblaku"},
                                    ]}
                                    image={coffeImage}
                                    buttonText={"Kontaktirajte nas!"}
                                />
                            </div>
                        </div>
                        <div data-aos='fade-up' data-aos-anchor-placement="top-bottom">
                            <FeatureScroll
                                id={"featureScroll"}
                                style={{paddingBottom: 200}}
                                features={[
                                    {screenshot:mochFeature1, title:"Klepet - učinkovita komunikacija", icon:mochFeature1logo},
                                    {screenshot:mochFeature2, title:"Skupni klepet v kanalih", icon:mochFeature2logo},
                                    {screenshot:mochFeature3, title:"Načrtovanje sestankov", icon:mochFeature3logo},
                                    {screenshot:mochFeature4, title:"Sledenje vsem aktivnostim", icon:mochFeature4logo},
                                    {screenshot:mochFeature5, title:"Oblak - deljenje in hramba datotek", icon:mochFeature5logo}
                                ]}
                                moreLinkText={"Več lastnosti."}
                                morePath={`#`}
                                isMobile={this.props.isMobile}
                            />
                        </div>
                        <div data-aos='fade-up' data-aos-anchor-placement="bottom-bottom">
                            <Comparison
                                id={"comparisonView"}
                                style={{padding: 20}}
                                isMobile={this.props.isMobile}
                                title={"Vsa orodja v enem"}
                                description={"Klepetajte posamezno ali v skupini, ustvarite kanale za posamezne projekte ali oddelke, shranjujte in urejajte datoteke v oblaku. " +
                                "Vse kar potrebujete za celovito komunikacijo."}
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
                        </div>
                        <TopBottomWave isMobile={this.props.isMobile}>
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
