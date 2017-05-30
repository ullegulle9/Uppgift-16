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
		const div = document.createElement('div');
		ReactDOM.render( <Form /> , div);
	});
	it('renders Button Component', () => {
		const div = document.createElement('div');
		ReactDOM.render( <Button /> , div);
	});
})
