import React, { Component } from 'react';
import AddTime from '../components/AddTime';
import LessTime from '../components/LessTime';
import StartButton from '../components/StartButton';
import StopButton from '../components/StopButton';
import tomato from '../img/tomato.png';


export default class Timer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			value: false,
			timeMin: 25,
			timeSec: 0,
			isToggleOn: true,
		}
		this.handleClick = this.handleClick.bind(this);	
	}



addTime() {
	if(this.state.timeMin < 60){
		this.setState({timeMin:( this.state.timeMin + 5)})
		console.log(this.state.timeMin)
	}	
}

lessTime(){


	if(this.state.timeMin <= 60 && this.state.timeMin > 10){
		this.setState({timeMin:(this.state.timeMin - 5)})
		console.log(this.state.timeMin)
	}
}

handleClick(){

	     this.setState(prevState=>({isToggleOn:(!prevState.isToggleOn)}))
	     if(this.state.isToggleOn == false){
				this.SecID = setInterval(() => {
					this.setState({timeSec:( this.state.timeSec - 1)})
						if(this.state.timeSec <= 0){				
							this.state.timeMin - 1;
						} 
				}, 1000);
	     }else{
	     	console.log('hohoho');
	     }
	    };





	render(){

		return(	
			<div className="App all">
				<div className="titre">
					<img src={tomato}/>
					<h1> Pumadoru </h1>
				</div>	
				<div className="container_main">
					<div className="container display">
						{this.state.timeMin} : {this.state.timeSec}
					</div>
					<div className="controls">
					    <div className="container but addTime">
						    <AddTime value={this.state.value} time={() => this.addTime()} />
					    </div>
					    <div className="container but">
					    	<StartButton ST={this.state.isToggleOn}  action={() => this.handleClick()}/>
						</div>	    
					    <div className="container but lessTime">
					    	<LessTime value={this.state.value} time2={() => this.lessTime()} />
						</div>    
					</div>
				</div>
			</div>
		);

	}
}
















