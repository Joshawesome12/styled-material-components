import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const BatteryCharging90Path = () => [
  <path fillOpacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V8h5.47L13 7v1h4V5.33C17 4.6 16.4 4 15.67 4z" key='path0' />,
  <path d="M13 12.5h2L11 20v-5.5H9L12.47 8H7v12.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V8h-4v4.5z" key='path1' />,
];

const BatteryCharging90Icon = styled(Icon).attrs({
  children: BatteryCharging90Path,
})``;

export default BatteryCharging90Path;
export { BatteryCharging90Icon };
