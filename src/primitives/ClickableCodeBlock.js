import React, { Component } from 'react'
import styled from 'styled-components'
import {defaults} from '../styles/defaults.js'
import { Row } from './Row'


export const CodeBlock = styled.code`
    margin-bottom: ${defaults.margins.medium};
    padding: ${defaults.padding.small};
    border-bottom: 1px solid grey;
    background-color: ${defaults.colors.lightGrey};
    cursor: pointer;
    max-width: 450px;
`;


class ClickableCodeBlock extends Component {

  constructor() {
    super()
    this.state = {
      success: false,
      msg: '',
    }
  }

  setCopyAttempted = (msg) => {
    this.setState({
      success: true,
      msg: msg,
    })
    setTimeout(() => {
      this.setState({success: false, msg: ''})
    }, 5000)
  }

  clickToCopy = () => {
    const clickTarget = document.querySelector(`#${this.props.id}`)

    const range = document.createRange()
    range.selectNode(clickTarget)
    window.getSelection().addRange(range)

      try {
        const successful = document.execCommand('copy')
        const msg = successful ? 'Copied!' : 'Error: Unable to copy'
        this.setCopyAttempted(msg)
      } catch(err) {
        console.log('Oops, unable to copy')
        this.setCopyAttempted('Error: ' + err)
      }

    window.getSelection().removeAllRanges()
  }

  render() {
    return (
      <Row>
        <CodeBlock
          onClick={this.clickToCopy}
          id={this.props.id}
        >
          {this.props.value}
        </CodeBlock>
        {this.state.success && (
          <p>{this.state.msg}</p>
        )}
      </Row>
    )
  }
}

export default ClickableCodeBlock
