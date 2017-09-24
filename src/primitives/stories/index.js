import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { ThemeProvider } from 'styled-components'

import { Button } from '../Button'
import { Shape } from '../Shape'
import Animation from '../Animation'
import { darkTheme, lightTheme } from '../../styles/themes'
import {
    fadeInKeyframes,
    defaultAnimationOptions,
    bounceKeyframes,
    growKeyframes,
    fadeAnimationOptions,
} from '../../styles/animations'

storiesOf('Buttons', module)
.addDecorator(withKnobs)
.add('Orange Theme', () => (
    <ThemeProvider theme={darkTheme}>
        <div>
            <Button
                primary
                onClick={action('clicked')}
                disabled={boolean('Disabled', false)} >
                {text('Label', 'Clicky')}
            </Button>
            <Button
                secondary
                onClick={action('clicked')}
                disabled={boolean('Disabled', false)}>
                {text('Label', 'Clicky')}
            </Button>
        </div>
    </ThemeProvider>
    )
)
.add('Grey Theme', () => (
    <ThemeProvider theme={lightTheme}>
        <div>
            <Button
                primary
                onClick={action('clicked')}
                disabled={boolean('Disabled', false)}>
                {text('Label', 'Clicky')}
            </Button>
            <Button
                secondary
                onClick={action('clicked')}
                disabled={boolean('Disabled', false)}>
                {text('Label', 'Clicky')}
            </Button>
        </div>
    </ThemeProvider>
    )
)

storiesOf('Shapes', module)
.addDecorator(withKnobs)
.add('Image', () => (
    <ThemeProvider theme={lightTheme}>
        <Shape image={'http://fillmurray.com/250/200'} />
    </ThemeProvider>
    )
)
.add('Circle', () => (
    <ThemeProvider theme={darkTheme}>
        <Shape circle />
    </ThemeProvider>
    )
)
.add('Square', () => (
    <ThemeProvider theme={lightTheme}>
        <Shape square />
    </ThemeProvider>
    )
)

storiesOf('Animations', module)
.addDecorator(withKnobs)
.add('Fade in Image', () => (
    <ThemeProvider theme={lightTheme}>
        <Animation id='myImage'
            clickable={boolean('clickable', false)}
            hoverable={boolean('hoverable', false)}
            animation={fadeInKeyframes}
            options={fadeAnimationOptions} >
            <Shape image={'http://fillmurray.com/250/200'} />
        </Animation>
    </ThemeProvider>
    )
)
.add('Grow circle', () => (
    <ThemeProvider theme={darkTheme}>
        <Animation id='myCircle'
            clickable={boolean('clickable', false)}
            hoverable={boolean('hoverable', true)}
            animation={growKeyframes}
            options={defaultAnimationOptions} >
            <Shape circle />
        </Animation>
    </ThemeProvider>
    )
)
.add('Bounce square', () => (
    <ThemeProvider theme={lightTheme}>
        <Animation id='mySquare'
            clickable={boolean('clickable', true)}
            hoverable={boolean('hoverable', false)}
            animation={bounceKeyframes}
            options={defaultAnimationOptions} >
            <Shape square />
        </Animation>
    </ThemeProvider>
    )
)
