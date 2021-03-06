import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const LaptopPath = () => [
  <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" key='path0' />,
];

const LaptopIcon = styled(Icon).attrs({
  children: LaptopPath,
})``;

export default LaptopPath;
export { LaptopIcon };
