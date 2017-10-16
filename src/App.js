import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import Form from './AnimationForm/Form'
import { darkTheme } from './styles/themes'

const App = () => (
    <div>
        <ThemeProvider theme={darkTheme}>
            <Form />
        </ThemeProvider>
    </div>
)


export default App
