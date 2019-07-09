import React, { Component } from 'react';
import Button from '../components/Button';

import screenImg from "../res/img/telefon_laptop_teams_mockup.png";
import storageLogo from "../res/img/drive-logo.png";
import mailLogo from "../res/img/gmail-logo.png";
import calendarLogo from "../res/img/caledar-logo.png";
import wordLogo from "../res/img/word-logo.png";
import teamsLogo from "../res/img/teams-logo.png";
import "../styles/home.scss";

import Comparison from "../components/Comparison";
import LandingView from "../components/LandingView";

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
            <div>
                <LandingView
                    title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    description={"Nunc ac sapien vulputate odio convallis posuere nec vitae magna." +
                    "In a efficitur ex, eget dictum elit. Nullam ac elit blandit, pharetra augue id, pulvinar ipsum." +
                    "Maecenas vel libero odio. Mauris vehicula neque ex, in malesuada purus luctus sit amet."}
                    btnTitle={"Klikni vec"}
                    img={screenImg}
                />
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
            </div>
        )
    }
}