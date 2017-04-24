import React from 'react';
import { Info } from './info';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import Sinon from 'sinon';

const infoMessage = 'Something important here';

describe('Info pure', function () {
	it('Renders "show info" and calls toggle on click', function () {
		const spy = Sinon.spy();
		const wrapper = shallow(
			<Info on={false} toggle={spy}>
				{infoMessage}
			</Info>
		);
		assert.isOk(wrapper);
		assert.notInclude(wrapper.html(), infoMessage);
		wrapper.find('#toggleInfo').simulate('click');
		assert.isTrue(spy.called);
	});

	it('Renders info and "Hide info" button and calls toggle on click', function () {
		const spy = Sinon.spy();
		const wrapper = shallow(
			<Info on={true} toggle={spy}>
				{infoMessage}
			</Info>
		);
		assert.isOk(wrapper);
		assert.include(wrapper.html(), infoMessage);
		wrapper.find('#toggleInfo').simulate('click');
		assert.isTrue(spy.called);
	});
});
