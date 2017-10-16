import React, { Component } from 'react'
import { Row } from '../primitives/Row'
import { Input, Select, Option } from '../primitives/Inputs'
import { Block } from '../primitives/Block'
import { keyframeOptionsAndValues } from '../data'

export class Transforms extends Component {

	constructor(props) {
		super(props)
		this.state = {
			option: '',
			value: '',
		}
	}

	onInputChange = e => {
		this.setState({
			value: e.target.value,
		}, () => this.props.onChange(`${this.state.option}(${this.state.value})`))
	}

	onSelectChange = e => {
		this.setState({
			option: e.target.value,
		}, () => this.props.onChange(`${this.state.option}(${this.state.value})`))
	}


	render() {
		const {id} = this.props
		return (
			<span>
				<Select id={id} onChange={this.onSelectChange} value={this.state.option}>
					{Object.keys(keyframeOptionsAndValues['transform']).map(keyframeOption => (
						<Option key={keyframeOption}>{keyframeOption}</Option>
					))}
				</Select>
				<Input onChange={this.onInputChange} value={this.state.value}/>
			</span>
		)
	}
}

export const Opacity = ({onChange, value, id}) => (
		<Input
			id={id}
			type='number'
			step="any"
			onChange={onChange}
			value={value}
			min='0' max='1'
		/>
	)
