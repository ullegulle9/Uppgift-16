import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form.js';
import {
	shallow
} from 'enzyme';

it('contains input element', () => {
	let wrap = shallow(<Form />);
	let actual = wrap.find('input').exists();
	expect(actual).toBe(true);
});