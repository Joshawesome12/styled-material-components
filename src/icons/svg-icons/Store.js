import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const StorePath = () => [
  <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z" key='path0' />,
];

const StoreIcon = styled(Icon).attrs({
  children: StorePath,
})``;

export default StorePath;
export { StoreIcon };
