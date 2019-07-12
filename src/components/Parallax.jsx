import React, { Component } from 'react'
import '../styles/parallax.scss'
import waveCover from '../res/img/space_cloud.svg';
import ReactSVG from 'react-svg'
import { relative } from 'path';

class Parallax extends Component{
    constructor(props){
        super(props)

        this.sizeCoeficient = 1;

        this.state = {
            sizeCoeficient:this.sizeCoeficient,
            parallaxEffect:true,
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
        window.addEventListener('resize', this.handleResize)
    }
    
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('resize', this.handleResize)
    }

    handleResize = () => {
        //document.getElementById()
    }
    
    handleScroll = () =>{
        let start = 1;
        let end = 0.2;
        let top = document.getElementById("topParallax")
        let wave = document.getElementById("waveCover")
        
        let topRect = top.getBoundingClientRect();
        let waveRect = wave.getBoundingClientRect()

        if (waveRect.bottom > 0){
            /*if(waveRect.top < topRect.top+waveRect.height/2){
                
                //if(!this.state.ignoreAnim)
                    console.log(waveRect.top, topRect.top+waveRect.height/2)
                    //this.setState(() => ({ignoreAnim:true, sizeCoeficient:0}))
            }else{*/
                this.sizeCoeficient = (start-end)*(topRect.bottom/(topRect.height+70))*start + end
                window.requestAnimationFrame(() =>{
                    this.setState(() => ({ignoreAnim:false,sizeCoeficient:this.sizeCoeficient}))
                });
            //}
        }
    }

    render(){
        return (
            <React.Fragment>
                <div className="topWrapper">
                    <div className="topParallaxWrapper" style={{ opacity: 1-this.state.sizeCoeficient }}>
                    </div>
                    <div id="topParallax" style={this.state.parallaxEffect?{}:{position:`relative`, background:`#3c3c3b`, height:`calc(100vh-70px)`}}>
                        <div className="innerParallax" style={this.state.parallaxEffect?{transform:`translate3d(0,${(1-this.state.sizeCoeficient)*(window.innerHeight/1.1)}px,0)`}:{}}>
                            {this.props.children[0]}
                        </div>
                    </div>
                    <ReactSVG 
                        id="waveCover"
                        src={waveCover}
                        beforeInjection={svg => {
                          svg.classList.add('svg-wave')
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