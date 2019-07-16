import React, { Component } from 'react'
import '../styles/parallax.scss'
import waveCover from '../res/img/space_cloud.svg';
import ReactSVG from 'react-svg'
import { relative } from 'path';
import { Parallax as Px } from 'react-scroll-parallax';

class Parallax extends Component{
    constructor(props){
        super(props)

        this.sizeCoeficient = 1;

        this.state = {
            sizeCoeficient:this.sizeCoeficient,
            ignoreAnim:false
        }
    }
    componentDidMount(){
        //window.addEventListener('scroll', this.handleScroll);
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
        let start = 1;
        let end = 0.2;
        let top = document.getElementById("topParallax");
        let wave = document.getElementById("waveCover");
        
        let topRect = top.getBoundingClientRect();
        let waveRect = wave.getBoundingClientRect();

        if (waveRect.bottom > 0){
                this.sizeCoeficient = (start-end)*(topRect.bottom/(topRect.height+70))*start + end
                window.requestAnimationFrame(() =>{
                    this.setState(() => ({ignoreAnim:false,sizeCoeficient:this.sizeCoeficient}))
                });
        }
    }

    render(){
        return (
            <React.Fragment>
                <div className="topWrapper">
                    <div
                        className={`topParallaxWrapper`}
                        style={{ opacity: 1-this.state.sizeCoeficient }}>
                    </div>
                    <div id={'topParallax'} className={`${this.props.resizeHeightBy ? 'shortParallax' : 'topParallax'}`}>
                        {!this.props.isMobile &&
                            <Px y={[-70, 100]} className="innerParallax" /*style={{transform:`translate3d(0,${(1-this.state.sizeCoeficient)*(window.innerHeight/1.1)}px,0)`}}*/>
                                {this.props.children[0]}
                            </Px>
                        }
                        {this.props.isMobile &&
                            <div className="innerParallax">
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