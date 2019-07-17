
import React, { Component, Suspense } from 'react';
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

import $ from 'jquery'
const PowerBIpreview = React.lazy(() => import("../components/PowerBIpreview"))


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
                        title="Power BI"
                        description={`Microsoftovo orodje Power BI je rešitev za poslovno analitiko, ki vam omogoča vizualizacijo vaših podatkov in izmenjavo izkušenj v vaši organizaciji ali pa jih vdelate v aplikacijo ali spletno stran. Povežite se s stotinami podatkovnih virov in oživite svoje podatke z nadzornimi ploščami in poročili v živo.
                        Power BI je poslovna analitična storitev, ki omogoča vizualizacijo in analizo podatkov za uspešno vodenje vašega podjetja.`}
                        btnTitle="Klikni vec"
                        onClick={() => {
                            $('#parallaxer').css(`transition`, `none`);
                            $([document.documentElement, document.body]).animate({
                                scrollTop: $("#bottom_parallax").offset().top
                            }, 1000, `swing`, () =>{
                                $('#parallaxer').css(`transition`, `transform 0.1s ease-out`);
                            });
                        }}
                        bigLogo={TelefonLaptop}
                        smallLogo={Telefon}
                        style={{height:`100%`}}/>
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
                                        {icon: iconCall,    title:"Vsi vaši podatki, kjerkoli so", desc:"Excelove preglednice, Navision storitve v oblaku, pretakanje podatkov in lokalne podatkovne baze - ne glede na to, kje so podatki ali v kakšni obliki so, dobite celovit pregled ključnih meritev za vaše podjetje."},
                                        {icon: iconApp,     title:"Bodite obveščeni - vedno v realnem času", desc:"Takoj veste, kdaj vaše podjetje potrebuje vašo pozornost z nadzornimi ploščami Power BI v realnem času. Rešite težave in izkoristite priložnosti takoj, ko se pojavijo."},
                                        {icon: iconChat,    title:"Zagotovite napredne analitike z domačnostjo Excela", desc:"Raziskujte podatke in poiščite vzorce, ki ste jih sicer zamudili. Naprednim uporabnikom daje popoln nadzor nad svojim modelom z uporabo DAX jezika. Če poznate Excel, se boste v Power BI počutili kot doma."},
                                        {icon: iconCloud,   title:"Delite svoje predstavitve na svoji spletni strani ali blogu", desc:"Prikažite svoje podatke s storitvijo Power BI tudi na svoji spletni strani. Združite svoje podatkovne vire, z lahkoto ustvarite osupljive vizualizacije in v nekaj minutah vstavite svoje predstavitve na spletno stran."},
                                        //{icon: iconPlanner, title:"Feature 5", desc:"Very short descri sit amet"},
                                    ]}
                                    image={coffeImage}
                                    buttonText={"FREE TRIAL"}
                                />



                            </div>
                            <AdvContainer id={"advContainer"} />

                            {(!this.props.isMobile) &&
                                <Suspense fallback={<div>loading...</div>}>
                                    <PowerBIpreview  display={document.getElementById("advContainer") && this.isTop(document.getElementById("advContainer"))}/>
                                </Suspense>
                            }

                            <TopBottomWave isMobile = {this.props.isMobile}>
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
                    </div>
                </Parallax>
            </div>
        )
    }
}
