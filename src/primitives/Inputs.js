import React, { Component } from 'react'
import styled from 'styled-components'
import { defaults } from '../styles/defaults.js'


export const Select = styled.select`
  box-sizing: border-box;
  width:100px;
  padding:5px;
  -webkit-border-radius:4px;
  -moz-border-radius:4px;
  border-radius:4px;
  background: #f8f8f8;
  color:#888;
  border:none;
  outline:none;
  display: inline-block;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  cursor:pointer;
  margin: 0 3px;
  text-align: center;
`

export const Option = styled.option`
  box-sizing: border-box;
  width:100px;
  height:40px;
  padding:5px;
  -webkit-border-radius:4px;
  -moz-border-radius:4px;
  border-radius:4px;
  background: #f8f8f8;
  color:#888;
  border:none;
  outline:none;
  display: inline-block;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  cursor:pointer;
  margin: 0 3px;
  text-align: center;
`

export const Input = styled.input`
  width:100px;
  height:40px;
  padding:5px;
  -webkit-border-radius:4px;
  -moz-border-radius:4px;
  border-radius:4px;
  background: #f8f8f8;
  color:#888;
  border:none;
  outline:none;
  display: inline-block;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  cursor:pointer;
  margin: 0 3px;
  text-align: center;
`
