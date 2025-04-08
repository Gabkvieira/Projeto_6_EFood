import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.salmao};
  color: ${cores.beje};
  font-size: 12px;
  font-weight: 700;
  padding: 4px 6px;
  margin-right: 6px;
  display: inline-block;
  line-height: 14.06px;
  widht: 121px;
`
