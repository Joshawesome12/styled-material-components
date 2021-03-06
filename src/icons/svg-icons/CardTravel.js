import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const CardTravelPath = () => [
  <path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z" key='path0' />,
];

const CardTravelIcon = styled(Icon).attrs({
  children: CardTravelPath,
})``;

export default CardTravelPath;
export { CardTravelIcon };
