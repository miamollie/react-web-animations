import React, { Component } from 'react'
import styled from 'styled-components'
import {defaults} from '../styles/defaults.js'

export const Block = styled.div`
    width: 100%;
    margin-bottom: ${defaults.margins.medium};
    padding: ${defaults.padding.small};
    border-bottom: 1px solid grey;
    display: none;
    opacity: 0;
    transition: 0.5s all ease;
    ${props => props.show && `
        display: block;
        opacity: 1;
    `}
`;
