import React from 'react';
import Toggle from './classBased/toggle';
import Info from './classBased/info';

import PureInfo from './pure/info';
import PureToggle from './pure/toggle';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Keep your react components pure</h1>
				<section>
					<Toggle />
					<div>
						<Info>Pure functions are easier to reuse</Info>
					</div>
				</section>

				<section>
					<PureToggle />
					<div>
						<PureInfo>Pure functions are simpler to reason about</PureInfo>
					</div>
				</section>
			</div>
		)
	}
}
