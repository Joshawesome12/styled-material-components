import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const ExitToAppPath = () => [
  <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" key='path0' />,
];

const ExitToAppIcon = styled(Icon).attrs({
  children: ExitToAppPath,
})``;

export default ExitToAppPath;
export { ExitToAppIcon };
