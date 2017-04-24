import React from 'react';

export default class Info extends React.Component {
	static propTypes = {
		visible: React.PropTypes.bool,
		children: React.PropTypes.node.isRequired
	};
	static defaultProps = {
		visible: false
	};
	state = {
		visible: this.props.visible
	};

	toggle() {
		this.setState({ visible: !this.state.visible });
	}

	render() {
		if (this.state.visible) {
			return (
				<span>
					<span id="toggleInfo" onClick={() => this.toggle()}>Hide info: </span>
					{this.props.children}
				</span>
			);
		} else {
			return <span id="toggleInfo" onClick={() => this.toggle()}>Show info</span>;
		}
	}
}
