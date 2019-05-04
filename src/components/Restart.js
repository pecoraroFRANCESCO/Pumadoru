import React, { Component } from 'react';

import tomato from '../img/tomato.png';

export default class Restart extends React.Component {


	render(){
		return(
			<div id='Restart'>
				<button  className="bt restartTitle" onClick={this.props.timeRestart} title="RESTART">	
					<img src={tomato} />
				</button>
			</div>
			
		);
	}
}