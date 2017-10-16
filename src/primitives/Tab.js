import React, { Component } from 'react'
import styled from 'styled-components'
import {defaults} from '../styles/defaults.js'

export const Tabs = styled.div`
    padding: ${defaults.padding.small};
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${defaults.colors.lightGrey};
`;


export const Tab = styled.a`
    padding: ${defaults.padding.medium};
    color: ${defaults.colors.black};
    &:hover,
    &:focus {
        background-color: rgba(0,0,0,0.1);
    }
    ${props => props.selected && `
      background-color: rgba(0,0,0,0.1);
    `}
`
