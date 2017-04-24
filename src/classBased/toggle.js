import React from 'react';

export default class Toggle extends React.Component {
	static propTypes = {
		on: React.PropTypes.bool
	};
	static defaultProps = {
		on: false
	};
	state = {
		on: this.props.on
	};

	toggle() {
		this.setState({on: !this.state.on});
	}

	render() {
		return this.state.on ?
			<span onClick={() => this.toggle()}>On</span> :
			<span onClick={() => this.toggle()}>Off</span>
	}
}
