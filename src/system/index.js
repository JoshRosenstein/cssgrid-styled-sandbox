import styled from 'styled-components'
import System from './system'

const create = new System({
  createComponent: type => (...args) => styled(type)([], ...args)
})

export default create
