import React, { Component } from 'react'
import '../styles/parallax.scss'
import waveCover from '../res/img/svg/bg_ki_prekrije.svg';
import ReactSVG from 'react-svg'
import { relative } from 'path';
import $ from 'jquery'

class Parallax extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        // window.addEventListener('scroll', this.handleScroll);
        var passiveIfSupported = false;

        try {
          window.addEventListener("test", null, Object.defineProperty({}, "passive", { get: function() { passiveIfSupported = { passive: true }; } }));
        } catch(err) {}

        window.addEventListener('scroll', this.handleScroll, passiveIfSupported );
    }
    
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll)
    }
    
    handleScroll = () =>{
        window.requestAnimationFrame(() => {    
            if($('#parallaxer').innerHeight()+300 > $(document).scrollTop()){
                let ammount = $(document).scrollTop()/2
                $('#parallaxer').css("transform", `translate3d(0, ${ammount}px, 0)`)
                let sizeCoeficient = ammount / window.innerHeight
                $('#blackCover').css("opacity", sizeCoeficient)
            }
        })
        
    }

    render(){
        return (
            <React.Fragment>
                <div className="topWrapper">
                    <div
                        className={`topParallaxWrapper`}
                        id={`blackCover`}    
                    >
                    </div>
                    <div id={'topParallax'} className={`${this.props.resizeHeightBy ? 'shortParallax' : 'topParallax'}`}>
                        {!this.props.isMobile &&
                            <div id="parallaxer" className="paroller innerParallax">
                                <div className="parallaxCenter">
                                    {this.props.children[0]}
                                </div>
                            </div>
                        }
                        {this.props.isMobile &&
                            <div id="parallaxer" className="innerParallax">
                                {this.props.children[0]}
                            </div>
                        }
                    </div>
                    <ReactSVG
                        id="waveCover"
                        src={waveCover}
                        beforeInjection={svg => {
                            if(svg.classList)
                                svg.classList.add('svg-wave')
                            else
                                svg.className = 'svg-wave'
                                svg.setAttribute('preserveAspectRatio', 'none')
                        }}

                        afterInjection={(err, svg)=>{
                            svg.parentElement.setAttribute('style', '')//set wrapper style
                        }}
                    />
                </div>
                <div id="bottom_parallax">
                    {this.props.children[1]}
                </div>
            </React.Fragment>
        )
    }
}

export default Parallax;