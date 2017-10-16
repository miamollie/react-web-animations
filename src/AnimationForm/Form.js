import React, { Component } from 'react'
import { Row } from '../primitives/Row'
import { Column } from '../primitives/Column'
import { Button } from '../primitives/Button'
import { Block } from '../primitives/Block'
import { Shape } from '../primitives/Shape'
import { Tabs, Tab } from '../primitives/Tab'
import ClickableCodeBlock from '../primitives/ClickableCodeBlock'
import Animation from '../primitives/Animation'
import { KeyFrameRows } from './KeyFrameRows'
import { OptionRows } from './OptionRows'

class Form extends Component {
	constructor(){
		super()
		this.state = {
			showKeyframe: true,
			keyframes: [
				{opacity: 0, offset: 0},
			],
			options: {
				duration: 3000,
	    	easing: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
	    	iterations: Infinity,
			},
			animationAvailable: false,
		}
	}

	toggleVisibility = shouldShow => {
		this.setState({
			showKeyframe: shouldShow,
		})
	}

	play = () => {
		this.setState({
			animationAvailable: true
		})
	}

	reset = () => {
		// clear the animation from state and unmount the animation
		this.setState({
			keyframes: [
				{opacity: 0, offset: 0},
			],
			options: {
				duration: 3000,
	    	easing: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
	    	iterations: Infinity,
			},
			animationAvailable: false
		})
	}

	toggleCodeVisibility = () => {
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
			animationAvailable: false,
		})
	}

	addKeyframe = () => {
		const blankKeyframe = {opacity: 0, offset: 0}

		this.setState({
			keyframes: [
				...this.state.keyframes,
				blankKeyframe,
			],
			animationAvailable: false,
		})
	}

	removeKeyframe = index => {
		this.setState({
			keyframes: [
				...this.state.keyframes.slice(0, index),
				...this.state.keyframes.slice(index+1),
			],
			animationAvailable: false,
		})
	}

	onOptionsChange = option => value => {
		this.setState({
			options: {
				[option]: value,
				...this.state.options,
			},
			animationAvailable: false,
		})
	}

    render() {
        return (
							<Row top>
								<Column top>
										<Tabs>
											<Tab selected={this.state.showKeyframe} onClick={() => this.toggleVisibility(true)}>Keyframes</Tab>
											<Tab selected={!this.state.showKeyframe} onClick={() => this.toggleVisibility(false)}>Options</Tab>
										</Tabs>
										<Block show={this.state.showKeyframe}>
											<KeyFrameRows
												keyframes={this.state.keyframes}
												onChange={this.updateKeyframe}
												addKeyframe={this.addKeyframe}
												removeKeyframe={this.removeKeyframe}
											/>

										</Block>
										<Block show={!this.state.showKeyframe}>
											<OptionRows
												options={this.state.options}
												onChange={this.onOptionsChange}
											/>
										</Block>
								</Column>

								<Column>
								{/* Don't render the animation wrapper unless there is an animation */}
								{this.state.animationAvailable ?
									<Animation
										id='animation'
										keyframes={this.state.keyframes}
										options={this.state.options}
									>
										<Shape circle />
									</Animation>
									:
									<Shape circle />
								}

								{/* ANIMATION CONTROLS */}
								<Row>
									<Button primary type="button" onClick={this.play}>Play</Button>
									<Button secondary type="button" onClick={this.toggleCodeVisibility}>
										{this.state.codeVisible ? 'Hide' : 'Show'} Code
									</Button>
									<Button secondary type="button" onClick={this.reset}>Reset</Button>
								</Row>

								{this.state.codeVisible && (
									<Block>
										<ClickableCodeBlock
											id="showCode"
											value={`
												${JSON.stringify(this.state.keyframes)}

												${JSON.stringify(this.state.options)}`} />
									</Block>
								)}
							</Column>
							</Row>
        )
    }
}

export default Form
