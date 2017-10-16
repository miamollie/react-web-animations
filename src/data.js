export const keyframeOptionsAndValues = {
	//length  as number+unitpixel/em or percentage %, number, RealNum, angle(as degree or radian)
	// matrix transforms currently unsupported, TODO improvement (better validation of transform values)
	// TODO display all this info  as a modal? if required... Use the values as a hint ( if using for a hint, rewrite to make more clear)
	transform: {
		 translate: ['length', 'length'],
		 translateX: 'length',
		 translateY: 'length',
		 scale: ['number', 'number'],
		 scaleX: 'number',
		 scaleY: 'number',
		 rotate: 'number',
		 skew: ['angle', 'angle'],
		 skewX: 'angle',
		 skewY: 'angle',
		 translate3d: ['length', 'length', 'length'],
		 translateZ: 'length',
		 scale3d: ['number', 'number', 'number'],
		 scaleZ: 'number',
		 rotate3d: ['number', 'number', 'number', 'angle'],
		 rotateX: 'angle',
		 rotateY: 'angle',
		 rotateZ: 'angle',
		 perspective: 'length',
	},
	opacity: 'real',
	// color: [ open a colour picker...] TODO add colour picker
}

export const animationOptionsAndValues = {
	delay: 'number',
	direction: ['normal', 'reverse', 'alternate', 'alternate-reverse'],
	duration: 'number',
	easing: 'string',
	endDelay: 'number',
	fille: ['backwards', 'forwards', 'both', 'none'],
	iterations: 'string',
	iterationStart: ['number', 'Infinity'],
}
