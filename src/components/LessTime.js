import React, { Component } from 'react';




export default class LessTime extends React.Component {
	render(){
		return(
			<div id='LessTime'>
	    	    <button disabled={this.props.value} onClick={this.props.timeLess} className=" bt less">
			    	-
			    </button>
			</div>    
		);
	}
}