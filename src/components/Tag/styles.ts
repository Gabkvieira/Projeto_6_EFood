import styled from 'styled-components'
import { colors } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.salmon};
  color: ${colors.beige};
  font-size: 12px;
  font-weight: 700;
  padding: 4px 6px;
  display: inline-block;
  line-height: 14.06px;
  widht: 121px;
`
