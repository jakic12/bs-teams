import React, { Component } from 'react';
import Button from '../components/Button';

class Homepage extends Component{
    render(){
        return (
            <div>
                <div>
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
                    <p>Nunc ac sapien vulputate odio convallis posuere nec vitae magna.
                        In a efficitur ex, eget dictum elit. Nullam ac elit blandit, pharetra augue id, pulvinar ipsum.
                        Maecenas vel libero odio. Mauris vehicula neque ex, in malesuada purus luctus sit amet. </p>
                    <Button
                        title={"Klikni za vec"}
                        onClick={console.log}/>
                </div>
            </div>
        )
    }
}

export default Homepage;