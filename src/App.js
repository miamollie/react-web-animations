import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import Form from './AnimationForm/Form'
import { darkTheme } from './styles/themes'

class App extends Component {

    render() {
        return (
            <div style={{maxWidth: '70%', margin: 'auto'}}>
                <ThemeProvider theme={darkTheme}>
                    <Form />
                </ThemeProvider>
            </div>
        )
    }
}

export default App
