import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form.js';
import App from './App';
import {
	shallow, mount
} from 'enzyme';

it('contains input element', () => {
	let wrap = shallow(<Form />);
	let actual = wrap.find('input').exists();
	expect(actual).toBe(true);
});

describe('Form event handling tests', () => {
	//Init val
	//Updates name when typing
	//Updates email when typing
	it('init name test', () => {
		let wrap = shallow(<App />);
		let actual = wrap.state('name');
		expect(actual).toBe('');
	});
	
	it('init email test', () => {
		let wrap = shallow(<App />);
		let actual = wrap.state('email');
		expect(actual).toBe('');
	});
	
	it('should update name text', () => {
		const input = 'Marre';
		let wrap = mount(<App />);
		wrap.find('.inputName').simulate('change', {
			target: {
				value: input
			},
			type: 'change'
		});
		let actual = wrap.state('name');
		expect(actual).toBe(input);
	});
	it('should update email text', () => {
		const input = 'martin.larsson.post@gmail.com';
		let wrap = mount(<App />);
		wrap.find('.inputMail').simulate('change', {
			target: {
				value: input
			},
			type: 'change'
		});
		let actual = wrap.state('email');
		expect(actual).toBe(input);
	});
})