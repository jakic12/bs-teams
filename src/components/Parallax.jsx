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

        if(topRect.bottom > 0){
            if((waveRect.bottom+waveRect.top)/2 < window.innerHeight/3){
                
                if(!this.state.ignoreAnim){
                    this.setState(() => ({ignoreAnim:true}))
                    const progressive = () => {
                        if(this.state.sizeCoeficient > 0){
                            this.setState(({sizeCoeficient})=>({
                                sizeCoeficient:sizeCoeficient-0.1
                            }), ()=>{
                                if(this.state.sizeCoeficient > 0){
                                    window.requestAnimationFrame(progressive)
                                }else{
                                    this.setState({ sizeCoeficient:0 })
                                }
                            })
                        }
                    }

                    window.requestAnimationFrame(progressive)
                    console.log("stop")
                }
            }else{
                this.sizeCoeficient = (start-end)*(topRect.bottom/(topRect.height+70))*start + end
                console.log(this.state.ignoreAnim, this.ignoreRetractAnimation)
                if(this.state.ignoreAnim == true){
                    if(!this.ignoreRetractAnimation){
                        console.log("start")
                        this.ignoreRetractAnimation = true;
                        const progressive = () => {
                            if(this.state.sizeCoeficient < this.sizeCoeficient){
                                this.setState(({sizeCoeficient})=>({
                                    sizeCoeficient:sizeCoeficient+0.1
                                }), ()=>{
                                    if(this.state.sizeCoeficient < this.sizeCoeficient){
                                        window.requestAnimationFrame(progressive)
                                    }else{
                                        this.setState({ ignoreAnim:false, sizeCoeficient:this.state.sizeCoeficient })
                                    }
                                })
                            }
                        }

                        window.requestAnimationFrame(progressive)
                    }
                }else{
                    this.ignoreRetractAnimation = false;
                    window.requestAnimationFrame(() =>{
                        this.setState(() => ({ignoreAnim:false,sizeCoeficient:this.sizeCoeficient}))
                    });
                }
            }
        }
    }

    triggerAnimation = () =>{

    }

    render(){
        return (
            <React.Fragment>
                <div id="topParallax" style={this.state.parallaxEffect?{}:{position:`relative`, background:`#3c3c3b`, height:`calc(100vh - 70px)`}}>
                    <div className="innerParallax" style={this.state.parallaxEffect?{transform:`scale(${this.state.sizeCoeficient}) translate(0,${(1-this.state.sizeCoeficient)*-1000}px)`}:{}}>
                        {this.props.children[0]}
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