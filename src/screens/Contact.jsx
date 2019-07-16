import React, {Component} from 'react';
import ContactForm from '../components/ContactForm';
import '../styles/contactScreen.scss';

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
    }

    isInvisible = (el) => {
        return (!this.isTop(el) && !this.isMiddle(el) && !this.isBottom(el));
    };

    isTop = (el) => {
        return el.getBoundingClientRect().top <= window.innerHeight;
    };

    isBottom = (el) => {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    };

    isMiddle = (el) => {
        return el.getBoundingClientRect().top <= window.innerHeight / 2.5;
    };

    trackScrolling = () => {
        // TODO: add elements tracking
        // LIKE THIS: this.getAnimationState(featureScroll, state => this.setState({featureScroll: state}));
    };

    getAnimationState = (element, callback) => {
        if (this.isInvisible(element)) callback(0);
        if (this.isTop(element)) callback(1);
        if (this.isMiddle(element)) callback(2);
        if (this.isBottom(element)) callback(3);
    };

    render() {
        return (
            <div className='contactScreenContainer'>
                <ContactForm/>
            </div>
        )
    }

}

export default Contact;