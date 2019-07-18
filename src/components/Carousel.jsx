import React, { Component } from 'react'
import '../styles/carousel.scss'

export default class Carousel extends Component{
    constructor(props){
        super(props);

        this.state = {
            selected:0
        }
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState(state => ({
                selected: (state.selected+3) % this.props.children.length
            }))
        }, 2000)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render(){
        return (
            <div style={this.props} className="carousel">
                {this.props.children.slice(this.state.selected, this.state.selected+3)}
            </div>   
        )
    } 
}