import React, { Component } from 'react'
import { Row } from '../primitives/Row'
import { Block } from '../primitives/Block'
import { animationOptionsAndValues as availableOptions} from '../data'

// pull available options from data but use state for values
export const OptionRows = (onChange, options) => {
	return (
		<Block>
			<Row>Options</Row>
			{Object.keys(availableOptions).map((option, index) =>
							<Row focusable>
								<label htmlFor={option}>{option}</label>
								<input
									value={'option == props.option && props.option.value ? props.value : \'\''}
									onChange={onChange}
									key={index} />
							</Row>
						)}
		</Block>
	)
}
