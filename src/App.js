import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { Button } from './primitives/Button'
import { Shape } from './primitives/Shape'
import Animation from './primitives/Animation'
import { darkTheme } from './styles/themes'
import {
    fadeInKeyframes,
    defaultAnimationOptions,
    bounceKeyframes,
    growKeyframes,
    fadeAnimationOptions,
} from './styles/animations'

class App extends Component {

    render() {
        return (
            <div className='App'>
                <ThemeProvider theme={darkTheme}>
                    <div>
                        <Animation id='mySquare' animation={bounceKeyframes} options={defaultAnimationOptions} clickable >
                            <Shape square />
                        </Animation>
                        <Animation id='myImage' animation={fadeInKeyframes} options={fadeAnimationOptions} >
                            <Shape image={'http://fillmurray.com/250/200'} />
                        </Animation>
                        <Animation id='myCircle' animation={growKeyframes} options={defaultAnimationOptions} hoverable >
                            <Shape circle />
                        </Animation>

                    </div>
                </ThemeProvider>
            </div>
        )
    }
}

export default App
