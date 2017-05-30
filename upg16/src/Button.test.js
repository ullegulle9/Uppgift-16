import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button.js';
import App from './App';
import {
	shallow, mount
} from 'enzyme';

describe('Button tests', () => {
	it('contains button element', () => {
		let wrap = shallow(<Button />);
		let actual = wrap.find('button').exists();
		expect(actual).toBe(true);
	});
	it('should have a classname', () => {
		let wrap = shallow(<Button />);
		let actual = wrap.find('button').hasClass('btn');
		expect(actual).toBe(true);
	});
	it('should reset name state when clicked', () => {
		let wrap = mount(<App />);
		wrap.find('.inputName').simulate('change', {
			target: {
				value: '1234'
			}
		});
		wrap.find('button').simulate('click');
		let actual = wrap.state('name');
		expect(actual).toBe('');
	});
	it('should reset email state when clicked', () => {
		let wrap = mount(<App />);
		wrap.find('.inputMail').simulate('change', {
			target: {
				value: '1234'
			}
		});
		wrap.find('button').simulate('click');
		let actual = wrap.state('email');
		expect(actual).toBe('');
	});
});
