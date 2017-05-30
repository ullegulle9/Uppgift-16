import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from './Form.js';
import Button from './Button.js';
import {
	shallow
} from 'enzyme';


describe('App renders basics', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render( <App /> , div);
	});

	it('renders Form Component', () => {
		let wrap = shallow( <App /> );
		let actual = wrap.contains( <Form /> );
		expect(actual).toBe(true);
	});
	it('renders Button Component', () => {
		let wrap = shallow( <App /> );
		let actual = wrap.contains( <Button /> );
		expect(actual).toBe(true);
	});
})
