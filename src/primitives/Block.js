import React, { Component } from 'react'
import styled from 'styled-components'
import {defaults} from '../styles/defaults.js'

export const Block = styled.div`
    margin-bottom: ${defaults.margins.medium};
    padding: ${defaults.padding.small};
    border-bottom: 1px solid grey;
`;
