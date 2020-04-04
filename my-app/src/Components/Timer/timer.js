import React,{ useState,useEffect, Component } from'react';
import './timer.css'
class Timer extends Component{
    state={
        time:this.props.time,
        minutes:Math.floor(this.props.time/60000),
        seconds:Math.floor((this.props.time%60000)/1000),
        active:false,
        width:100,
        step:this.props.step
    }
    
    startTimer=()=>{
        this.setState({
            active:true
        });
        this.props.onTimeStart(this.state)
      }
    stopTimer=()=>{
        this.setState({
            active:false
        });
        this.props.onTimePause();
      }
    isAutostart=()=>{
        if(this.props.autostart){
           this.startTimer();
        }
      }
      changeTime=async()=>{
          if(this.state.time>=1000){
              await this.setState({
                 time:this.state.time-1000
               })
          }
      }
    componentDidMount(){
        const procent = (this.state.step/1000)*(this.state.width/(this.props.time/1000))
        this.isAutostart()
        this.timer = setInterval(
            ()=>
            {
            if(this.state.active&&(this.state.minutes>0||this.state.seconds>0)){
                this.props.onTick((this.state.time)/1000);
                this.changeTime();
                this.setState({          
                    minutes:Math.floor(this.state.time/60000),
                    seconds:Math.floor((this.state.time%60000)/1000),
                })
            }
            else if((this.state.minutes===0&&this.state.seconds===0)){
                this.props.onTimeEnd();
                
                clearInterval(this.timer)
            }
        },
        1000)
        this.widthTimer = setInterval(()=> {
            if(this.state.active&&(this.state.minutes>0||this.state.seconds>0)){
                this.setState({          
                   width:this.state.width-procent.toFixed(4)
                })
            }
        },this.state.step)
    }
        render(){
            return(
                    <div>
                        <button onClick={this.startTimer} onTick={this.props.onTick}>
                            Start
                        </button>
                        <button onClick={this.stopTimer}>
                            Stop
                        </button>
                        <p>
                            {this.state.minutes+' минут  '+this.state.seconds+" секунд"}
                        </p>
                        <div style={{  width: this.state.width+"%"}} className="row"></div>
                        
                    </div>

                )
        }
}
export default Timer;