import React, {Component} from 'react';
import ContactForm from '../components/ContactForm';
import Planets from '../components/Planets';
import '../styles/contactScreen.scss';

import AOS from "aos";
import 'aos/dist/aos.css';

class Contact extends Component {

    constructor(props) {
        super(props);
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

    render() {
        return (
            <div className='contactScreenContainer'>
                <div className='innerContactContainer' data-aos='fade-up'>
                    <ContactForm onSubmit={console.log}/>
                </div>
            </div>
        )
    }

}

export default Contact;