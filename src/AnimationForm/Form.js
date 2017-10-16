import React, { Component } from 'react'
import { Row } from '../primitives/Row'
import { Button } from '../primitives/Button'
import { Block } from '../primitives/Block'
import { Shape } from '../primitives/Shape'
import ClickableCodeBlock from '../primitives/ClickableCodeBlock'
import Animation from '../primitives/Animation'
import { KeyFrameRows } from './KeyFrameRows'
import { OptionRows } from './OptionRows'

class Form extends Component {
	constructor(){
		super()
		this.state = {
			keyframes: [
				{opacity: 0, offset: ''},
			],
			options: {
				duration: 3000,
	    	easing: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
	    	iterations: Infinity,
			},
			animation: false,
		}
	}

	play = () => {
		// build an animation
		// mounts the component with the animation by setting animation to be the animation string
		this.buildAnimation()
	}

	pause = () => {
		//pause the animation...
	}

	reset = () => {
		// clear the animation from state and unmount the animation
		this.setState({
			keyframes: [
				{opacity: 0, offset: ''},
			],
			options: {
				duration: 3000,
		    	easing: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
		    	iterations: Infinity,
			},
			animation: false,
		})
	}

	toggleCodeVisibility = () => {

		this.buildAnimation()
		this.setState({
			codeVisible: !this.state.codeVisible,
		})
	}

	updateKeyframe = (index, option, value, offset) => {
		const newKeyframe = {
			[option]: value,
			 offset: offset,
		}

		this.setState({
			keyframes: [
				...this.state.keyframes.slice(0, index),
				 newKeyframe,
				...this.state.keyframes.slice(index+1)
			],
		})
	}

	addKeyframe = () => {
		// add an empty row onto the end of the keyframe array
		const blankKeyframe = {opacity: 0, offset: ''}

		this.setState({
			keyframes: [
				...this.state.keyframes,
				blankKeyframe,
			],
		})
	}

	removeKeyframe = index => {

		this.setState({
			keyframes: [
				...this.state.keyframes.slice(0, index),
				...this.state.keyframes.slice(index+1),
			],
		})
	}

	onOptionsChange = (option, value) => {

	}

	buildAnimation = () => {

		this.setState({
			animation: false,
		}, () => {
			this.setState({
				animation: true,
			})
		})
	}

    render() {
        return (
            <form>
							<Row>
								<div>
									{/* ANIMATION KEYFRAMES */}
									<KeyFrameRows
										keyframes={this.state.keyframes}
										onChange={this.updateKeyframe}
										addKeyframe={this.addKeyframe}
										removeKeyframe={this.removeKeyframe}
									/>

									{/* ANIMATION OPTIONS */}
									{/* <OptionRows
										options={this.state.options}
										onChange={this.onOptionsChange}
									/> */}

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
											<ClickableCodeBlock value={this.state.animation} />
										</Block>
									)}

								</div>

								{/* Don't render the animation wrapper unless there is an animation */}
								{this.state.animation ?
									<Animation
										id='animation'
										keyframes={this.state.keyframes}
										options={this.state.options}
									>
										<Shape square />
									</Animation>
									:
									<Shape square />
								}

							</Row>
            </form>
        )
    }
}

export default Form
