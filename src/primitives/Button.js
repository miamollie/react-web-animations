import React, { Component } from 'react'
import styled from 'styled-components'
import {defaults} from '../styles/defaults.js'

export const Button = styled.button`
    font-family: ${defaults.type.font};
    border: 2px solid;
    font-size:  ${defaults.type.size};
    border-radius: 5px;
    margin: 5px;
    width: ${defaults.spacing.base};
    height: ${defaults.spacing.smallest};
    &:hover,
    &:focus {
        opacity: ${0.7};
        outline: none;
    }
    ${props => props.disabled && `
        opacity: ${0.4};
        pointer-events: none;
        cursor: not-allowed;
    `}
    ${props => props.primary && `
        color: ${props.theme.primary.color};
        background-color: ${props.theme.primary.backgroundColor};
        border-color: ${props.theme.primary.borderColor};
    `}
    ${props => props.secondary && `
        color: ${props.theme.secondary.color};
        background-color: ${props.theme.secondary.backgroundColor};
        border-color: ${props.theme.secondary.borderColor};
    `}
`;
