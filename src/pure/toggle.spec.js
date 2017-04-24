import React from 'react';
import { Toggle } from './toggle';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import Sinon from 'sinon';

describe('Toogle pure', function () {
	it('Renders Off OK and calls toggle on click', function () {
		const spy = Sinon.spy();
		const wrapper = shallow(<Toggle on={false} toggle={spy} />);
		assert.isOk(wrapper);
		assert.include(wrapper.html(), 'Off');
		wrapper.find('span').simulate('click');
		assert.isTrue(spy.called);
	});

	it('Renders On OK and calls toggle on click', function () {
		const spy = Sinon.spy();
		const wrapper = shallow(<Toggle on={true} toggle={spy} />);
		assert.isOk(wrapper);
		assert.include(wrapper.html(), 'On');
		wrapper.find('span').simulate('click');
		assert.isTrue(spy.called);
	});
});
