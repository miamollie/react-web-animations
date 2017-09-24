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
        // If no trigger defined, play animation by default
        if(!(this.props.clickable || this.props.hoverable)) {
            this.startAnimation()
        }
    }

    componentWillUnmount = () => {
        if(this.props.animation && this.props.animating) {
            this.stopAnimation()
        }
    }

	startAnimation = () => {
        const {id, animation, options} = this.props
        if(!this.state.animating && this.state.animation) {
            this.state.animation.play()
            this.setState({
                animating: true,
            })

        } else {
            if (id && animation && options) {
                this.setState({
                    animation: document.querySelector(`#${id}`).animate(animation, options),
                    animating: true,
                })
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
    animation: PropTypes.object.required,
    options: PropTypes.object.required,
    clickable: PropTypes.boolean,
    hoverable: PropTypes.boolean
}
