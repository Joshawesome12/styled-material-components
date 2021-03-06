import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const ViewHeadlinePath = () => [
  <path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z" key='path0' />,
];

const ViewHeadlineIcon = styled(Icon).attrs({
  children: ViewHeadlinePath,
})``;

export default ViewHeadlinePath;
export { ViewHeadlineIcon };
