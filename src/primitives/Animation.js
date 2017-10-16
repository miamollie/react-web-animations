import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Animation extends Component {

    constructor () {
        super()
        this.state = ({
            animation: null,
            animating: false,
        })
    }

    componentDidMount = () => {
        console.log('Mounted with keyframes')
        // If no trigger defined, play animation by default
        if(!(this.props.clickable || this.props.hoverable)) {
            this.startAnimation()
        }
    }

    componentWillUnmount = () => {
      console.log('Unmounting')
        if(this.props.keyframes && this.props.animating) {
            this.stopAnimation()
        }
    }

	startAnimation = () => {
        if(!this.state.animating && this.state.animation) {
            this.setState({
                animating: true,
            }, () => this.state.animation.play())

        } else {
            const {id, keyframes, options} = this.props
            if (id && keyframes && options) {
              console.log(keyframes, options, 'starting')
                this.setState({
                    animation: document.querySelector(`#${id}`).animate(keyframes, options),
                    animating: true,
                }, () => this.state.animation.play())
            }
        }
	}

    stopAnimation = () => {
        if (this.state.animation && this.state.animating) {
            this.state.animation.cancel() //stop , finish?
            this.setState({
                animating: false,
            })
        }
    }

    toggleAnimation = () => {
        if (this.state.animation && this.state.animating) {
            this.stopAnimation()
        } else {
            this.startAnimation()
        }
    }

    render() {
        return (
            <div id={this.props.id}
                style={{display: 'inline-block'}}
                onClick={this.props.clickable && this.toggleAnimation}
                onMouseEnter={this.props.hoverable && this.startAnimation}
                onMouseLeave={this.props.hoverable && this.stopAnimation}>
                {this.props.children}
            </div>
        )
    }
}

export default Animation

Animation.PropTypes = {
    id: PropTypes.string.required,
    keyframes: PropTypes.object.required,
    options: PropTypes.object.required,
    clickable: PropTypes.boolean,
    hoverable: PropTypes.boolean
}
