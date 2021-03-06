import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const FilterListPath = () => [
  <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" key='path0' />,
];

const FilterListIcon = styled(Icon).attrs({
  children: FilterListPath,
})``;

export default FilterListPath;
export { FilterListIcon };
