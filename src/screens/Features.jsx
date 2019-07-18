import React, { Component } from 'react';
import FeatureView from "../components/FeatureView";
import FeaturesLandingView from '../components/FeaturesLandingView';
import teamsImg from "../res/img/test-moch-image.png";
import demoVideo from "../res/video/CHAT_DEMO_FINAL.mov";
import demoVideo2 from "../res/video/GROUPCHAT_DEMO_FINAL.mov";
import demoVideo3 from "../res/video/MEETINGS_DEMO_FINAL.mov";
import demoVideo4 from "../res/video/FILES_DEMO_FINAL.mov";
import demoVideo5 from "../res/video/CALLS_DEMO_FINAL.mov";
import Telefon from "../res/img/telefon - Copy.png"
import redPlanet from '../res/img/planets/planet_small_red.svg'

import checkboxIcon from "../res/img/checkbox-icon.png";
import Parallax from "../components/Parallax";
import FirstRow from "../components/FirstRow";
import Planets from "../components/Planets";
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopBottomWave from "../components/TopBottomWave";
import Sponzors from "../components/Sponzors";
import Ebs from "../res/img/spon_logo/ICON_EBS.svg";
import insTech from "../res/img/spon_logo/ICON_INS_TECH.svg";
import pronega from "../res/img/spon_logo/ICON_PRONEGA.svg";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Button from '../components/Button';
import $ from "jquery";

class Features extends Component{

    constructor(props) {
        super(props);
        this.track = null;
        this.state = {
            featureViewFirst: 0,
            featureViewSecond: 0,
            featureViewThird: 0,
            featureViewFourth: 0,
            featureViewFifth: 0,
            planetView: 0
        }
    }

    componentDidMount() {
        AOS.init({
            duration: 2000
        })
    }

    render(){
        return (
            <div>
                <Parallax resizeHeightBy={'70vh'}>
                    <FeaturesLandingView
                        logo={Telefon}
                        subtitle={"Imejte vsa orodja za tekoče delo na enem mestu."}
                        title="Imejte vsa orodja za tekoče delo na enem mestu."/>
                        <div>
                          <Button
                            style={this.props.isMobile ? {display: 'none'} : {marginLeft: 100}}
                            title={'Pokazi vec'}
                            onClick={() => {
                              $([document.documentElement, document.body]).animate({
                                scrollTop: $("#featureViewFirst").offset().top
                              }, 1000);
                            }}/>
                          <Planets
                            style={{bottom: 0, right: 0, top: -200}}
                            width={'30vw'}
                            id={'planetView'}
                            image={redPlanet}/>
                            <div style={this.props.isMobile ? {} : {marginTop: 200}} data-aos='fade-up' data-aos-anchor-placement="top-bottom">
                                <FeatureView
                                    id={"featureViewFirst"}
                                    animationTriggerState={1}
                                    title={"Klepet"}
                                    icon={checkboxIcon}
                                    video={demoVideo}
                                    isMobile={this.props.isMobile}
                                    animationState={this.state.featureViewFirst}
                                    textItems={[
                                        "Učinkovita komunikacija",
                                        "Hiter klepet s posamezniki ali v skupini",
                                        "Prikaz dosegljivosti osebe",
                                        "Enostavno deljenje datotek"
                                    ]}
                                    flip={true}
                                />
                            </div>
                            <div data-aos='fade-up' data-aos-anchor-placement="top-bottom">
                                <FeatureView
                                    id={"featureViewSecond"}
                                    animationTriggerState={1}
                                    title={"Skupine in kanali"}
                                    style={{backgroundColor: '#f6f7f9'}}
                                    icon={checkboxIcon}
                                    video={demoVideo2}
                                    isMobile={this.props.isMobile}
                                    animationState={this.state.featureViewSecond}
                                    textItems={[
                                        "Delitev po ekipah, oddelkih in projektih",
                                        "Vsaka ekipa ima svoje kanale",
                                        "Jasna delitev skupin",
                                        "Prikaz vseh kanalov v katerih je posameznik prisoten"
                                    ]}
                                    flip={false}
                                />
                            </div>
                            <div data-aos='fade-up' data-aos-anchor-placement="top-bottom">
                                <FeatureView
                                    id={"featureViewThird"}
                                    animationTriggerState={1}
                                    title={"Planiranje (Sestanki, Dogodki)"}
                                    icon={checkboxIcon}
                                    video={demoVideo3}
                                    isMobile={this.props.isMobile}
                                    animationState={this.state.featureViewThird}
                                    textItems={[
                                        "Planiranje sestankov glede na zasedenost ostalih članov",
                                        "Pregled dnevnega reda",
                                        "Ustvarjanje sestanka v povezavi s točno določenim kanalom",
                                        "Sprotni zapiski sestanka in deljene datoteke"
                                    ]}
                                    flip={true}
                                />
                            </div>
                            <div data-aos='fade-up' data-aos-anchor-placement="top-bottom">
                                <FeatureView
                                    id={"featureViewFourth"}
                                    title={"Datoteke"}
                                    style={{backgroundColor: 'f6f7f9'}}
                                    icon={checkboxIcon}
                                    video={demoVideo4}
                                    isMobile={this.props.isMobile}
                                    textItems={[
                                        "Shranjevanje vseh datotek na enem mestu (SharePoint)",
                                        "1TB prostora v oblaku za shranjevanje na uporabnika",
                                        "Deljenje s skupino ali posameznikom",
                                        "Skupno urejanje datotek znotraj aplikacije"
                                    ]}
                                    flip={false}
                                />
                            </div>
                            <div data-aos='fade-up' data-aos-anchor-placement="top-bottom">
                                <FeatureView
                                    id={"featureViewFifth"}
                                    animationTriggerState={1}
                                    title={"Avdio in video klici"}
                                    icon={checkboxIcon}
                                    video={demoVideo5}
                                    isMobile={this.props.isMobile}
                                    animationState={this.state.featureViewFifth}
                                    textItems={[
                                        "Skupinski in posamezni video klici",
                                        "Telefonske konference",
                                        "Možnost opravljanja sestankov na daljavo",
                                        "Pridruževanje skupinskim pogovorom in sestankom"
                                    ]}
                                    flip={true}
                                />
                            </div>
                            <TopBottomWave>
                                <div/>
                                <Contacts />
                            </TopBottomWave>
                            <Footer />
                        </div>
                </Parallax>
            </div>
        )
    }
}

export default Features;