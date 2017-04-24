
import React from 'react';
import withState from './withState';
import { assert } from 'chai';
import { mount } from 'enzyme';

function assertCorrectPropsAdded(wrapper) {
	const props = wrapper.props();
	assert.isDefined(props.on, 'on property should exist');
	assert.isDefined(props.toggle, 'toggle property should exist');
}

describe('withState', function () {
	it('Check default setup', function () {
		const Dummy = () => <p>dummy</p>
		const DummyWithState = withState(Dummy);
		const wrapper = mount(<DummyWithState />);
		assert.isOk(wrapper);
		assert.isDefined(wrapper.props().on, 'on property should exist to allow default override');
		assertCorrectPropsAdded(wrapper.find(Dummy))
	});

	it('On state can be toggled', function(){
		const Dummy = () => <p>dummy</p>
		const DummyWithState = withState(Dummy);
		const wrapper = mount(<DummyWithState />);
		assert.isOk(wrapper);
		const instance = wrapper.instance();
		const initialState = wrapper.state('on');
		instance.toggle();
		assert.isTrue(wrapper.state('on') === !initialState);
	})

});
