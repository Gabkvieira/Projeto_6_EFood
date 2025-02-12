import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.fundoTag};
  color: ${cores.textoTag};
  font-size: 10px;
  font-weight: bold;
  padding: 4px 6px;
  margin-right: 6px;
  display: inline-block;
`
