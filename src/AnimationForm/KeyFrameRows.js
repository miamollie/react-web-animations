import React, { Component } from 'react'
import { Row } from '../primitives/Row'
import { Block } from '../primitives/Block'

const keyframeOptionsAndValues = {
	//length  as number+unitpixel/em or percentage %, number, RealNum, angle(as degree or radian)
	// matrix transforms currently unsupported, TODO improvement (better validation of transform values)
	// TODO display all this info  as a modal?
	transform: {
		 translate: ['length', 'length'],
		 translateX: 'length',
		 translateY: 'length',
		 scale: ['number', 'number'],
		 scaleX: 'number',
		 scaleY: 'number',
		 rotate: 'number',
		 skew: ['angle', 'angle'],
		 skewX: 'angle',
		 skewY: 'angle',
		 translate3d: ['length', 'length', 'length'],
		 translateZ: 'length',
		 scale3d: ['number', 'number', 'number'],
		 scaleZ: 'number',
		 rotate3d: ['number', 'number', 'number', 'angle'],
		 rotateX: 'angle',
		 rotateY: 'angle',
		 rotateZ: 'angle',
		 perspective: 'length',
	},
	opacity: 'real',
	// color: [ open a color picker...] TODO add colour picker
}

// tracks adding and removing rows, and the state of the keyframes object
// should know about all animateable properties and potential values for them
// renderRows
// addRow (adds a new row with default values, updates the form state to update keyframes array)
// removeRow (for rows in state, return KeyFrameInputRow with an Onchange that updates this state)
// updateRow(index) => (option, value) => {}
export const KeyFrameInputRows = ({keyframes, onChange}) =>  (
	<Block>
		<Row>Keyframes</Row>
			{keyframes.map((keyframe, index) =>
				<KeyFrameInputRow
					onChange={onChange}
					option={Object.keys(keyframe)[0]}
					value={keyframe[Object.keys(keyframe)[0]]}
					offset={keyframe[Object.keys(keyframe)[1]]}
					key={index}
					index={index} />
			)}
	</Block>
)



// should know about all options and permissable properties for them
export const OptionInputRows = () => {
	return (
		<Block>
			<Row>Options</Row>
			Alll the options here
		</Block>
	)
}

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

	onOffsetChange = e => {
		this.setState({
			offset: e.target.value,
		}, this.props.onChange(this.props.index, this.state.option, this.state.value, e.target.value))
	}

	renderKeyframeOptions = () =>  (
		<select
			id={`keyFrameProperty${this.props.index}`}
			value={this.state.option}
			onChange={this.onOptionChange}>
			{Object.keys(keyframeOptionsAndValues).map((keyframeOption) => (
				<option key={keyframeOption}>
					{keyframeOption}
				</option>))}
		</select>
	)


	onNestedValueChange = e => {
		// smoosh the values together...?
	}

	renderKeyFrameValues = () => {
		return (
			Object.keys(keyframeOptionsAndValues).map((option) => {
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
				return <input id={id} type='tel' key={id} onChange={onChange} value={value} min='0' max='1' />
			case 'transform' :
				return (
					<div key={id}>
						<select id={id} onChange={onChange} value={value}>
							{Object.keys(keyframeOptionsAndValues['transform']).map((keyframeOption) => (
								<option key={keyframeOption} onChange={this.onNestedValueChange}>{keyframeOption}</option>
							))}
						</select>
						<input onChange={this.onNestedValueChange}></input>
					</div>
				)
			default :
				return null
		}
	}

	render() {
		const { index } = this.props
		console.log(this.state, 'keyframe row state')
		return (
			<div key={index}>
				<Row focusable>
					<label htmlFor={`keyFrameProperty${index}`}>CSS property *</label>
					{this.renderKeyframeOptions()}
					<label htmlFor={`keyFrameValue${index}`}>Value *</label>
					{this.renderKeyFrameValues()}
					<label htmlFor={`keyFrameOffset${index}`}>Offset</label>
					<input id={`keyFrameOffset${index}`} type="number" value={this.state.offset} onChange={this.onOffsetChange}/>
					{/* TODO add vadivdation error appropriate to the property */}
					{/*  TODO make draggable so you can put them in the order you want https://github.com/StreakYC/react-draggable-list*/}
				</Row>
				{index > 1 && (
					<button onClick={this.props.removeRow}>Remove Row</button>
				)}
			</div>
		)
	}
}
