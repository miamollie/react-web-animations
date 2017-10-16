import React, { Component } from 'react'
import styled from 'styled-components'
import {defaults} from '../styles/defaults.js'

export const CodeBlock = styled.code`
    margin-bottom: ${defaults.margins.medium};
    padding: ${defaults.padding.small};
    border-bottom: 1px solid grey;
    background-color: ${defaults.colors.lightGrey};
    cursor: pointer;
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
    const clickTarget = document.querySelector(`${this.props.id}`)
    const range = document.createRange()
    range.selectNode(clickTarget)
    window.getSelection().addRange(range)

      try {
        // Now that we've selected the anchor text, execute the copy command
        const successful = document.execCommand('copy')
        const msg = successful ? 'Copied' : 'Unable to copy'
        this.setCopyAttempted(msg)
      } catch(err) {
        console.log('Oops, unable to copy')
        this.setCopyAttempted('Error: ' + err)
      }

    // Remove the selections - NOTE: Should use
    // removeRange(range) when it is supported
    window.getSelection().removeAllRanges()
  }

  render() {
    return (
      <div>
        <CodeBlock onClick={this.clickToCopy} id={this.props.id}>
          {this.props.value}

        </CodeBlock>
        {this.state.success && (
          <p>Copied!</p> //make a nicer success message...
        )}
      </div>
    )
  }
}

export default ClickableCodeBlock
