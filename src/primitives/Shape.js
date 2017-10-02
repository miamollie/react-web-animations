import React, { Component } from 'react'
import styled from 'styled-components'
import { defaults } from '../styles/defaults.js'

export const Shape = styled.div`
    margin: 5px;
    width: ${defaults.spacing.base};
    &:hover,
    &:focus {
        opacity: ${0.7};
        outline: none;
    }
    ${props => props.circle && `
		height: ${defaults.spacing.base};
		border-radius: 50%;
    `}
    ${props => props.square && `
        height: ${defaults.spacing.base};
    `}
	${props => props.image && `
		height: ${defaults.spacing.base};
		background-image: url(${props.image});
	`}
	${props => props.theme && `
		background-color: ${props.theme.primary.backgroundColor};
	`}
`;
