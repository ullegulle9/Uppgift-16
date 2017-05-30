import React, {Component} from 'react';

class Button extends Component {
	render(){
		return <div>
			<button className="btn" onClick={this.props.handleClick}>Button</button>
		</div>
	}
}

export default Button;