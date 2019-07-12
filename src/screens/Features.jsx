import React, { Component } from 'react';
import FeatureView from "../components/FeatureView";
import FeaturesLandingView from '../components/FeaturesLandingView';
import teamsImg from "../res/img/test-moch-image.png";
import demoVideo from "../res/video/CHAT_DEMO_FINAL.mov";
import Telefon from "../res/img/telefon - Copy.png"

import checkboxIcon from "../res/img/checkbox-icon.png";
import Parallax from "../components/Parallax";
import FirstRow from "../components/FirstRow";

class Features extends Component{

    constructor(props) {
        super(props);
        this.track = null;
        this.state = {
            featureViewFirst: 0,
            featureViewSecond: 0,
            featureViewThird: 0
        }
    }

    componentDidMount() {
        this.track = window.addEventListener('scroll', this.trackScrolling);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.trackScrolling);
    }

    isTop = (el) => {
        return el.getBoundingClientRect().top <= window.innerHeight / 6;
    };

    isBottom = (el) => {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    };

    isMiddle = (el) => {
        return el.getBoundingClientRect().top <= window.innerHeight / 2.5;
    };

    trackScrolling = () => {
        const featureView = document.getElementById('featureViewFirst');
        const lefRightFirst = document.getElementById('featureViewSecond');
        const leftRightSecond = document.getElementById('featureViewThird');
        this.getAnimationState(featureView, state => this.setState({featureViewFirst: state}));
        this.getAnimationState(lefRightFirst, state => this.setState({featureViewSecond: state}));
        this.getAnimationState(leftRightSecond, state => this.setState({featureViewThird: state}))
    };

    getAnimationState = (element, callback) => {
        if (this.isTop(element)) callback(1);
        if (this.isMiddle(element)) callback(2);
        if (this.isBottom(element)) callback(3);
    };

    render(){
        return (
            <div>
                <Parallax resizeHeightBy={'50vh'}>
                    <FeaturesLandingView
                        logo={Telefon}
                        title="Get all the tools you need to make teamwork a breeze"/>
                        <div>
                            <FeatureView
                                id={"featureViewFirst"}
                                triggerValue={-1}
                                title={"What is Lorem Ipsum?"}
                                icon={checkboxIcon}
                                video={demoVideo}
                                isMobile={this.props.isMobile}
                                animationState={this.state.featureViewFirst}
                                textItems={[
                                    "Ustvarjanje skupin in podskupin",
                                    "Hitro iskanje vsebin in pogovorov",
                                    "Odgovarjanje na posamezna sporočila"
                                ]}
                                flip={true}
                            />
                            <FeatureView
                                id={"featureViewSecond"}
                                triggerValue={1}
                                title={"What is Lorem Ipsum?"}
                                style={{backgroundColor: '#f6f7f9'}}
                                icon={checkboxIcon}
                                video={demoVideo}
                                isMobile={this.props.isMobile}
                                animationState={this.state.featureViewSecond}
                                textItems={[
                                    "Ustvarjanje skupin in podskupin",
                                    "Hitro iskanje vsebin in pogovorov",
                                    "Odgovarjanje na posamezna sporočila"
                                ]}
                                flip={false}
                            />
                            <FeatureView
                                id={"featureViewThird"}
                                triggerValue={1}
                                title={"What is Lorem Ipsum?"}
                                icon={checkboxIcon}
                                video={demoVideo}
                                isMobile={this.props.isMobile}
                                animationState={this.state.featureViewThird}
                                textItems={[
                                    "Ustvarjanje skupin in podskupin",
                                    "Hitro iskanje vsebin in pogovorov",
                                    "Odgovarjanje na posamezna sporočila"
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