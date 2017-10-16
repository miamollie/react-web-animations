import React, { Component } from 'react'
import { Row } from '../primitives/Row'
import { Input } from '../primitives/Inputs'
import { animationOptionsAndValues as availableOptions} from '../data'

export const OptionRows = ({onChange, options}) => {
	return (
		<div>
			{Object.keys(availableOptions).map((option, index) =>
					<Row focusable key={index}>
						<label htmlFor={option}>{option}</label>
						<Option
							id={index}
							value={options[option] || ''}
							onChange={() => onChange(option)}
							key={index} />
					</Row>
				)}
		</div>
	)
}


class Option extends Component {
	constructor(props){
		super(props)
		this.state = {
			value: props.value,
		}
	}

	onChange = e => {
		this.setState({
			value: e.target.value,
		}, () => this.props.onChange(this.state.value))

	}

	render() {

		return (
			<Input
				id={this.props.id}
				value={this.state.value}
				onChange={this.onChange}
			/>
		)
	}


}
