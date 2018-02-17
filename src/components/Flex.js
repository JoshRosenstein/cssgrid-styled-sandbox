import system from '../system'
///WIP
const FlexBase = system(
  'color',
  'size',
  'overflow',
  'display',
  'flexWrap',
  'flexDirection',
  'alignItems',
  'alignContent',
  'justifyContent'
)
// const FlexBase = system('size', 'overflow', 'display', props => ({
//   display: props.inline ? 'inline-block' : null
// }))

export const Flex = FlexBase.extend`
  > :first-child {
    min-width: inherit;
    width: inherit;
    max-width: inherit;
    min-height: inherit;
    height: inherit;
    max-height: inherit;
  }
`
Flex.displayName = 'Flex'
