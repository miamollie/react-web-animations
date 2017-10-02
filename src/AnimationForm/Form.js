import React, { Component } from 'react'
import { Row } from '../primitives/Row'
import { Button } from '../primitives/Button'
import { Block } from '../primitives/Block'
import Animation from '../primitives/Animation'
import { Shape } from '../primitives/Shape'
import { KeyFrameInputRows, OptionInputRows } from './KeyFrameRows'

class Form extends Component {

	constructor(){
		super()
		this.state = ({
			keyframes: [
				{opacity: 0, offset: 0},
				{opacity: 1, offset: 1}], //start with two default rows (minimum animation requirement...)
			options: {
				duration: 3000,
		    	easing: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
		    	iterations: Infinity,
			},
			animating: false,
		})
	}

	play = () => {
		// triggers the animation component's play pause controls
		// build an animation
	}

	pause = () => {

	}

	reset = () => {
		console.log('reset')
		this.setState({
			keyframes: [
				{opacity: 0, offset: 0},
				{opacity: 1, offset: 1}], //start with two default rows (minimum animation requirement...)
			options: {
				duration: 3000,
		    	easing: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
		    	iterations: Infinity,
			},
			animating: false,
		})
	}

	toggleCodeVisibility = () => {
		this.setState({
			codeVisible: !this.state.codeVisible,
		})
	}

	onKeyFramesChange = (index, option, value, offset) => {
		const newKeyframe = { option: option, value: value, offset: offset }
		// array slice and spread needs some love here
		this.setState({
			keyframes: [
				...this.state.keyframes.slice(0, index-1),
				 newKeyframe,
				 ...this.state.keyframes.slice(index-1, index+1)
			 ]
		})
	}

	onOptionsChange = (option, value) => {

	}

    render() {
        return (
            <form>
				<Row>
					<div>
						{/* ANIMATION KEYFRAMES */}
						{console.log(this.state)}
						<KeyFrameInputRows keyframes={this.state.keyframes} onChange={this.onKeyFramesChange}/>

						{/* ANIMATION OPTIONS */}
						<OptionInputRows options={this.state.options} onChange={this.onOptionsChange} />

						{/* ANIMATION CONTROLS */}
						<Row>
							<Button primary type="button" onClick={this.play}>Play</Button>
							<Button secondary type="button" onClick={this.pause}>Pause</Button>
							<Button secondary type="button" onClick={this.toggleCodeVisibility}>
								{this.state.codeVisible ? 'Hide' : 'Show'} Code
							</Button>
							<Button secondary type="button" onClick={this.reset}>Reset</Button>
						</Row>

						{this.state.codeVisible && (
							<Block>
								this is the code
								{/* <ClickableCodeBlock code={this.state.animation} /> */}
							</Block>
						)}
					</div>
					<Animation id='animation'
			            animation={this.state.keyframes}
			            options={this.state.options} >
			            <Shape square />
			        </Animation>
				</Row>
            </form>
        )
    }
}

export default Form
