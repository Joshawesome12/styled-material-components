import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const Battery20Path = () => [
  <path d="M7 17v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17H7z" key='path0' />,
  <path fillOpacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V17h10V5.33z" key='path1' />,
];

const Battery20Icon = styled(Icon).attrs({
  children: Battery20Path,
})``;

export default Battery20Path;
export { Battery20Icon };
