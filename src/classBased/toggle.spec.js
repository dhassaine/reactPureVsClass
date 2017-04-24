
import React from 'react';
import Toggle from './toggle';
import { assert } from 'chai';
import { shallow } from 'enzyme';

describe('Toogle', function () {
	it('Renders Off OK', function () {
		const wrapper = shallow(<Toggle on={false} />);
		assert.isOk(wrapper);
		assert.include(wrapper.html(), 'Off');
	});

	it('Renders On OK', function () {
		const wrapper = shallow(<Toggle on={true} />);
		assert.isOk(wrapper);
		assert.include(wrapper.html(), 'On');
	});

	it('Can toggle', function () {
		const wrapper = shallow(<Toggle on={true} />);
		assert.isOk(wrapper);
		assert.include(wrapper.html(), 'On');
		wrapper.find('span').simulate('click');
		assert.include(wrapper.html(), 'Off');
		wrapper.find('span').simulate('click');
		assert.include(wrapper.html(), 'On');
	});
});
