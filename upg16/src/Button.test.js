import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button.js';
import App from './App';
import {
	shallow
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
	})
});
