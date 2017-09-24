export const bounceKeyframes = [
  { transform: 'none' },
  { offset: 0.2, transform: 'translate3d(0,0,0)' },
  { offset: 0.4, transform: 'translate3d(0, -30px, 0)' },
  { offset: 0.43, transform: 'translate3d(0, -30px, 0)' },
  { offset: 0.53, transform: 'translate3d(0,0,0)' },
  { offset: 0.7, transform: 'translate3d(0, -15px, 0)' },
  { offset: 0.8, transform: 'translate3d(0,0,0)'},
  { offset: 0.9, transform: 'translate3d(0,-4px,0)' },
  { offset: 0.95, transform: 'translate3d(0,-4px,0)' },
  { transform: 'none' }
]

export const growKeyframes = [
    { transform: 'scale3d(1, 1, 1)'},
    { transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.2},
    { transform: 'scale3d(1, 1, 1)', offset: 0.3},
    { transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.4},
    { transform: 'scale3d(1, 1, 1)' }
]

export const fadeInKeyframes = [
  {opacity: 0.05, transform: 'scale3d(0.95,0.95,0.95)'},
  {opacity: 0.6, transform: 'scale3d(1.01,1.01,1.01)', offset: 0.2},
  {opacity: 0.8, transform: 'scale3d(1,1,1)', offset: 0.5},
  {opacity: 1, transform: 'scale3d(1,1,1)'}
]

export const defaultAnimationOptions = {
    duration: 3000,
    easing: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
    iterations: Infinity,
}

export const fadeAnimationOptions = {
    duration: 2000,
    easing: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
}
