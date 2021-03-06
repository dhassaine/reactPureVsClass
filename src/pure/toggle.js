import React from 'react';
import withState, {withStatePropTypes} from './withState';

export const Toggle = ({on, toggle}) => (
	on ?
		<span onClick={toggle}>On</span> :
		<span onClick={toggle}>Off</span>
);
Toggle.propTypes = withStatePropTypes;

const ToggleWithState = withState(Toggle);
export default ToggleWithState;
