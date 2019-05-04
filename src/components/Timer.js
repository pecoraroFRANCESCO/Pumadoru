import React, { Component } from 'react';
import AddTime from '../components/AddTime';
import LessTime from '../components/LessTime';
import StartButton from '../components/StartButton';
import StopButton from '../components/StopButton';

import Restart from '../components/Restart';




export default class Timer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			value: false,
			timeMin: 25,
			timeSec: "0"+0,
			isToggleOn: true,
		}
		this.handleClick = this.handleClick.bind(this);

	}

// convert(x){
// 	if(x < 10){
// 		x = "0"+x;
// 	}
// 	return x;
// }

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

Restart(){
	document.location.reload(true);
}


handleClick(){


	    this.setState(prevState=>({
	     	isToggleOn: !prevState.isToggleOn 
	    }));
	    this.state.timeSec = 3;
	    if(this.state.isToggleOn == true){
			this.SecID = setInterval(() => {
				this.setState({timeSec: ( this.state.timeSec - 1)})
					if(this.state.timeSec <= 0){				
						this.state.timeMin--;
						this.state.timeSec = 3;
					}
					if(this.state.isToggleOn == true){
						clearInterval(this.SecID);
						this.state.timeSec = this.state.timeSec;
					}
					if(this.state.timeSec === 3 && this.state.timeMin === -1){
						clearInterval(this.SecID);
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
					<Restart timeRestart={() => this.Restart()} />
					<h1> Pumadoru </h1>
				</div>	
				<div className="container_main">
					<div className="container display">
						{this.state.timeMin} : {this.state.timeSec}
					</div>
					<div className="controls">
					    <div className="container but addTime">
						    <AddTime value={this.state.value} timeAdd={() => this.addTime()} />
					    </div>
					    <div className="container but">
					    	<StartButton ST={this.state.isToggleOn}  action={() => this.handleClick()}/>
						</div>	    
					    <div className="container but lessTime">
					    	<LessTime value={this.state.value} timeLess={() => this.lessTime()} />
						</div>    
					</div>
				</div>
			</div>
		);

	}
}
















