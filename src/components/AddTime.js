import React, { Component } from 'react';



export default class AddTime extends React.Component {


	render(){
		return(
			<div id='AddTime'>
				<button disabled={this.props.value} onClick={this.props.timeAdd} className="bt add">	
					+
				</button>
			</div>
			
		);
	}
}