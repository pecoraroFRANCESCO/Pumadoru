import React, { Component } from 'react';


export default class StartButton extends React.Component {
	render(){
		return(
			<div id='StartButton'>
	    		<button className=" bt start" onClick={this.props.action}>
	    			{this.props.ST ? 'Start' : 'Stop'}
			    </button>
			</div>	
		);
	}	
}

