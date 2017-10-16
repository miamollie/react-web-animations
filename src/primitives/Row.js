import React, { Component } from 'react'
import styled from 'styled-components'
import {defaults} from '../styles/defaults.js'

export const Row = styled.div`
    min-width: 200px;
    width: 90%;
    margin: auto;
    margin-bottom: ${defaults.margins.medium};
    padding: ${defaults.padding.small};
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.7s background-color ease;
    ${props => props.focusable && `
        margin-bottom: 0;
        &:hover,
        &:focus {
            background-color: rgba(0,0,0,0.1);
            outline: none;
        }
    `}
    ${props => props.left && `
      justify-content: flex-end;
    `}
    ${props => props.top && `
      align-items: flex-start;
    `}
`;
