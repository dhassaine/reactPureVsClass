import React from 'react';

export default function withState(WrappedComponent) {
	return class Toggle extends React.Component {
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
			this.setState({ on: !this.state.on });
		}

		render() {
			const stateProp = {
				on: this.state.on,
				toggle: () => this.toggle()
			};

			// filter out HOC's props
			const { on, ...passThroughProps } = this.props;

			// add state to WrappedComponent
			return <WrappedComponent {...stateProp} {...passThroughProps} />
		}
	}
}

export const withStatePropTypes = {
	on: React.PropTypes.bool.isRequired,
	toggle: React.PropTypes.func.isRequired
};
