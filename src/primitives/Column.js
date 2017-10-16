import React, { Component } from 'react'
import styled from 'styled-components'
import {defaults} from '../styles/defaults.js'

export const Column = styled.div`
    padding: ${defaults.padding.large};
    min-height: 80vh;
    min-width: 45vw;
    margin:auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    ${props => props.top && `
      align-items: flex-start;
      justify-content: start;
    `}
`;
