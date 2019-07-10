import React, { Component } from 'react';
//import Button from '../components/Button';
import Sponzors from '../components/Sponzors'
import MsLogo from '../res/img/gold_microsoft_logo.png' 
import Kepion from '../res/img/kepion_logo.png' 
import MagentoLogo from '../res/img/magento_logo.png' 
import UmbracoLogo from '../res/img/umbraco_logo.png' 
import AdvContainer from '../components/AdvContainer'

import screenImg from "../res/img/telefon_laptop_teams_mockup.png";
import storageLogo from "../res/img/drive-logo.png";
import mailLogo from "../res/img/gmail-logo.png";
import calendarLogo from "../res/img/caledar-logo.png";
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
import teamsImg from '../res/img/test-moch-image.png'

import Comparison from "../components/Comparison";
import LandingView from "../components/LandingView";
import FeatureScroll from "../components/FeatureScroll"
import BigImpact from "../components/BigImpact"
import LeftRightContainer from "../components/LeftRightContainer"
import FirstRow from "../components/FirstRow"


export default class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showFirst: false,
            showSecond: false,
            move: false
        };
        this.track = null;
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
        return el.getBoundingClientRect().top <= window.innerHeight / 2;
    };

    trackScrolling = () => {
        const wrappedElement = document.getElementById('comparison');
        if (this.isTop(wrappedElement)) {
            this.setState({showFirst: true});
        }
        if (this.isMiddle(wrappedElement)) {
            this.setState({showFirst: false});
            this.setState({showSecond: true});
        }
        if (this.isBottom(wrappedElement)) {
            this.setState({move: true});
            document.removeEventListener('scroll', this.track);
        }
    };

    render(){
        return (
            <div style={{overflowX: "hidden"}}>
                <FirstRow
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    description={"Nunc ac sapien vulputate odio convallis posuere nec vitae magna." +
                    "In a efficitur ex, eget dictum elit. Nullam ac elit blandit, pharetra augue id, pulvinar ipsum." +
                    "Maecenas vel libero odio. Mauris vehicula neque ex, in malesuada purus luctus sit amet."}
                    btnTitle="Klikni vec"
                    onClick="nekej"
                    bigLogo={TelefonLaptop}
                    smallLogo={Telefon}/>
                <Comparison
                    move={this.state.move}
                    showFirst={this.state.showFirst}
                    showSecond={this.state.showSecond}
                    leftIconsSize={100}
                    rightIconsSize={200}
                    teamsLogo={teamsLogo}
                    config={[
                        {
                            img: mailLogo,
                            name: "drive"
                        },{
                            img: wordLogo,
                            name: "word"
                        },{
                            img: calendarLogo,
                            name: "calendar"
                        },{
                            img: storageLogo,
                            name: "drive"
                        }
                    ]}/>
                <FeatureScroll
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
                <BigImpact
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
                <LeftRightContainer
                    title={"What is Lorem Ipsum?"}
                    description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                    image={teamsImg}
                    flip={true}/>
                <LeftRightContainer
                    title={"What is Lorem Ipsum?"}
                    description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                    image={teamsImg}
                    flip={false}/>
            </div>
        )
    }
}