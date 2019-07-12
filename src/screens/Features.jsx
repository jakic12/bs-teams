import React, { Component } from 'react';
import FeatureView from "../components/FeatureView";
import teamsImg from "../res/img/test-moch-image.png";
import demoVideo from "../res/video/CHAT_DEMO_FINAL.mov";

import checkboxIcon from "../res/img/checkbox-icon.png";

class Features extends Component{

    constructor(props) {
        super(props);
        this.track = null;
        this.state = {
            featureView: 0,
            leftRightFirst: 0,
            leftRightSecond: 0
        }
    }

    componentDidMount() {
        this.track = window.addEventListener('scroll', this.trackScrolling);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.trackScrolling);
    }

    isTop = (el) => {
        return el.getBoundingClientRect().top <= window.innerHeight / 4.8;
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
        this.getAnimationState(featureView, state => this.setState({featureView: state}));
        this.getAnimationState(lefRightFirst, state => this.setState({leftRightFirst: state}));
        this.getAnimationState(leftRightSecond, state => this.setState({leftRightSecond: state}))
    };

    getAnimationState = (element, callback) => {
        if (this.isTop(element)) callback(1);
        if (this.isMiddle(element)) callback(2);
        if (this.isBottom(element)) callback(3);
    };

    render(){
        return (
            <div>
                <FeatureView
                    id={"featureViewFirst"}
                    style={{backgroundColor: '#f6f7f9'}}
                    title={"What is Lorem Ipsum?"}
                    icon={checkboxIcon}
                    video={demoVideo}
                    isMobile={this.props.isMobile}
                    animationState={this.state.leftRightSecond}
                    textItems={[
                        "Ustvarjanje skupin in podskupin",
                        "Hitro iskanje vsebin in pogovorov",
                        "Odgovarjanje na posamezna sporočila"
                    ]}
                    flip={true}
                />
                <FeatureView
                    id={"featureViewSecond"}
                    title={"What is Lorem Ipsum?"}
                    icon={checkboxIcon}
                    video={demoVideo}
                    isMobile={this.props.isMobile}
                    animationState={this.state.leftRightSecond}
                    textItems={[
                        "Ustvarjanje skupin in podskupin",
                        "Hitro iskanje vsebin in pogovorov",
                        "Odgovarjanje na posamezna sporočila"
                    ]}
                    flip={false}
                />
                <FeatureView
                    id={"featureViewThird"}
                    title={"What is Lorem Ipsum?"}
                    icon={checkboxIcon}
                    video={demoVideo}
                    isMobile={this.props.isMobile}
                    animationState={this.state.leftRightSecond}
                    textItems={[
                        "Ustvarjanje skupin in podskupin",
                        "Hitro iskanje vsebin in pogovorov",
                        "Odgovarjanje na posamezna sporočila"
                    ]}
                    flip={true}
                />
            </div>
        )
    }
}

export default Features;