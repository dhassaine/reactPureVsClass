
import React from 'react';
import Info from './info';
import { assert } from 'chai';
import { shallow } from 'enzyme';

const infoMessage = 'Something important here';
function renderInfoComponent(visible) {
	return shallow(
		<Info visible={visible}>
			{infoMessage}
		</Info>
	);
}

function assertInfoVisible(wrapper) {
	assert.isOk(wrapper);
	const html = wrapper.html()
	assert.include(html, 'Show info');
	assert.notInclude(html, infoMessage);
}

function assertInfoHidden(wrapper) {
	assert.isOk(wrapper);
	const html = wrapper.html()
	assert.include(html, 'Hide info');
	assert.include(html, infoMessage);
}

describe('Info', function () {
	it('Renders "show info"', function () {
		const wrapper = renderInfoComponent(false);
		assertInfoVisible(wrapper);
	});

	it('Renders info and "Hide info" button', function () {
		const wrapper = renderInfoComponent(true);
		assertInfoHidden(wrapper);
	});

	it('Can toggle info', function () {
		const wrapper = renderInfoComponent(false);
		assertInfoVisible(wrapper);

		wrapper.find('#toggleInfo').simulate('click');
		assertInfoHidden(wrapper);

		wrapper.find('#toggleInfo').simulate('click');
		assertInfoVisible(wrapper);
	});
});
