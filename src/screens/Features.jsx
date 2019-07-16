import React, { Component } from 'react';
import FeatureView from "../components/FeatureView";
import FeaturesLandingView from '../components/FeaturesLandingView';
import teamsImg from "../res/img/test-moch-image.png";
import demoVideo from "../res/video/CHAT_DEMO_FINAL.mov";
import Telefon from "../res/img/telefon - Copy.png"
import redPlanet from '../res/img/planets/planet_small_red.svg'

import checkboxIcon from "../res/img/checkbox-icon.png";
import Parallax from "../components/Parallax";
import FirstRow from "../components/FirstRow";
import Planets from "../components/Planets";

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
        this.track = window.addEventListener('scroll', this.trackScrolling);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.trackScrolling);
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
        const planetView = document.getElementById('planetView');
        const featureView = document.getElementById('featureViewFirst');
        const lefRightFirst = document.getElementById('featureViewSecond');
        const leftRightSecond = document.getElementById('featureViewThird');
        const leftRightThird = document.getElementById('featureViewFourth');
        const leftRightFourth = document.getElementById('featureViewFifth');

        this.getAnimationState(planetView, state => this.setState({planetView: state}));
        this.getAnimationState(featureView, state => this.setState({featureViewFirst: state}));
        this.getAnimationState(lefRightFirst, state => this.setState({featureViewSecond: state}));
        this.getAnimationState(leftRightSecond, state => this.setState({featureViewThird: state}));
        this.getAnimationState(leftRightThird, state => this.setState({featureViewFourth: state}));
        this.getAnimationState(leftRightFourth, state => this.setState({featureViewFifth: state}))
    };

    getAnimationState = (element, callback) => {
        if (this.isTop(element)) callback(1);
        if (this.isMiddle(element)) callback(2);
        if (this.isBottom(element)) callback(3);
    };

    render(){
        return (
            <div>
                <Parallax resizeHeightBy={'70vh'}>
                    <FeaturesLandingView
                        logo={Telefon}
                        title="Imejte vsa orodja za tekoče delo na enem mestu."/>
                        <div>
                            <Planets
                                id={'planetView'}
                                style={{padding: 60, width: '10%'}}
                                firstImage={redPlanet}
                                animationTriggerState={-1}
                                animationState={this.state.planetView}/>
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
                            <FeatureView
                                id={"featureViewSecond"}
                                animationTriggerState={1}
                                title={"Skupine in kanali"}
                                style={{backgroundColor: '#f6f7f9'}}
                                icon={checkboxIcon}
                                video={demoVideo}
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
                            <FeatureView
                                id={"featureViewThird"}
                                animationTriggerState={1}
                                title={"Planiranje (Sestanki, Dogodki)"}
                                icon={checkboxIcon}
                                video={demoVideo}
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
                            <FeatureView
                                id={"featureViewFourth"}
                                animationTriggerState={1}
                                title={"Datoteke"}
                                style={{backgroundColor: 'f6f7f9'}}
                                icon={checkboxIcon}
                                video={demoVideo}
                                isMobile={this.props.isMobile}
                                animationState={this.state.featureViewFourth}
                                textItems={[
                                    "Shranjevanje vseh datotek na enem mestu (SharePoint)",
                                    "1TB prostora v oblaku za shranjevanje na uporabnika",
                                    "Deljenje s skupino ali posameznikom",
                                    "Skupno urejanje datotek znotraj aplikacije"
                                ]}
                                flip={false}
                            />
                            <FeatureView
                                id={"featureViewFifth"}
                                animationTriggerState={1}
                                title={"Avdio in video klici"}
                                icon={checkboxIcon}
                                video={demoVideo}
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
                </Parallax>
            </div>
        )
    }
}

export default Features;