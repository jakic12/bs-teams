import React, { Component } from 'react';
import Button from '../components/Button';

import screenImg from "../res/img/testscreen.PNG";
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
    }

    componentDidMount() {

    }

    render(){
        return (
            <div>
                <div id="landing-view">
                    <LandingView
                        title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                        description={"Nunc ac sapien vulputate odio convallis posuere nec vitae magna." +
                        "In a efficitur ex, eget dictum elit. Nullam ac elit blandit, pharetra augue id, pulvinar ipsum." +
                        "Maecenas vel libero odio. Mauris vehicula neque ex, in malesuada purus luctus sit amet."}
                        btnTitle={"Klikni vec"}
                        img={screenImg}
                    />
                </div>
                <div id="comparison">
                    <Comparison
                        height={500}
                        leftIconsSize={100}
                        rightIconsSize={200}
                        teamsLogo={teamsLogo}
                        sizeRatio={1}
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
            </div>
        )
    }
}