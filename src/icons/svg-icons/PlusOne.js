import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const PlusOnePath = () => [
  <path d="M10 8H8v4H4v2h4v4h2v-4h4v-2h-4zm4.5-1.92V7.9l2.5-.5V18h2V5z" key='path0' />,
];

const PlusOneIcon = styled(Icon).attrs({
  children: PlusOnePath,
})``;

export default PlusOnePath;
export { PlusOneIcon };
