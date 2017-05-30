import React, {Component} from 'react';

class Form extends Component {
	render(){
		return <div>
			<input type="text" className="inputName" placeholder="namn" onChange={this.props.handleNameInput}></input>
			<input type="text" className="inputMail" placeholder="email" onChange={this.props.handleEmailInput}></input>
		</div>
	}
}

export default Form;