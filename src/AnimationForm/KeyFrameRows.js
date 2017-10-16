import React, { Component } from 'react'
import { Row } from '../primitives/Row'
import { Button, DeleteButton } from '../primitives/Button'
import { Input, Select, Option } from '../primitives/Inputs'
import { Block } from '../primitives/Block'
import { keyframeOptionsAndValues } from '../data'

export const KeyFrameRows = ({keyframes, onChange, addKeyframe, removeKeyframe}) =>  (
	<Block>
		<Row>Keyframes</Row>
			{keyframes.map((keyframe, index) =>
				<KeyFrameInputRow
					onChange={onChange}
					option={Object.keys(keyframe)[0]}
					value={keyframe[Object.keys(keyframe)[0]]}
					offset={keyframe[Object.keys(keyframe)[1]]}
					removeRow={removeKeyframe}
					key={index}
					index={index} />
			)}
			<Row left>
				<Button type='button' onClick={addKeyframe}>Add keyframe</Button>
			</Row>
	</Block>
)

class KeyFrameInputRow extends Component {
	constructor(props) {
		super(props)
		this.state = {
			option: props.option,
			value: props.value,
			offset: props.offset,
		}
	}

	onOptionChange = e => {
		this.setState({
			option: e.target.value,
		}, this.props.onChange(this.props.index, e.target.value, this.state.value, this.props.offset))
	}

	onValueChange = e => {
		this.setState({
			value: e.target.value,
		}, this.props.onChange(this.props.index, this.state.option, e.target.value, this.props.offset))
	}

	onNumericChange = e => {
		const numericValue = parseFloat(e.target.value)
		this.setState({
			value: numericValue,
		}, this.props.onChange(this.props.index, this.state.option, numericValue, this.props.offset))
	}

	onOffsetChange = e => {
		const numericValue = parseFloat(e.target.value)
		this.setState({
			offset: numericValue,
		}, this.props.onChange(this.props.index, this.state.option, this.state.value, numericValue))
	}

	renderKeyframeOptions = () =>  (
		<Select
			id={`keyFrameProperty${this.props.index}`}
			value={this.state.option}
			onChange={this.onOptionChange}>
			{Object.keys(keyframeOptionsAndValues).map(keyframeOption => (
				<Option key={keyframeOption}>
					{keyframeOption}
				</Option>))}
		</Select>
	)


	onNestedValueChange = e => {
		const smushedValue =
		this.setState({
			value: smushedValue,
		}, this.props.onChange(this.props.index, this.state.option, e.target.value, this.props.offset))

	}

	renderKeyFrameValues = () => {
		return (
			Object.keys(keyframeOptionsAndValues).map(option => {
   			if (option === this.state.option) {
   				return this.renderOptionValues(option)
   			}
   		}
		))
	}

	renderOptionValues = option => {
		const id = `keyFrameValue${this.props.index}`
		const onChange = this.onValueChange
		const value = this.state.value
		switch (option) {
			case 'opacity' :
				return <Input id={id} type='number' step="any" key={id} onChange={this.onNumericChange} value={value} min='0' max='1' />
			case 'transform' :
				return (
					<div key={id}>
						<Select id={id} onChange={onChange} value={value}>
							{Object.keys(keyframeOptionsAndValues['transform']).map((keyframeOption) => (
								<Option key={keyframeOption} onChange={this.onNestedValueChange}>{keyframeOption}</Option>
							))}
						</Select>
						<Input onChange={this.onNestedValueChange} value={this.state.subValue}/>
					</div>
				)
			case 'color' :
				return (
					console.log('add a color picker')
				)
			default :
				return null
		}
	}

	render() {
		const { index } = this.props
		return (
			<Row focusable key={index}>				
				{/* <label style={index === 0 ? {display: 'block'} : {display: 'none'} } htmlFor={`keyFrameProperty${index}`}>Property *</label> */}
				{this.renderKeyframeOptions()}
				{/* <label style={index === 0 ? {display: 'block'} : {display: 'none'} } htmlFor={`keyFrameValue${index}`}>Value *</label> */}
				{this.renderKeyFrameValues()}
				{/* <label style={index === 0 ? {display: 'block'} : {display: 'none'} } htmlFor={`keyFrameOffset${index}`}>Offset</label> */}
				<Input id={`keyFrameOffset${index}`} type="number" step="any" min="0" value={this.state.offset} onChange={this.onOffsetChange}/>
				<DeleteButton type='button' onClick={() => this.props.removeRow(index)}>X</DeleteButton>
			</Row>
		)
	}
}

{/* Tooltip for offset, if you leave it blank it will evenly space the   */}
{/* TODO add validation error appropriate to the property */}
{/*  TODO make draggable so you can put them in the order you want https://github.com/StreakYC/react-draggable-list*/}
