import React, { Component } from 'react';
import LeftRightContainer from "../components/LeftRightContainer";
import teamsImg from "../res/img/test-moch-image.png";
import demoVideo from "../res/video/CHAT_DEMO_Take3.mp4";
import demoVideoMov from "../res/video/CHAT_DEMO_Take2 (1).mov";
import FeatureView from "../components/FeatureView";

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
        const featureView = document.getElementById('featureView');
        const lefRightFirst = document.getElementById('leftRightFirst');
        const leftRightSecond = document.getElementById('leftRightSecond');
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
        console.log("state");
        console.log(this.state.leftRightFirst);
        console.log(this.state.leftRightSecond);
        return (
            <div>
                <FeatureView
                    id={"featureView"}
                    flip={false}
                    image={teamsImg}
                    icon={checkboxIcon}
                    animationState={this.state.featureView}
                    isMobile={this.props.isMobile}
                    title={"Klepet"}
                    textItems={[
                        "Ustvarjanje skupin in podskupin",
                        "Hitro iskanje vsebin in pogovorov",
                        "Odgovarjanje na posamezna sporočila"
                    ]}
                />
                <LeftRightContainer
                    id={"leftRightFirst"}
                    style={{backgroundColor: '#f6f7f9'}}
                    title={"What is Lorem Ipsum?"}
                    description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                    video={demoVideo}
                    isMobile={this.props.isMobile}
                    animationState={this.state.leftRightSecond}
                    flip={true}
                />
                <LeftRightContainer
                    id={"leftRightSecond"}
                    title={"What is Lorem Ipsum?"}
                    description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                    video={demoVideoMov}
                    isMobile={this.props.isMobile}
                    animationState={this.state.leftRightSecond}
                    flip={false}
                />
            </div>
        )
    }
}

export default Features;